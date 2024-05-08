import { client } from '../../utils/apis/axios';

interface JoinMemberPropTypes {
  authenticationId: string;
  password: string;
}

export const joinMember = async ({ authenticationId, password }: JoinMemberPropTypes) => {
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
