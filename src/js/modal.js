(() => {
  const refs = {
    openModalBtn: document.querySelector('.close-button'),
    closeModalBtn: document.querySelector('.gallery__button'),
    modal: document.querySelector('.gallery__backdrop.is-hidden'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
