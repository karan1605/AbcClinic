/**
 * Scroll Reveal & Motion Controller
 * Uses IntersectionObserver and respects prefers-reduced-motion.
 */
(function () {
  function initAnimations() {
    var revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      revealElements.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  window.ABCClinicAnimations = { init: initAnimations };
})();
