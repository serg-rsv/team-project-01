(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-modal-open]'),
    closeModalBtn: document.querySelector('[data-menu-modal-close]'),
    modal: document.querySelector('[data-menu-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
 


})();
