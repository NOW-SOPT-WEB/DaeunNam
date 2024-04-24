import styled from "@emotion/styled";
import { CARD_LIST } from "../constants/card";

const Card = () => {
  return CARD_LIST.map((card, index) => (
    <CardWrapper key={index}>{card.item}</CardWrapper>
  ));
};

export default Card;

const CardWrapper = styled.article`
  border-radius: 0.8rem;
  padding: 5rem 3rem;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  ${({ theme }) => theme.fonts.title};
`;
