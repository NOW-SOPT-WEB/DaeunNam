import styled from "@emotion/styled";
import { useState } from "react";

const Modal = ({ gameClear, resetCards }) => {
  const [isVisible, setIsvisible] = useState(false);

  const resetHandler = () => {
    resetCards(true);
    setIsvisible(true);
  };

  return (
    <>
      {gameClear && (
        <ModalBackgroundWrapper $isVisible={isVisible}>
          <ModalWrapper>
            <Content>🎉 게임 클리어 🎉</Content>
            <ExitBtn onClick={resetHandler}>게임으로 돌아가기</ExitBtn>
          </ModalWrapper>
        </ModalBackgroundWrapper>
      )}
    </>
  );
};

export default Modal;

const ModalBackgroundWrapper = styled.section`
  position: fixed;
  display: ${({ $isVisible }) => ($isVisible ? "none" : "flex")};
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.article`
  display: flex;
  width: 15rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

const Content = styled.h3`
  ${({ theme }) => theme.fonts.subTitle};
`;

const ExitBtn = styled.button`
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 0.8rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: all 0.5s;
    border: 2px solid ${({ theme }) => theme.colors.purple};
  }
`;
