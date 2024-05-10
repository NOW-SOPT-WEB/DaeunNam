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
    throw new Error("ID를 입력해주세요");
  }
  if (!password) {
    throw new Error("비밀번호를 입력해주세요");
  }
  if (!nickname) {
    throw new Error("닉네임을 입력해주세요");
  }
  if (!phone) {
    throw new Error("전화번호를 입력해주세요");
  }
  try {
    const response = await client.post("/member/join", {
      authenticationId: authenticationId,
      password: password,
      nickname: nickname,
      phone: phone,
    });
    alert(response.data.message);
    navigate("/login");
  } catch (error) {
    if (error instanceof AxiosError) {
      alert(error.response?.data.message);
    }
  }
};
