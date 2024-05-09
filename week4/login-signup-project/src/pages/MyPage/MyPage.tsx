import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMemberInfo } from "./getMemberInfo";

interface InfoTypes {
  authenticationId: string;
  nickname: string;
  phone: string;
}

const MyPage = () => {
  const { memberId } = useParams();
  const [data, setData] = useState<InfoTypes>();

  const fetchMemberInfo = async () => {
    const myInfo = await getMemberInfo(memberId || "");
    setData(myInfo);
  };

  useEffect(() => {
    fetchMemberInfo();
  }, []);

  return (
    <MyPageWrapper>
      <InfoLayout>
        <Field>ID</Field>
        <Info>{data?.authenticationId}</Info>
      </InfoLayout>
      <InfoLayout>
        <Field>닉네임</Field>
        <Info>{data?.nickname}</Info>
      </InfoLayout>
      <InfoLayout>
        <Field>전화번호</Field>
        <Info>{data?.phone}</Info>
      </InfoLayout>
    </MyPageWrapper>
  );
};

export default MyPage;

const MyPageWrapper = styled.main``;
const InfoLayout = styled.section``;

const Field = styled.span`
  ${({ theme }) => theme.fonts.inputTitle};
`;

const Info = styled.span``;
