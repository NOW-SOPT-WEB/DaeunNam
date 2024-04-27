import { SHOPPING_LIST } from "../../constants/shoppingList.js";
import { select } from "../../utils/selector.js";
import { handleItemClick } from "../cart/cart.js";
const shoppingList = SHOPPING_LIST;

// 쇼핑 상품 렌더링
export const renderItems = (shoppingList) => {
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
