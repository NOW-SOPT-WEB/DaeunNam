const openModal = document.querySelector(".open_modal_btn");
const modal = document.querySelector(".modal");

function handleModal() {
  modal.classList.toggle("hidden");
}

modal.addEventListener("click", handleModal);
openModal.addEventListener("click", handleModal);

function navigateShoppingCart() {
  location.href = "shoppingCart.html";
}

function navigateHome() {
  location.href = "index.html";
}

function handleItemClick() {
  alert("해당 상품이 장바구니로 이동했습니다.");
}
const items = document.querySelectorAll(".shopping_item");
items.forEach((item) => {
  item.addEventListener("click", handleItemClick);
});
