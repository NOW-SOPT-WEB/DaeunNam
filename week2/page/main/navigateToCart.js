const select = (selector) => document.querySelector(selector);
const cartMenu = select(".nav_shopping_menu");

// 장바구니 페이지 이동
export const navigateShoppingCart = () => {
  location.href = "shoppingCart.html";
};

if (cartMenu) {
  cartMenu.addEventListener("click", () => {
    navigateShoppingCart();
  });
}
