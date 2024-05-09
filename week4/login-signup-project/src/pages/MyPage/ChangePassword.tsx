import styled from "@emotion/styled";
import Spacing from "../../components/common/Spacing";

const ChangePassword = () => {
  return (
    <Wrapper>
      <Spacing marginBottom="2" />
      <InputContainer>
        <TextBox>기존 비밀번호</TextBox>
        <InputBox />
      </InputContainer>
      <InputContainer>
        <TextBox>새로운 비밀번호</TextBox>
        <InputBox />
      </InputContainer>
      <InputContainer>
        <TextBox>비밀번호 확인</TextBox>
        <InputBox />
      </InputContainer>
    </Wrapper>
  );
};

export default ChangePassword;

const Wrapper = styled.section``;

const InputContainer = styled.article`
  display: flex;
  width: 17rem;
  padding: 0.5rem;
`;

const TextBox = styled.div`
  margin-right: auto;
  ${({ theme }) => theme.fonts.inputTitle};
`;

const InputBox = styled.input`
  /* width: 1rem; */
  margin-left: auto;
  border: none;
  border-radius: 0.3rem;
`;
