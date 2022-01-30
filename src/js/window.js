(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-window-modal-open]'),
    closeModalBtn: document.querySelector('[data-window-modal-close]'),
    modal: document.querySelector('[data-window-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();