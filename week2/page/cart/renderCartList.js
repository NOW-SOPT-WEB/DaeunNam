const select = (selector) => document.querySelector(selector);

// 쇼핑 상품 렌더링
export const renderCartList = () => {
  const cartList = JSON.parse(sessionStorage.getItem("cartList"));
  console.log(cartList);
  const cartTable = select(".cart_table");
  const renderCart = cartList.map((cartElement) => {
    return `
    <tr class="cart_row">
      <td class="cart_data"><input type="checkbox" /></td>
      <td class="cart_data"><img src=${
        cartElement.image
      } class="cart_image"></td>
      <td class="cart_data">${cartElement.title}</td>
      <td class="cart_data">${Number(cartElement.price).toLocaleString()}</td>
      <td class="cart_data">${cartElement.category}</td>
      <td class="cart_data"><button type="button">삭제</button></td>
    </tr>
    `;
  });
  cartTable.innerHTML += renderCart.join("");
};

renderCartList();
