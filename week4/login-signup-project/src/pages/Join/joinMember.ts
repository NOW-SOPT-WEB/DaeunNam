import { client } from '../../utils/apis/axios';

interface JoinMemberPropTypes {
  authenticationId: string;
  password: string;
  nickname: string;
  phone: string;
}

export const joinMember = async ({
  authenticationId,
  password,
  nickname,
  phone,
}: JoinMemberPropTypes) => {
  try {
    const { data } = await client.post('/member/join', {
      authenticationId: authenticationId,
      password: password,
      nickname: nickname,
      phone: phone,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
