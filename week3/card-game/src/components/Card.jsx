import styled from "@emotion/styled";
import { useCallback, useEffect } from "react";

const Card = (props) => {
  const {
    cardDeck,
    setScore,
    selectedCards,
    setSelectedCards,
    isMatched,
    setIsMatched,
  } = props;

  const handleOnClick = (index) => {
    if (selectedCards.length < 2 && !isMatched.includes(index)) {
      setSelectedCards([...selectedCards, index]);
    }
  };

  // 선택된 두 카드가 같은지 확인
  const handleCompareCards = useCallback(() => {
    const [firstIndex, secondIndex] = selectedCards;
    const firstCard = cardDeck[firstIndex];
    const secondCard = cardDeck[secondIndex];

    return firstCard.id === secondCard.id;
  }, [cardDeck, selectedCards]);

  // 선택된 두 카드가 다를 때 다시 뒤집기
  const resetCards = () => {
    setSelectedCards([]);
  };

  // selectedCards 바뀔 때마다 맞췄는지 확인
  useEffect(() => {
    if (selectedCards.length === 2) {
      if (handleCompareCards()) {
        // 선택된 두 카드가 같을 때 isMatched 배열에 추가
        setIsMatched([...isMatched, ...selectedCards]);
        setScore((prev) => prev + 1);
        resetCards(); // 선택된 카드 배열 초기화
      } else {
        setTimeout(resetCards, 1000); // 1초 후 초기화
      }
    }
  }, [selectedCards]);

  return cardDeck.map((card, index) => (
    <CardWrapper
      key={index}
      onClick={() => handleOnClick(index)}
      $isFlipped={selectedCards.includes(index) || isMatched.includes(index)} // 선택된 카드 혹은 매칭된 카드일 경우
    >
      <CardFront
        src={card.imgSrc}
        alt={card.imgAlt}
        $isFlipped={selectedCards.includes(index) || isMatched.includes(index)}
      />
      <CardBack
        $isFlipped={selectedCards.includes(index) || isMatched.includes(index)}
      />
    </CardWrapper>
  ));
};

export default Card;

const CardWrapper = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.8rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  transition: transform 0.5s;
  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(180deg)" : "rotateY(0)"};
  cursor: pointer;
`;

const CardFront = styled.img`
  object-fit: cover;
  width: 10rem;
  height: 13rem;
  border-radius: 0.8rem;
  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(0)" : "rotateY(180deg)"};
  backface-visibility: hidden;
  transition: transform 0.5s;
`;

const CardBack = styled.article`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(180deg)" : "rotateY(0)"};
`;
