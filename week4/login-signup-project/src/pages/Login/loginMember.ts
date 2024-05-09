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
  client
    .post("/member/login", {
      authenticationId: authenticationId,
      password: password,
    })
    .then((response) => {
      alert(response.data.message);
      navigate(`/main/${response.headers.location}`);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
