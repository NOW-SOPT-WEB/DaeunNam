import { select } from "../../utils/selector";

// 사이드 모달 핸들러
const openModal = select(".open_modal_btn");
const modal = select(".modal");
const handleModal = () => {
  modal.classList.toggle("hidden");
};
modal.addEventListener("click", handleModal);
openModal.addEventListener("click", handleModal);
