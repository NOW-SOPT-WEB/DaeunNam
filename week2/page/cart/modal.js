import { navigateHome } from "./navigateToMain.js";

const select = (selector) => document.querySelector(selector);
const cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];

const homeBtn = select(".home_btn");

homeBtn.addEventListener("click", () => {
  navigateHome();
});

const purchaseBtn = select(".purchase_btn");
const purchaseModal = select(".purchase_modal");
let totalPrice = 0;

// 구매하기 모달 띄우기
purchaseBtn.addEventListener("click", () => {
  showModal();
  showModalItem();
  showPrice();
});

const showModal = () => {
  purchaseModal.classList.add("open");
};

const showModalItem = () => {
  purchaseModal.innerHTML = "";

  cartList.forEach((item) => {
    const purchaseItem = document.createElement("div");
    purchaseItem.classList.add("purchase_item");
    purchaseItem.innerHTML = `
      <img src="${item.image}" class="modal_image">
      <h6>${item.title}</h6>
    `;
    purchaseModal.appendChild(purchaseItem);
    totalPrice += Number(item.price);
  });
};

const showPrice = () => {
  const priceElement = document.createElement("p");
  priceElement.classList.add("total_price");
  priceElement.innerHTML = `
  ${totalPrice}
  `;
  purchaseModal.appendChild(priceElement);
};
