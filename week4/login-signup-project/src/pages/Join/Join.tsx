import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spacing from "../../components/common/Spacing";
import { checkPassword } from "../../utils/checkPassword";
import { joinMember } from "./joinMember";

const Join = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [isIDError, setIDError] = useState(false);
  const [isPWError, setPWError] = useState(false);
  const [isNickNameError, setIsNickNameError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const inputFields = [
    { value: id, setError: setIDError },
    { value: pw, setError: setPWError },
    { value: nickname, setError: setIsNickNameError },
    { value: phone, setError: setIsPhoneError },
  ];

  const handleCheckInput = () => {
    // 각 필드에 대해 값이 비어 있는지 확인하고 에러 상태 설정
    let isValid = true;
    inputFields.forEach(({ value, setError }) => {
      if (value === "") {
        setError(true);
        isValid = false;
      } else {
        setError(false);
      }
    });
    if (checkPassword(pw)) {
      isValid = false;
    }

    return isValid;
  };

  const postJoinMemberData = () => {
    try {
      if (handleCheckInput()) {
        joinMember({
          authenticationId: id,
          password: pw,
          nickname,
          phone,
          navigate,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (phone.length === 11) {
      setPhone(phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
    } else if (phone.length === 13) {
      setPhone(
        phone
          .replace(/[^0-9]/g, "") // 숫자를 제외한 모든 문자는 제거
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      );
    }
  }, [phone]);

  useEffect(() => {
    // 입력되지 않은 input에 focus
    if (isIDError) idRef.current?.focus();
    else if (isPWError) pwRef.current?.focus();
    else if (isNickNameError) nicknameRef.current?.focus();
    else if (isPhoneError) phoneRef.current?.focus();
  }, [isIDError, isPWError, isNickNameError, isPhoneError]);

  return (
    <BackgroundWrapper>
      <JoinLayout>
        <Header>Join</Header>
        <Spacing marginBottom="1" />
        <InputContainer>
          <TextBox>ID</TextBox>
          <InputBox
            value={id}
            ref={idRef}
            onChange={(e) => setId(e.target.value)}
            $isError={isIDError}
          />
        </InputContainer>
        <InputContainer>
          <TextBox>비밀번호</TextBox>
          <InputBox
            value={pw}
            ref={pwRef}
            onChange={(e) => {
              setPw(e.target.value);
            }}
            $isError={isPWError}
          />
        </InputContainer>
        <Discription>
          비밀번호 형식은 8자이상, 숫자, 특수문자, 영어 알파벳이 포함되어야
          합니다.
        </Discription>
        <InputContainer>
          <TextBox>닉네임</TextBox>
          <InputBox
            value={nickname}
            ref={nicknameRef}
            onChange={(e) => setNickname(e.target.value)}
            $isError={isNickNameError}
          />
        </InputContainer>
        <InputContainer>
          <TextBox>전화번호</TextBox>
          <InputBox
            value={phone}
            ref={phoneRef}
            onChange={(e) => setPhone(e.target.value)}
            $isError={isPhoneError}
          />
        </InputContainer>
        <Discription>전화번호 형식은 010-****-****입니다.</Discription>
        <Spacing marginBottom="1" />
        <BtnContainer>
          <Button type="submit" onClick={postJoinMemberData}>
            회원가입
          </Button>
          <Button type="button" onClick={() => navigate("/")}>
            뒤로가기
          </Button>
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

const InputContainer = styled.article`
  display: flex;
  width: 20rem;
  padding: 1rem;
  gap: 1rem;
`;

const TextBox = styled.div`
  margin-right: auto;
  ${({ theme }) => theme.fonts.inputTitle};
`;

const InputBox = styled.input<{ $isError: boolean }>`
  width: 15rem;
  padding: 0.2rem;
  margin-left: auto;
  border-radius: 0.3rem;
  border: 1px solid
    ${({ $isError, theme }) =>
      $isError ? theme.colors.red : theme.colors.black};
`;

const Discription = styled.p`
  padding: 0rem 0rem 0rem 2.5rem;
  width: 13rem;
  color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.fonts.discription};
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
