import { client } from "../../utils/apis/axios";

interface MemberInfoTypes {
  message: string;
  data: {
    authenticationId: string;
    nickname: string;
    phone: string;
  };
}

export const getMemberInfo = async (memberId: string) => {
  try {
    const response = await client.get<MemberInfoTypes>(`/member/info`, {
      headers: {
        memberId: memberId,
      },
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
