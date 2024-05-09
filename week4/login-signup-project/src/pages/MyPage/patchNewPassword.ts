import { NavigateFunction } from "react-router-dom";
import { client } from "../../utils/apis/axios";

interface ChangePasswordTypes {
  previousPassword: string;
  newPassword: string;
  newPasswordVerification: string;
  memberId: string;
  navigate: NavigateFunction;
}

export const patchNewPassword = async ({
  previousPassword,
  newPassword,
  newPasswordVerification,
  memberId,
  navigate,
}: ChangePasswordTypes) => {
  if (!previousPassword || !newPassword || !newPasswordVerification) {
    alert("빈칸을 모두 입력해주세요.");
  } else {
    client
      .patch(
        `/member/password`,
        {
          previousPassword: previousPassword,
          newPassword: newPassword,
          newPasswordVerification: newPasswordVerification,
        },
        {
          headers: {
            memberId: memberId,
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
