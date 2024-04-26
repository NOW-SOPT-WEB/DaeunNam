import { select, selectAll } from "../../utils/selector";

let cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];
let checkedValues = [];

// 헤더 체크박스 체크하면 하단 체크박스 전체 체크됨
const checkboxes = selectAll('input[type="checkbox"]');
const checkAllBoxes = (allCheckboxes) => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = allCheckboxes.checked;
  });
};

const headerCheckbox = select(".header_checkbox");
headerCheckbox.addEventListener("click", () => {
  checkAllBoxes(headerCheckbox);
});
