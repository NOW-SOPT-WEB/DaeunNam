import { AxiosError } from "axios";
import { NavigateFunction } from "react-router-dom";
import { client } from "../../utils/apis/axios";

interface JoinMemberPropTypes {
  authenticationId: string;
  password: string;
  nickname: string;
  phone: string;
  navigate: NavigateFunction;
}

export const joinMember = async ({
  authenticationId,
  password,
  nickname,
  phone,
  navigate,
}: JoinMemberPropTypes) => {
  if (!authenticationId) {
    throw new Error();
  }
  if (!password) {
    throw new Error();
  }
  if (!nickname) {
    throw new Error();
  }
  if (!phone) {
    throw new Error();
  }
  try {
    const response = await client.post("/member/join", {
      authenticationId: authenticationId,
      password: password,
      nickname: nickname,
      phone: phone,
    });
    alert(response.data.message);
    navigate("/");
  } catch (error) {
    if (error instanceof AxiosError) {
      alert(error.response?.data.message);
    }
  }
};
