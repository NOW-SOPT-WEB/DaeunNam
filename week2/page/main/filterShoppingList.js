import { SHOPPING_LIST } from "../../constants/shoppingList.js";
import { renderItems } from "./renderShoppingList.js";

const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const shoppingList = SHOPPING_LIST;

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
