(function() {
  const sliders = document.querySelectorAll('.FAQs__body');
  const buttonnext = document.querySelector('#next');
  const buttonbefore = document.querySelector('#before');
  let value;

  // Guard: si no hay slides, salir
  if (!sliders || sliders.length === 0) return;

  if (buttonnext) {
    buttonnext.addEventListener('click', () => changePosition(1));
  }

  if (buttonbefore) {
    buttonbefore.addEventListener('click', () => changePosition(-1));
  }

  const changePosition = (add) => {
    const currentEl = document.querySelector('.FAQs__body--show');
    const currentFAQs = currentEl ? currentEl.dataset.id : '1';
    value = Number(currentFAQs) + add;

    // Remove current
    sliders[Number(currentFAQs) - 1].classList.remove('FAQs__body--show');

    // Wrap-around
    if (value === sliders.length + 1 || value === 0) {
      value = value === 0 ? sliders.length : 1;
    }

    // Show new
    sliders[value - 1].classList.add('FAQs__body--show');
  };

})();


