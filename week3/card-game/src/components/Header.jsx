import styled from "@emotion/styled";

const Header = ({ matchedPairs, cardPairsCount }) => {
  return (
    <HeaderWrapper>
      <TitleWithBtnContainer>
        <Title>🐈 썬구리 고양이 맞추기 🐈‍⬛</Title>
        <ResetBtn>Reset</ResetBtn>
      </TitleWithBtnContainer>
      <GameScore>
        {matchedPairs} / {cardPairsCount}
      </GameScore>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

const TitleWithBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h3`
  display: flex;
  padding: 2rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightPurple};

  ${({ theme }) => theme.fonts.title};
`;

const ResetBtn = styled.button`
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 0.8rem;
  font-weight: bold;

  &:hover {
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border: 2px solid ${({ theme }) => theme.colors.purple};
  }
`;

const GameScore = styled.h4`
  ${({ theme }) => theme.fonts.title};
`;
