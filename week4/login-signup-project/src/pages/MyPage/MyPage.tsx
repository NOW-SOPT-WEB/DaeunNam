import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToggleClosedIc, ToggleOpenedIc } from "../../assets/icons";
import Spacing from "../../components/common/Spacing";
import ChangePassword from "./ChangePassword";
import { getMemberInfo } from "./getMemberInfo";

interface InfoTypes {
  authenticationId: string;
  nickname: string;
  phone: string;
}

const MyPage = () => {
  const { memberId } = useParams();
  const [data, setData] = useState<InfoTypes>();
  const [dropDownOpened, setDropdDownOpened] = useState(false);
  const navigate = useNavigate();

  const fetchMemberInfo = async () => {
    const myInfo = await getMemberInfo(memberId || "");
    setData(myInfo);
  };

  const handleDropDown = () => {
    setDropdDownOpened(!dropDownOpened);
  };

  useEffect(() => {
    fetchMemberInfo();
  }, []);

  return (
    <BackgroundWrapper>
      <MyPageLayout>
        <Title>마이 페이지</Title>
        <Spacing marginBottom="2" />
        <InfoContainer>
          <Field>ID</Field>
          <Info>{data?.authenticationId}</Info>
        </InfoContainer>
        <InfoContainer>
          <Field>닉네임</Field>
          <Info>{data?.nickname}</Info>
        </InfoContainer>
        <InfoContainer>
          <Field>전화번호</Field>
          <Info>{data?.phone}</Info>
        </InfoContainer>
        <Spacing marginBottom="2" />
        <ChangePWContainer>
          <DropdownLayout onClick={handleDropDown}>
            <DropDownTitle>비밀번호 변경</DropDownTitle>
            {dropDownOpened ? <ToggleClosedIc /> : <ToggleOpenedIc />}
          </DropdownLayout>
          {dropDownOpened && <ChangePassword />}
        </ChangePWContainer>
        <Spacing marginBottom="2" />
        <Button onClick={() => navigate("/")}>홈으로</Button>
      </MyPageLayout>
    </BackgroundWrapper>
  );
};

export default MyPage;

const BackgroundWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const MyPageLayout = styled.main`
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

const Title = styled.h2`
  ${({ theme }) => theme.fonts.title};
`;

const InfoContainer = styled.section`
  display: flex;
  width: 13rem;
  padding: 1rem;
  gap: 1rem;
`;

const Field = styled.p`
  width: 5rem;
  margin-right: auto;
  ${({ theme }) => theme.fonts.inputTitle};
`;

const Info = styled.p`
  margin-right: auto;
  ${({ theme }) => theme.fonts.inputTitle};
`;

const ChangePWContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropdownLayout = styled.div`
  display: flex;
  width: fit-content;
  gap: 1rem;
  cursor: pointer;
`;

const DropDownTitle = styled.h4`
  color: ${({ theme }) => theme.colors.purple};
  ${({ theme }) => theme.fonts.inputTitle};
`;

const Button = styled.button`
  padding: 0.3rem 0.5rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;
