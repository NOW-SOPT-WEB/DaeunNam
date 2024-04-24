import styled from "@emotion/styled";
import { CARD_LIST } from "../constants/card";

const Card = () => {
  const mixedCardList = [...CARD_LIST].sort(() => 0.5 - Math.random());

  return mixedCardList.map((card, index) => (
    <CardWrapper key={index}>{card.item}</CardWrapper>
  ));
};

export default Card;

const CardWrapper = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.8rem;
  padding: 5rem 3rem;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  ${({ theme }) => theme.fonts.fruits};
`;
