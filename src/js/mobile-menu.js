(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-btn-open]'),
    closeMenuBtn: document.querySelector('[data-menu-btn-close]'),
    mobileMenu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobileMenu.classList.toggle('is-hidden');
  }
})();
