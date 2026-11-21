/**
 * ABC Clinic Main Script
 * Initializes navigation, scroll animations, testimonial carousel,
 * service category filtering, and back-to-top button.
 */
(function () {
  function initBackToTop() {
    var topBtn = document.querySelector('[data-back-to-top]');
    if (!topBtn) return;

    var toggleVisibility = function () {
      if (window.scrollY > 400) {
        topBtn.classList.add('is-visible');
      } else {
        topBtn.classList.remove('is-visible');
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initTestimonialSlider() {
    var slider = document.querySelector('[data-testimonial-slider]');
    if (!slider) return;

    var slides = Array.from(slider.querySelectorAll('[data-slide]'));
    var prevBtn = slider.querySelector('[data-slider-prev]');
    var nextBtn = slider.querySelector('[data-slider-next]');
    var dots = Array.from(slider.querySelectorAll('[data-slider-dot]'));
    var currentIndex = 0;

    function render() {
      var total = slides.length;
      slides.forEach(function (slide) {
        slide.style.display = 'none';
      });

      var visibleCount = window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      for (var i = 0; i < Math.min(visibleCount, total); i++) {
        var idx = (currentIndex + i) % total;
        slides[idx].style.display = 'flex';
        slides[idx].style.order = String(i);
      }

      dots.forEach(function (dot, idx) {
        dot.classList.toggle('is-active', idx === currentIndex);
        dot.setAttribute('aria-selected', String(idx === currentIndex));
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        render();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        render();
      });
    }

    dots.forEach(function (dot, idx) {
      dot.addEventListener('click', function () {
        currentIndex = idx;
        render();
      });
    });

    window.addEventListener('resize', render);
    render();
  }

  function initServiceFilters() {
    var filterBar = document.querySelector('[data-service-filters]');
    if (!filterBar) return;

    var tabs = filterBar.querySelectorAll('[data-filter]');
    var cards = document.querySelectorAll('[data-service-card]');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var selected = tab.getAttribute('data-filter');
        tabs.forEach(function (t) {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');

        cards.forEach(function (card) {
          var cat = card.getAttribute('data-service-card');
          card.style.display = selected === 'all' || cat === selected ? 'flex' : 'none';
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (window.ABCClinicNav) window.ABCClinicNav.init();
    if (window.ABCClinicAnimations) window.ABCClinicAnimations.init();
    if (window.ABCClinicForms) window.ABCClinicForms.init();
    initBackToTop();
    initTestimonialSlider();
    initServiceFilters();
  });
})();
