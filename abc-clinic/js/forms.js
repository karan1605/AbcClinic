/**
 * Form Validation Controller
 * Provides accessible client-side validation for Contact and Appointment forms.
 * Note: Does not claim backend persistence until a server endpoint is configured.
 */
(function () {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phonePattern = /^[+]?[\d\s\-()]{7,20}$/;

  function setFieldError(input, message) {
    var field = input.closest('.form-field');
    var errorEl = field ? field.querySelector('.form-error') : null;
    if (message) {
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
      if (errorEl) errorEl.textContent = message;
    } else {
      input.classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
      if (errorEl) errorEl.textContent = '';
    }
  }

  function validateForm(form) {
    var isValid = true;
    var inputs = form.querySelectorAll('[required]');

    inputs.forEach(function (input) {
      var val = (input.value || '').trim();
      var type = input.getAttribute('type');
      var name = input.getAttribute('name');

      if (!val) {
        setFieldError(input, 'This field is required.');
        isValid = false;
        return;
      }

      if (type === 'email' && !emailPattern.test(val)) {
        setFieldError(input, 'Please enter a valid email address.');
        isValid = false;
        return;
      }

      if (type === 'tel' && !phonePattern.test(val)) {
        setFieldError(input, 'Please enter a valid phone number.');
        isValid = false;
        return;
      }

      if (name === 'message' && val.length < 10) {
        setFieldError(input, 'Please enter at least 10 characters.');
        isValid = false;
        return;
      }

      setFieldError(input, '');
    });

    return isValid;
  }

  function initForms() {
    var forms = document.querySelectorAll('[data-validate-form]');
    var today = new Date().toISOString().split('T')[0];

    forms.forEach(function (form) {
      var dateInput = form.querySelector('input[type="date"]');
      if (dateInput) {
        dateInput.setAttribute('min', today);
      }

      form.querySelectorAll('input, select, textarea').forEach(function (field) {
        field.addEventListener('input', function () {
          setFieldError(field, '');
        });
      });

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var statusBox = form.querySelector('[data-form-status]');

        if (!validateForm(form)) {
          if (statusBox) {
            statusBox.classList.remove('is-visible');
          }
          return;
        }

        var formType = form.getAttribute('data-validate-form');
        var submitBtn = form.querySelector('button[type="submit"]');
        var originalBtnContent = submitBtn ? submitBtn.innerHTML : '';

        var formData = {};
        form.querySelectorAll('input, select, textarea').forEach(function (field) {
          var name = field.getAttribute('name');
          if (name) {
            formData[name] = field.value.trim();
          }
        });

        if (formType === 'appointment' && !formData.mode) {
          formData.mode = (window.location.hash.indexOf('telemedicine') !== -1 || (formData.service && formData.service.toLowerCase().indexOf('telemedicine') !== -1)) ? 'telemedicine' : 'in-clinic';
        }

        if (statusBox) {
          statusBox.innerHTML = '<strong>Submitting request...</strong> Please wait.';
          statusBox.classList.add('is-visible');
        }
        if (submitBtn) {
          submitBtn.disabled = true;
        }

        var savePromise = null;
        if (window.ABCClinicFirebase) {
          if (formType === 'appointment') {
            savePromise = window.ABCClinicFirebase.saveAppointment(formData);
          } else {
            savePromise = window.ABCClinicFirebase.saveInquiry(formData);
          }
        }

        if (savePromise) {
          savePromise
            .then(function (docRef) {
              if (statusBox) {
                statusBox.innerHTML =
                  formType === 'appointment'
                    ? '<strong style="color: #025EC1;">✓ Appointment Request Confirmed!</strong> Your appointment has been recorded in the ABC Clinic database (Reference ID: <code>' + docRef.id + '</code>). Our staff will reach out to confirm your scheduled slot.'
                    : '<strong style="color: #025EC1;">✓ Message Sent!</strong> Thank you for contacting ABC Clinic. Your message has been saved in our system and a clinic representative will respond shortly.';
                statusBox.classList.add('is-visible');
              }
              form.reset();
            })
            .catch(function (error) {
              console.error('Firebase save error:', error);
              if (statusBox) {
                statusBox.innerHTML =
                  '<strong style="color: #ED2E27;">⚠️ Notice:</strong> Could not complete database sync (' + (error.message || 'Network error') + '). Please call our helpline directly at <strong>[PHONE]</strong>.';
                statusBox.classList.add('is-visible');
              }
            })
            .finally(function () {
              if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
              }
            });
        } else {
          if (statusBox) {
            statusBox.innerHTML =
              formType === 'appointment'
                ? '<strong>Appointment request recorded.</strong> Our clinic reception will reach out to you.'
                : '<strong>Inquiry recorded.</strong> Thank you for contacting ABC Clinic.';
            statusBox.classList.add('is-visible');
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnContent;
          }
          form.reset();
        }
      });
    });
  }

  window.ABCClinicForms = { init: initForms };
})();
