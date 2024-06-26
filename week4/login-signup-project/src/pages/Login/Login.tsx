import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sprout from "../../assets/images/sprout.png";
import Spacing from "../../components/common/Spacing";
import { ERROR_MESSAGE } from "../../constants/errorMessage";
import { loginMember } from "./loginMember";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isIDErrorMessage, setIsIDErrorMessage] = useState(false);
  const [isPWErrorMessage, setIsPWErrorMessage] = useState(false);
  const navigate = useNavigate();

  const postLoginMemberData = () => {
    loginMember({ authenticationId: id, password: pw, navigate }).catch(
      (error) => {
        if (error == "Error: ID를 입력해주세요") {
          setIsIDErrorMessage(true);
        } else {
          setIsPWErrorMessage(true);
        }
      }
    );
    setIsIDErrorMessage(false);
    setIsPWErrorMessage(false);
  };

  return (
    <BackgroundWrapper>
      <LoginLayout>
        <Header>Login</Header>
        <Image src={sprout} alt="새싹 이미지" />
        <InputContainer>
          <TextBox>ID</TextBox>
          <InputBox onChange={(e) => setId(e.target.value)} value={id} />
        </InputContainer>
        {isIDErrorMessage && <Warning>{ERROR_MESSAGE.id}</Warning>}
        <InputContainer>
          <TextBox>PW</TextBox>
          <InputBox onChange={(e) => setPw(e.target.value)} value={pw} />
        </InputContainer>
        {isPWErrorMessage && <Warning>{ERROR_MESSAGE.pw}</Warning>}
        <Spacing marginBottom="1" />
        <BtnContainer>
          <Button type="button" onClick={postLoginMemberData}>
            로그인
          </Button>
          <Button type="button" onClick={() => navigate("/join")}>
            회원가입
          </Button>
        </BtnContainer>
      </LoginLayout>
    </BackgroundWrapper>
  );
};

export default Login;

const BackgroundWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const LoginLayout = styled.article`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.8rem;
  padding: 3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

const Header = styled.header`
  padding: 1rem;
  ${({ theme }) => theme.fonts.title};
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;

const InputContainer = styled.article`
  display: flex;
  width: 13rem;
  padding: 1rem;
  gap: 1rem;
`;

const TextBox = styled.div`
  margin-right: auto;
  ${({ theme }) => theme.fonts.inputTitle};
`;

const InputBox = styled.input`
  width: 10rem;
  padding: 0.2rem;
  margin-left: auto;
  border: none;
  border-radius: 0.3rem;
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

const Warning = styled.p`
  display: block;
  padding: 0rem 0rem 0rem 5rem;
  width: 13rem;
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.fonts.discription};
`;
