import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spacing from '../../components/common/Spacing';
import { joinMember } from './joinMember';

const Join = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const postJoinMemberData = async () => {
    try {
      const response = await joinMember({ authenticationId: id, password: pw, nickname, phone });
      console.log(response.code);
      if (response.code === 201) {
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BackgroundWrapper>
      <JoinLayout>
        <Header>Join</Header>
        <Spacing marginBottom="1" />
        <InputContainer>
          <TextBox>ID</TextBox>
          <InputBox value={id} onChange={(e) => setId(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <TextBox>비밀번호</TextBox>
          <InputBox value={pw} onChange={(e) => setPw(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <TextBox>닉네임</TextBox>
          <InputBox value={nickname} onChange={(e) => setNickname(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <TextBox>전화번호</TextBox>
          <InputBox value={phone} onChange={(e) => setPhone(e.target.value)} />
        </InputContainer>
        <Spacing marginBottom="1" />
        <BtnContainer>
          <Button type="submit" onClick={postJoinMemberData}>
            회원가입
          </Button>
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
  ${({ theme }) => theme.fonts.title};
`;

const InputContainer = styled.article`
  display: flex;
  width: 14rem;
  padding: 1rem;
  gap: 1rem;
`;

const TextBox = styled.div`
  margin-right: auto;
  ${({ theme }) => theme.fonts.inputTitle};
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
