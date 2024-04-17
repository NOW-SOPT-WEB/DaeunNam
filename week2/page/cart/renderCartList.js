const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

let cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];

// 쇼핑 상품 렌더링
export const renderCartList = () => {
  const cartTable = select(".cart_body");
  cartTable.innerHTML = "";
  cartList.forEach((cartElement, index) => {
    const cartRow = document.createElement("tr");
    cartRow.classList.add("cart_row");
    cartRow.innerHTML = `
      <td class="cart_data"><input type="checkbox" /></td>
      <td class="cart_data"><img src="${
        cartElement.image
      }" class="cart_image"></td>
      <td class="cart_data">${cartElement.title}</td>
      <td class="cart_data">${Number(cartElement.price).toLocaleString()}</td>
      <td class="cart_data">${cartElement.category}</td>
      <td class="cart_data"><button type="button" class="delete_button" data-index="${index}">삭제</button></td>
    `;
    cartTable.appendChild(cartRow);
  });
};

renderCartList();

// 장바구니 상품 삭제
select(".cart_table").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete_button")) {
    const index = parseInt(event.target.getAttribute("data-index"));
    cartList = cartList.filter((item, deleteIdx) => deleteIdx !== index);
    sessionStorage.setItem("cartList", JSON.stringify(cartList));
    renderCartList(); // 장바구니 다시 로드
  }
});
