import styled from "@emotion/styled";
import { useState } from "react";

const SingleCard = ({ cardDeck }) => {
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
    });
  };

  return cardDeck.map((card, index) => (
    <CardWrapper
      key={index}
      onClick={() => handleOnClick(index)}
      isFlipped={card.isFront}
    >
      <Card src={card.imgSrc} alt={card.imgAlt} isFlipped={card.isFront} />
    </CardWrapper>
  ));
};

export default SingleCard;

const CardWrapper = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.8rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(180deg)" : "rotateY(0)"};
  transition: transform 0.5s;
  cursor: pointer;
`;

const Card = styled.img`
  /* visibility: ${({ $isFlipped }) => ($isFlipped ? "visible" : "hidden")}; */
  object-fit: cover;
  width: 10rem;
  height: 13rem;
  border-radius: 0.8rem;
`;
