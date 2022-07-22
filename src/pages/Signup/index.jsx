import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import { Logo, LoginButton, LinkContainer } from './SignupFormElements';
import SignupInput from './SignupInput';
import PersonalInfo from './PersonalInfo';

const SignupCard = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 900px;
  height: 1100px;

  border-radius: 48px;

  background-color: white;
`;

const SignUp = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    nickname: '',
  });
  const [checkPassword, setCheckPassword] = useState('');
  const [locationInfo, setLocationInfo] = useState({
    location: '',
    latitude: 0,
    longitude: 0,
  });
  const [gender, setGender] = useState({
    gender: '',
  });
  const state = { ...userInfo, ...locationInfo, ...gender };
  async function handleSignupClick(e) {
    e.preventDefault();
    const bodyData = JSON.stringify(state);
    //아직 백엔드와 연결 X
    await axios
      .post('http://localhost:3001/api/users', bodyData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        if (response.status === 201) {
          alert('가입 성공');
          navigate('/login');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <SignupCard>
      <Logo src={logo} alt="Logo" />
      <PersonalInfo
        locationInfo={locationInfo}
        setLocationInfo={setLocationInfo}
        gender={gender}
        setGender={setGender}
      />
      <SignupInput
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        checkPassword={checkPassword}
        setCheckPassword={setCheckPassword}
      />
      <LoginButton onClick={handleSignupClick}>회원가입하기</LoginButton>
      <LinkContainer>
        <Link to="/Login">로그인 페이지로 돌아가기</Link>
      </LinkContainer>
    </SignupCard>
  );
};

export default SignUp;
