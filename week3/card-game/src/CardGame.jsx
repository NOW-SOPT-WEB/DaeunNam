import styled from "@emotion/styled";
import StageBtn from "./components/StageBtn";

const CardGame = () => {
  return (
    <>
      <HeaderWrapper>🙈 춘식이 맞추기 🙉</HeaderWrapper>
      <StageBtnWrapper>
        <StageBtn stage={"Easy"} />
        <StageBtn stage={"Normal"} />
        <StageBtn stage={"Hard"} />
      </StageBtnWrapper>
    </>
  );
};

export default CardGame;

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightPurple};

  ${({ theme }) => theme.fonts.title};
`;

const StageBtnWrapper = styled.section`
  display: flex;
  gap: 0.5rem;
`;
