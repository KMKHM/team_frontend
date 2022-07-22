import React from 'react';
import { LoginInput } from './SignupFormElements';

const SignupInput = props => {
  const { userInfo, setUserInfo, checkPassword, setCheckPassword } = props;

  function inputHandleChange(e) {
    const { name, value } = e.target;
    setUserInfo(state => {
      return { ...state, [name]: value };
    });
  }

  function passwordCheckHandleChange(e) {
    setCheckPassword(e.target.value);
  }

  return (
    <>
      <LoginInput
        placeholder="닉네임"
        name="nickname"
        value={userInfo.nickname}
        onChange={inputHandleChange}
      />
      <LoginInput
        placeholder="이메일"
        type="email"
        name="email"
        value={userInfo.email}
        onChange={inputHandleChange}
      />
      <LoginInput
        placeholder="비밀번호"
        type="password"
        name="password"
        value={userInfo.password}
        onChange={inputHandleChange}
      />
      <LoginInput
        placeholder="비밀번호 확인"
        type="password"
        value={checkPassword}
        onChange={passwordCheckHandleChange}
      />
    </>
  );
};

export default SignupInput;
