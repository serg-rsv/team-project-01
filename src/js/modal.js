(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-open-data]'),
    closeModalBtn: document.querySelector('[modal-close-data]'),
    modal: document.querySelector('[modal-data]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();
