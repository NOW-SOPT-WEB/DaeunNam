import { client } from '../../utils/apis/axios';

interface LoginMemberPropTypes {
  authenticationId: string;
  password: string;
}

export const loginMember = async ({ authenticationId, password }: LoginMemberPropTypes) => {
  try {
    const { data } = await client.post('/member/login', {
      authenticationId: authenticationId,
      password: password,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
