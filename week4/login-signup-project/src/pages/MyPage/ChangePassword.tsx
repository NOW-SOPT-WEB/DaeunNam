import styled from "@emotion/styled";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Spacing from "../../components/common/Spacing";
import { patchNewPassword } from "./patchNewPassword";

const ChangePassword = () => {
  const { memberId } = useParams();
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordVerification, setnewPasswordVerification] = useState("");

  return (
    <Wrapper>
      <Spacing marginBottom="2" />
      <InputContainer>
        <TextBox>기존 비밀번호</TextBox>
        <InputBox
          onChange={(e) => setPrevPassword(e.target.value)}
          value={prevPassword}
        />
      </InputContainer>
      <InputContainer>
        <TextBox>새로운 비밀번호</TextBox>
        <InputBox
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
        />
      </InputContainer>
      <InputContainer>
        <TextBox>비밀번호 확인</TextBox>
        <InputBox
          onChange={(e) => setnewPasswordVerification(e.target.value)}
          value={newPasswordVerification}
        />
      </InputContainer>
      <Spacing marginBottom="2" />
      <Button
        onClick={() =>
          patchNewPassword({
            previousPassword: prevPassword,
            newPassword: newPassword,
            newPasswordVerification: newPasswordVerification,
            memberId: memberId || "",
          })
        }
      >
        비밀번호 변경
      </Button>
    </Wrapper>
  );
};

export default ChangePassword;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

const Button = styled.button`
  padding: 0.3rem 0.5rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;
