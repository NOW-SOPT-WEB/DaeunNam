import { SHOPPING_LIST } from "./constants/shoppingList.js";

const shoppingList = SHOPPING_LIST;
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

function filterItems() {
  const categoryList = document.querySelectorAll(".category");

  categoryList.forEach((category) =>
    category.addEventListener("click", (event) => {
      shoppingList.forEach((item) => {});
    })
  );
}

const renderItems = (shoppingList) => {
  const itemLayout = document.querySelector(".item_layout");
  itemLayout.innerHTML = "";

  // 상수로부터 쇼핑 목록 렌더링
  shoppingList.forEach((shoppingItem) => {
    const item = document.createElement("article");
    item.className = "shopping_item";
    const img = document.createElement("img");
    img.src = shoppingItem.image;
    img.alt = shoppingItem.title;
    const likeButton = document.createElement("button");
    likeButton.className = "like_button";
    const likeIcon = document.createElement("i");
    likeIcon.className = "fa-regular fa-heart";
    likeButton.appendChild(likeIcon);

    const itemName = document.createElement("h4");
    itemName.textContent = shoppingItem.title;
    const itemPrice = document.createElement("p");
    itemPrice.textContent = shoppingItem.price;

    item.appendChild(img);
    item.appendChild(likeButton);
    item.appendChild(itemName);
    item.appendChild(itemPrice);
    itemLayout.appendChild(item);
  });
};

renderItems(shoppingList);
