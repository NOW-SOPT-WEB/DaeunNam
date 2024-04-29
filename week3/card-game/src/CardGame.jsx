import styled from "@emotion/styled";
import { useEffect, useReducer, useState } from "react";
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
  const [isReset, setIsReset] = useState(false);
  const [cardDeck, setCardDeck] = useState(
    shuffleCardDeck([...CARD_LIST.slice(0, 5), ...CARD_LIST.slice(0, 5)])
  );
  const [selectedCards, setSelectedCards] = useState([]); // 선택된 카드들
  const [isMatched, setIsMatched] = useState([]); // 맞춰진 카드들

  // 게임 리셋
  const resetCards = (isReset) => {
    setIsReset(isReset);
    setScore(0);
    setSelectedCards([]);
    setIsMatched([]);
  };

  useEffect(() => {
    resetCards();
    console.log("resetCards");
  }, [isReset, cardPairsCount]);

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
      <Header
        matchedPairs={score}
        cardPairsCount={cardPairsCount}
        resetCards={resetCards}
      />
      <StageBtnWrapper>
        <StageBtn stage={"Easy"} onClick={() => dispatch({ type: "EASY" })} />
        <StageBtn
          stage={"Normal"}
          onClick={() => dispatch({ type: "NORMAL" })}
        />
        <StageBtn stage={"Hard"} onClick={() => dispatch({ type: "HARD" })} />
      </StageBtnWrapper>
      <CardWrapper>
        <Card
          cardDeck={cardDeck}
          setScore={setScore}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          isMatched={isMatched}
          setIsMatched={setIsMatched}
        />
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
