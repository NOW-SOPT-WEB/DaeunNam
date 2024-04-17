import { SHOPPING_LIST } from "./constants/shoppingList.js";

const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const shoppingList = SHOPPING_LIST;

// 사이드 모달 핸들러
const openModal = select(".open_modal_btn");
const modal = select(".modal");
const handleModal = () => {
  modal.classList.toggle("hidden");
};
modal.addEventListener("click", handleModal);
openModal.addEventListener("click", handleModal);

// 장바구니 페이지 이동
const navigateShoppingCart = () => {
  location.href = "shoppingCart.html";
};
const cartMenu = select(".nav_shopping_menu");

cartMenu.addEventListener("click", () => {
  navigateShoppingCart();
});

// 상품 클릭하면 장바구니로 이동
const handleItemClick = (shoppingitem) => {
  const cartList = sessionStorage.getItem("cartList")
    ? JSON.parse(sessionStorage.getItem("cartList"))
    : [];
  cartList.push(shoppingitem);
  sessionStorage.setItem("cartList", JSON.stringify(cartList));

  confirm(
    `${shoppingitem.title}이(가) 장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?"`
  )
    ? navigateShoppingCart()
    : (location.href = "index.html");
};

// 쇼핑 상품 렌더링
const renderItems = (shoppingList) => {
  const itemLayout = select(".item_layout");
  itemLayout.innerHTML = "";

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

    // 상품 클릭시 장바구니에 추가
    item.addEventListener("click", () => {
      console.log(shoppingItem);
      handleItemClick(shoppingItem);
    });
  });
};

renderItems(shoppingList);

// 카테고리에 따른 아이템 필터링
const filterSelectedItems = (category) => {
  const categoryHeader = select(".category_title");
  const filteredItems =
    category === "entire"
      ? shoppingList
      : shoppingList.filter((item) => item.category === category);

  switch (category) {
    case "entire":
      categoryHeader.textContent = "전체";
      break;
    case "food":
      categoryHeader.textContent = "음식";
      break;
    case "place":
      categoryHeader.textContent = "장소";
      break;
    case "activity":
      categoryHeader.textContent = "활동";
      break;
    default:
      categoryHeader.textContent = "전체";
  }

  renderItems(filteredItems);
};

const categories = selectAll(".category");
categories.forEach((category) => {
  category.addEventListener("click", () => {
    filterSelectedItems(category.id);
  });
});
