import { NavigateFunction } from 'react-router-dom';
import { client } from '../../utils/apis/axios';

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
  client
    .post('/member/join', {
      authenticationId: authenticationId,
      password: password,
      nickname: nickname,
      phone: phone,
    })
    .then((response) => {
      alert(response.data.message);
      console.log(response);
      navigate('/login');
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
