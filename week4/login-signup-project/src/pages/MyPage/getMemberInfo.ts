import { client } from "../../utils/apis/axios";

interface MemberInfoTypes {
  message: string;
  data: {
    authenticationId: string;
    nickname: string;
    phone: string;
  };
}

export const getMemberInfo = async (memberId: number) => {
  client
    .get<MemberInfoTypes>(`/member/info`, {
      headers: {
        memberId: memberId,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
