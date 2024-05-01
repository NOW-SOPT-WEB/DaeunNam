export const shuffleCardDeck = (cardDeck) => {
  cardDeck.sort(() => 0.5 - Math.random());
  return cardDeck;
};
