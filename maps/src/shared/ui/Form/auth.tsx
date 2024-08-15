import { useState } from 'react';

export const useLogin = () => {
  /* form 에서 사용 될 상태값들 */
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  /* 유효성 검증 시 사용 할 에러 메시지 */
  const [idErrorMessage, setIdErrorMessage] = useState<string>('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
  /**
   * 사용 할 정규 표현식
   * emailRegex: 이메일 주소의 형식을 검증하는 정규 표현식입니다.
   * - ^: 문자열의 시작을 의미합니다.
   * - [^\s@]+: 공백이나 '@' 문자를 제외한 하나 이상의 문자를 의미합니다.
   * - @: '@' 문자가 반드시 포함되어야 함을 의미합니다.
   * - [^\s@]+: 공백이나 '@' 문자를 제외한 하나 이상의 문자를 의미합니다.
   * - \.: '.' 문자가 반드시 포함되어야 함을 의미합니다.
   * - [^\s@]+: 공백이나 '@' 문자를 제외한 하나 이상의 문자를 의미합니다.
   * - $: 문자열의 끝을 의미합니다.
   *
   * passwordRegex: 비밀번호의 형식을 검증하는 정규 표현식입니다.
   * - ^: 문자열의 시작을 의미합니다.
   * - (?=.*[A-Z]): 적어도 하나 이상의 대문자가 포함되어야 함을 의미합니다.
   * - (?=.*[a-z]): 적어도 하나 이상의 소문자가 포함되어야 함을 의미합니다.
   * - (?=.*\d): 적어도 하나 이상의 숫자가 포함되어야 함을 의미합니다.
   * - (?=.*[@$!%*?&]): 적어도 하나 이상의 특수문자(@$!%*?&)가 포함되어야 함을 의미합니다.
   * - [A-Za-z\d@$!%*?&]{8,}: 대문자, 소문자, 숫자, 특수문자(@$!%*?&)로 이루어진 최소 8자 이상의 문자열을 의미합니다.
   * - $: 문자열의 끝을 의미합니다.
   */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  /* 유효성 검증에 사용 할 검증 메소드 */
  const isErroronId = (id: string) => {
    if (id.length === 0) {
      return false;
    }
    return !emailRegex.test(id);
  };

  const isErroronPassword = (password: string) => {
    if (password.length === 0) {
      return false;
    }
    return !passwordRegex.test(password);
  };

  const isSamePassword = (password: string, passwordCheck: string) =>
    password === passwordCheck;

  /* input onChange에 부착 될 이벤트 핸들러들 */
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setId(value);
    if (isErroronId(value)) {
      setIdErrorMessage('이메일 형식이 올바르지 않습니다.');
    } else {
      setIdErrorMessage('');
    }
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    if (isErroronPassword(value)) {
      setPasswordErrorMessage('비밀번호 형식이 올바르지 않습니다.');
    } else {
      setPasswordErrorMessage('');
    }
  };
  const onChangePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    if (!isSamePassword(password, passwordCheck)) {
      setPasswordErrorMessage('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordErrorMessage('');
    }
  };

  const isAbledToSubmit = !idErrorMessage && !passwordErrorMessage;

  return {
    id,
    password,
    passwordCheck,
    idErrorMessage,
    passwordErrorMessage,
    onChangeId,
    onChangePassword,
    onChangePasswordCheck,
    isAbledToSubmit,
  };
};
