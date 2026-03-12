(function () {
  const cta = document.querySelector('#whatsapp-cta');

  if (!cta) return;

  const desktopMedia = window.matchMedia('(min-width: 640px)');
  let hasShownByScroll = false;
  let autoShowing = false;

  function showLabel() {
    cta.classList.add('is-visible');
  }

  function hideLabel() {
    cta.classList.remove('is-visible');
  }

  function maybeShowOnScroll() {
    if (!desktopMedia.matches) return;
    if (hasShownByScroll) return;

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (!(scrollableHeight >= 1)) return;

    const scrollProgress = window.scrollY / scrollableHeight;

    if (scrollProgress >= 0.3) {
      hasShownByScroll = true;
      autoShowing = true;
      showLabel();
      window.setTimeout(function () {
        autoShowing = false;
        if (!cta.matches(':hover')) {
          hideLabel();
        }
      }, 5000);
      window.removeEventListener('scroll', maybeShowOnScroll);
    }
  }

  cta.addEventListener('mouseenter', showLabel);
  cta.addEventListener('mouseleave', function () {
    if (autoShowing) return;
    hideLabel();
  });

  desktopMedia.addEventListener('change', function (event) {
    if (!event.matches) {
      hideLabel();
      return;
    }

    maybeShowOnScroll();
  });

  window.addEventListener('scroll', maybeShowOnScroll, { passive: true });
  maybeShowOnScroll();
})();
