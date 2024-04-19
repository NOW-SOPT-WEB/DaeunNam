const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

let cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];
const cartTable = select(".cart_table");
const cartBody = select(".cart_body");

// 쇼핑 상품 렌더링
export const renderCartList = () => {
  cartBody.innerHTML = "";
  cartList.forEach((cartElement, index) => {
    const cartRow = document.createElement("tr");
    cartRow.classList.add("cart_row");
    cartRow.innerHTML = `
      <td class="cart_data checkbox" name="checkbox"><input type="checkbox" /></td>
      <td class="cart_data"><img src="${
        cartElement.image
      }" class="cart_image"></td>
      <td class="cart_data">${cartElement.title}</td>
      <td class="cart_data">${Number(cartElement.price).toLocaleString()}</td>
      <td class="cart_data">${cartElement.category}</td>
      <td class="cart_data"><button type="button" class="delete_button" data-index="${index}">삭제</button></td>
    `;
    cartBody.appendChild(cartRow);
  });
};

renderCartList();

// 삭제 버튼 클릭 이벤트
cartTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete_button")) {
    deleteItem();
  }
});

// 삭제 버튼 클릭 핸들러
const deleteItem = () => {
  // 클릭된 영역 중 삭제 버튼의 인덱스 저장
  const index = parseInt(event.target.getAttribute("data-index"));
  cartList = cartList.filter((item, deleteIndex) => deleteIndex !== index);
  sessionStorage.setItem("cartList", JSON.stringify(cartList));
  renderCartList();
};
