import styled from "@emotion/styled";
import Spacing from "../components/common/Spacing";

const Join = () => {
  return (
    <BackgroundWrapper>
      <JoinLayout>
        <Header>Join</Header>
        <IDContainer>
          <TextBox>ID</TextBox>
          <InputBox />
        </IDContainer>
        <PWContainer>
          <TextBox>비밀번호</TextBox>
          <InputBox />
        </PWContainer>
        <NickNameContainer>
          <TextBox>닉네임</TextBox>
          <InputBox />
        </NickNameContainer>
        <PhoneContainer>
          <TextBox>전화번호</TextBox>
          <InputBox />
        </PhoneContainer>
        <Spacing marginBottom="1" />
        <BtnContainer>
          <Button type="button">회원가입</Button>
          <Button type="button">뒤로가기</Button>
        </BtnContainer>
      </JoinLayout>
    </BackgroundWrapper>
  );
};

export default Join;

const BackgroundWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const JoinLayout = styled.article`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.8rem;
  padding: 5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

const Header = styled.header`
  padding: 1rem;
  ${({ theme }) => theme.fonts.Title};
`;

const IDContainer = styled.article`
  display: flex;
  width: 13rem;
  padding: 1rem;
  gap: 1rem;
`;

const PWContainer = styled.article`
  display: flex;
  width: 13rem;
  padding: 1rem;
  gap: 1rem;
`;

const NickNameContainer = styled.article``;

const PhoneContainer = styled.article``;

const TextBox = styled.div`
  margin-right: auto;
  ${({ theme }) => theme.fonts.Body};
`;

const InputBox = styled.input`
  margin-left: auto;
`;

const BtnContainer = styled.section`
  display: flex;
  gap: 2rem;
`;

const Button = styled.button`
  padding: 0.3rem 0.5rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;
