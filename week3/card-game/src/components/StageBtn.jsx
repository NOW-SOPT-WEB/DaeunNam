import styled from "@emotion/styled";

const StageBtn = ({ stage, onClick }) => {
  return <Stage onClick={onClick}>{stage}</Stage>;
};

export default StageBtn;

const Stage = styled.button`
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 0.8rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: all 0.5s;
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;
