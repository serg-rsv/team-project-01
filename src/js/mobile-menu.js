(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-btn-open]'),
    closeMenuBtn: document.querySelector('[data-menu-btn-close]'),
    mobileMenu: document.querySelector('[data-menu]'),
    mobileLink: document.querySelectorAll('[js-menu-link]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.mobileLink.forEach(item => item.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.mobileMenu.classList.toggle('is-hidden');
  }
})();
