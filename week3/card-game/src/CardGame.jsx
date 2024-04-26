import styled from "@emotion/styled";
import { useReducer, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import StageBtn from "./components/StageBtn";
import { CARD_LIST } from "./constants/card";

const CardGame = () => {
  const shuffleCardDeck = (cardDeck) => {
    cardDeck.sort(() => 0.5 - Math.random());
    return cardDeck;
  };

  const [score, setScore] = useState(0);
  const [cardPairsCount, setCardPairsCount] = useState(5);
  const [cardDeck, setCardDeck] = useState(
    shuffleCardDeck([...CARD_LIST.slice(0, 5), ...CARD_LIST.slice(0, 5)])
  );

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

  const [, dispatch] = useReducer(reducer, []);

  return (
    <GameWrapper>
      <Header matchedPairs={score} cardPairsCount={cardPairsCount} />
      <StageBtnWrapper>
        <StageBtn stage={"Easy"} onClick={() => dispatch({ type: "EASY" })} />
        <StageBtn
          stage={"Normal"}
          onClick={() => dispatch({ type: "NORMAL" })}
        />
        <StageBtn stage={"Hard"} onClick={() => dispatch({ type: "HARD" })} />
      </StageBtnWrapper>
      <CardWrapper>
        <Card cardDeck={cardDeck} setScore={setScore} />
      </CardWrapper>
    </GameWrapper>
  );
};

export default CardGame;

const GameWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.gray};
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
