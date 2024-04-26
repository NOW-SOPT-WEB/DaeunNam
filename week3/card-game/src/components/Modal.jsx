import styled from "@emotion/styled";

const Modal = () => {
  return (
    <ModalBackgroundWrapper>
      <ModalWrapper>
        <Content>축하합니다 🎉</Content>
      </ModalWrapper>
    </ModalBackgroundWrapper>
  );
};

export default Modal;

const ModalBackgroundWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

const Content = styled.h3`
  ${({ theme }) => theme.fonts.subTitle};
`;
