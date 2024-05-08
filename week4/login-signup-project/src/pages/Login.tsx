import styled from "@emotion/styled";
import sprout from "../assets/image/sprout.png";

const Login = () => {
  return (
    <BackgroundWrapper>
      <LoginLayout>
        <Header>Login</Header>
        <Image src={sprout} />
        <IDContainer>
          <TextBox>ID</TextBox>
          <InputBox />
        </IDContainer>
        <PWContainer>
          <TextBox>PW</TextBox>
          <InputBox />
        </PWContainer>
      </LoginLayout>
    </BackgroundWrapper>
  );
};

export default Login;

const BackgroundWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
`;

const LoginLayout = styled.article`
  position: absolute;
  padding: 5rem;
  top: 30%;
  left: 30%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

const Header = styled.header`
  padding: 1rem;
  ${({ theme }) => theme.fonts.Title};
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;

const IDContainer = styled.article``;

const PWContainer = styled.article``;

const TextBox = styled.div``;

const InputBox = styled.input``;
