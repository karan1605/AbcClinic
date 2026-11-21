/**
 * Navigation Controller
 * Handles sticky header state, mobile drawer toggle, dropdown accessibility,
 * and active navigation highlighting.
 */
(function () {
  function initNavigation() {
    var header = document.querySelector('.site-header');
    var toggleBtn = document.querySelector('[data-mobile-toggle]');
    var drawer = document.querySelector('[data-mobile-drawer]');

    // Sticky scroll state
    if (header) {
      var updateSticky = function () {
        if (window.scrollY > 24) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      };
      window.addEventListener('scroll', updateSticky, { passive: true });
      updateSticky();
    }

    // Mobile drawer toggle
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', function () {
        var isOpen = drawer.classList.toggle('is-open');
        toggleBtn.setAttribute('aria-expanded', String(isOpen));
        toggleBtn.setAttribute(
          'aria-label',
          isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
          drawer.classList.remove('is-open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Keyboard dropdown toggle support
    var dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
    dropdownTriggers.forEach(function (trigger) {
      trigger.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          var parent = trigger.closest('.nav-item');
          if (parent) parent.classList.remove('is-open');
        }
      });
    });
  }

  window.ABCClinicNav = { init: initNavigation };
})();
