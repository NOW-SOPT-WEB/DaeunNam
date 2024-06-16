import { useState } from "react";

interface InputFieldsPropTypes {
  id: string;
  pw: string;
  nickname: string;
  phone: string;
}

const useCheckInput = ({ id, pw, nickname, phone }: InputFieldsPropTypes) => {
  const [isIDError, setIDError] = useState(false);
  const [isPWError, setPWError] = useState(false);
  const [isNickNameError, setIsNickNameError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);

  const inputFields = [
    { value: id, setError: setIDError, errorMessage: "ID를 입력해주세요" },
    {
      value: pw,
      setError: setPWError,
      errorMessage: "비밀번호를 입력해주세요",
    },
    {
      value: nickname,
      setError: setIsNickNameError,
      errorMessage: "닉네임을 입력해주세요",
    },
    {
      value: phone,
      setError: setIsPhoneError,
      errorMessage: "전화번호를 입력해주세요",
    },
  ];
  return {
    inputFields,
    isIDError,
    isPWError,
    isNickNameError,
    isPhoneError,
  };
};

export default useCheckInput;
