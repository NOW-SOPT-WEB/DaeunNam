import { client } from '../../utils/apis/axios';

export const postJoinMember = async () => {
  try {
    const { data } = await client.post('/member/join');
    console.log(data);
    return data;
  } catch (error) {
    console.error();
  }
};
