import { AxiosError } from "axios";
import { NavigateFunction } from "react-router-dom";
import { client } from "../../utils/apis/axios";

interface LoginMemberPropTypes {
  authenticationId: string;
  password: string;
  navigate: NavigateFunction;
}

export const loginMember = async ({
  authenticationId,
  password,
  navigate,
}: LoginMemberPropTypes) => {
  if (!authenticationId) {
    throw new Error("ID를 입력해주세요");
  }
  if (!password) {
    throw new Error("비밀번호를 입력해주세요");
  }
  try {
    const response = await client.post("/member/login", {
      authenticationId: authenticationId,
      password: password,
    });
    alert(response.data.message);
    navigate(`/main/${response.headers.location}`);
  } catch (error) {
    if (error instanceof AxiosError) {
      alert(error.response?.data.message);
    }
  }
};
