import { useNavigate } from 'react-router-dom';
import { client } from '../../utils/apis/axios';

interface JoinMemberPropTypes {
  authenticationId: string;
  password: string;
  nickname: string;
  phone: string;
}

const navigate = useNavigate();

export const joinMember = async ({
  authenticationId,
  password,
  nickname,
  phone,
}: JoinMemberPropTypes) => {
  client
    .post('/member/join', {
      authenticationId: authenticationId,
      password: password,
      nickname: nickname,
      phone: phone,
    })
    .then((response) => {
      console.log(response);
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    })
    .catch((error) => {
      console.error(error.response.data.message);
      alert(error.response.data.message);
    });
};
