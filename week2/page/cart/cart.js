import { navigateHome } from "../cart/navigateToMain.js";
import { navigateShoppingCart } from "../main/navigateToCart.js";

// 상품 클릭하면 장바구니로 이동
export const handleItemClick = (shoppingitem) => {
  let cartList = sessionStorage.getItem("cartList")
    ? JSON.parse(sessionStorage.getItem("cartList"))
    : [];
  cartList = [...cartList, shoppingitem];
  sessionStorage.setItem("cartList", JSON.stringify(cartList));
  addItem();

  confirm(
    `${shoppingitem.title}(이)가 장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?"`
  )
    ? navigateShoppingCart()
    : navigateHome();
};

const addItem = () => {
  const cart = JSON.parse(sessionStorage.getItem("cartList"));
};
