import styled from "@emotion/styled";
import { useState } from "react";

const Card = ({ cardDeck }) => {
  const [isClicked, setIsClicked] = useState([]);

  const handleOnClick = (cardIdx) => {
    if (!isClicked.includes(cardIdx)) {
      setIsClicked([...isClicked, cardIdx]);
    }
    cardDeck.forEach((card, index) => {
      if (index === cardIdx) {
        card.isFront = !card.isFront;
        console.log(card.isFront);
      }
      handleMatchingCards();
    });
  };

  const handleMatchingCards = () => {
    if (isClicked.length === 2) {
      let firstCard = cardDeck.find(
        (select) => select.index === isClicked[0]
      ).id;
      let secondCard = cardDeck.find(
        (select) => select.index === isClicked[1]
      ).id;
      console.log(firstCard);
      console.log(secondCard);
    }
  };

  return cardDeck.map((card, index) => (
    <CardWrapper
      key={index}
      onClick={() => handleOnClick(index)}
      isFlipped={card.isFront}
    >
      <FrontFace
        src={card.imgSrc}
        alt={card.imgAlt}
        $isFlipped={card.isFront}
      />
      <BackFace $isFlipped={card.isFront}>뒷면</BackFace>
    </CardWrapper>
  ));
};

export default Card;

const CardWrapper = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.8rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(180deg)" : "rotateY(0)"};
  transition: transform 0.5s;
  cursor: pointer;
`;

const FrontFace = styled.img`
  /* visibility: ${({ $isFlipped }) => ($isFlipped ? "visible" : "hidden")}; */
  object-fit: cover;
  width: 10rem;
  height: 13rem;
  border-radius: 0.8rem;
`;

const BackFace = styled.article``;
