import { client } from "../../utils/apis/axios";

interface ChangePasswordTypes {
  previousPassword: string;
  newPassword: string;
  newPasswordVerification: string;
  memberId: string;
}

export const patchNewPassword = async ({
  previousPassword,
  newPassword,
  newPasswordVerification,
  memberId,
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
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
