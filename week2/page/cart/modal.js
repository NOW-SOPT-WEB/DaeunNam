import { select } from "../../utils/selector.js";
import { closeModal } from "./closeModal.js";
import { navigateHome } from "./navigateToMain.js";

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
  showPurchaseBtn();
});

const showModal = () => {
  purchaseModal.classList.add("open");
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
  modalTitle.textContent = "장바구니";
  purchaseModal.appendChild(modalTitle);

  cartList.forEach((item) => {
    const purchaseItem = document.createElement("div");
    purchaseItem.className = "purchase_item";
    purchaseItem.innerHTML = `
      <img src="${item.image}" class="modal_image">
      <h6>${item.title}</h6>
      <h6>${Number(item.price).toLocaleString()}</h6>
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
  총액 : ${Number(totalPrice).toLocaleString()}
  `;
  purchaseModal.appendChild(priceElement);
};

const showPurchaseBtn = () => {
  const purchaseBtn = document.createElement("button");
  purchaseBtn.className = "purchase_modal_btn";
  purchaseBtn.textContent = "구매하기";
  purchaseModal.appendChild(purchaseBtn);

  purchaseBtn.addEventListener("click", () => {
    alert("구매가 완료되었습니다");
    closeModal();
  });
};
