import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import {
  Logo,
  LoginInput,
  LoginButton,
  LinkContainer,
} from './GoogleSignupFormElements';
import PersonalInfo from './PersonalInfo';

const SignupCard = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 900px;
  height: 700px;

  border-radius: 48px;

  background-color: white;
`;

const googleSignup = () => {
  return (
    <SignupCard>
      <Logo src={logo} alt="Logo" />
      <PersonalInfo />
      <LoginInput placeholder="닉네임" />
      <LoginButton>구글로 회원가입하기</LoginButton>
    </SignupCard>
  );
};

export default googleSignup;
