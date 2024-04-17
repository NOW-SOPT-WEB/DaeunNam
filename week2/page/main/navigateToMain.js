const select = (selector) => document.querySelector(selector);

// 메인 페이지 이동
export const homeBtn = select(".navigate_home_btn");
export const navigateHome = () => {
  location.href = "index.html";
};
homeBtn.addEventListener("click", () => {
  console.log("zmfflr");
  navigateHome();
});
