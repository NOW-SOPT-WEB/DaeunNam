import styled from "@emotion/styled";
import Card from "./components/Card";
import StageBtn from "./components/StageBtn";

const CardGame = () => {
  return (
    <GameWrapper>
      <HeaderWrapper>🫐 과일 맞추기 🫐</HeaderWrapper>
      <StageBtnWrapper>
        <StageBtn stage={"Easy"} />
        <StageBtn stage={"Normal"} />
        <StageBtn stage={"Hard"} />
      </StageBtnWrapper>
      <CardWrapper>
        <Card />
      </CardWrapper>
    </GameWrapper>
  );
};

export default CardGame;

const GameWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.gray};
`;

const HeaderWrapper = styled.header`
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
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const CardWrapper = styled.section`
  display: flex;
  padding: 3rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;
