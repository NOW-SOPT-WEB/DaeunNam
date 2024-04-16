const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

// 메인 페이지 이동
const homeBtn = select(".navigate_home_btn");
const navigateHome = () => {
  location.href = "index.html";
};
homeBtn.addEventListener("click", () => {
  console.log("zmfflr");
  navigateHome();
});
