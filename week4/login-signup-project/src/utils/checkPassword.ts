export const checkPassword = (password: string) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "비밀번호가 형식(최소 8글자 이상, 숫자, 문자(a-z, A-Z), 특수문자 포함)에 맞지 않습니다."
    );
    return true;
  }
};
