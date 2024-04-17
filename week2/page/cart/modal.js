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

const closeModal = () => {
  purchaseModal.classList.remove("open");
};

const showModalItem = () => {
  purchaseModal.innerHTML = "";

  const exitBtn = document.createElement("button");
  exitBtn.className = "modal_exit_btn";
  const exitIcon = document.createElement("i");
  exitIcon.className = "fa-solid fa-xmark";
  exitBtn.appendChild(exitIcon);
  purchaseModal.appendChild(exitBtn);
  const modalTitle = document.createElement("h4");
  modalTitle.className = "modal_title";
  modalTitle.textContent = "구매하기";
  purchaseModal.appendChild(modalTitle);

  cartList.forEach((item) => {
    const purchaseItem = document.createElement("div");
    purchaseItem.className = "purchase_item";
    purchaseItem.innerHTML = `
      <img src="${item.image}" class="modal_image">
      <h6>${item.title}</h6>
    `;
    purchaseModal.appendChild(purchaseItem);
    totalPrice += Number(item.price);
  });
  exitBtn.addEventListener("click", () => {
    closeModal();
  });
};

const showPrice = () => {
  const priceElement = document.createElement("p");
  priceElement.className = "total_price";
  priceElement.innerHTML = `
  총액 : ${totalPrice}
  `;
  purchaseModal.appendChild(priceElement);
};
