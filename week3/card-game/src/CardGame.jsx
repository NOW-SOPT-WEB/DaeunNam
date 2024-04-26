import styled from "@emotion/styled";
import { useReducer, useState } from "react";
import SingleCard from "./components/SingleCard";
import StageBtn from "./components/StageBtn";
import { CARD_LIST } from "./constants/card";

const CardGame = () => {
  const shuffleCardDeck = (cardDeck) => {
    cardDeck.sort(() => 0.5 - Math.random());
    return cardDeck;
  };

  const [cardPairsCount, setCardPairsCount] = useState(5);
  const [cardDeck, setCardDeck] = useState([
    ...CARD_LIST.slice(0, 5),
    ...CARD_LIST.slice(0, 5),
  ]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "EASY":
        setCardPairsCount(5);
        setCardDeck(() => {
          const cards = [...CARD_LIST.slice(0, 5), ...CARD_LIST.slice(0, 5)];
          return shuffleCardDeck(cards);
        });
        break;
      case "NORMAL":
        setCardPairsCount(7);
        setCardDeck(() => {
          const cards = [...CARD_LIST.slice(0, 7), ...CARD_LIST.slice(0, 7)];
          return shuffleCardDeck(cards);
        });
        break;
      case "HARD":
        setCardPairsCount(9);
        setCardDeck(() => {
          const cards = [...CARD_LIST.slice(0, 9), ...CARD_LIST.slice(0, 9)];
          return shuffleCardDeck(cards);
        });
        break;
      default:
        return state;
    }
  };

  const [, dispatch] = useReducer(reducer, {});

  return (
    <GameWrapper>
      <HeaderWrapper>
        <TitleWithBtnContainer>
          <Title>🐈 썬구리 고양이 맞추기 🐈‍⬛</Title>
          <ResetBtn>Reset</ResetBtn>
        </TitleWithBtnContainer>
        <GameScore>0 / {cardPairsCount}</GameScore>
      </HeaderWrapper>
      <StageBtnWrapper>
        <StageBtn stage={"Easy"} onClick={() => dispatch({ type: "EASY" })} />
        <StageBtn
          stage={"Normal"}
          onClick={() => dispatch({ type: "NORMAL" })}
        />
        <StageBtn stage={"Hard"} onClick={() => dispatch({ type: "HARD" })} />
      </StageBtnWrapper>
      <CardWrapper>
        <SingleCard cardDeck={cardDeck} />
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

const StageBtnWrapper = styled.section`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const CardWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;
