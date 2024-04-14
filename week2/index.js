const openModal = document.querySelector(".open_modal_btn");
const modal = document.querySelector(".modal");

function handleModal() {
  modal.classList.toggle("hidden");
}

modal.addEventListener("click", handleModal);
openModal.addEventListener("click", handleModal);
