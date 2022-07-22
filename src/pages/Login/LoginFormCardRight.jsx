import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../redux/reducers/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
  LoginFormInput,
  LoginFormButton,
  LinkContainer,
  Logo,
  GoogleLogo,
  LoginGoogleButton,
} from './LoginFormElements';
import logo from './logo.png';
import googleLogo from './googleLogo.png';

const FormCard = styled.div`
  width: 700px;
  height: 800px;
  background-color: white;
  border-top-right-radius: 48px;
  border-bottom-right-radius: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginForm = props => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { loginForm, setLoginForm } = props;
  const { email, password } = loginForm;
  let navigate = useNavigate();

  function inputHandleChange(e) {
    const { name, value } = e.target;
    setLoginForm(state => {
      return { ...state, [name]: value };
    });
  }

  async function handleLoginClick(e) {
    e.preventDefault();
    const data = { email: email, password: password };
    const bodyData = JSON.stringify(data);

    await axios
      .post('http://localhost:3001/api/auth/login', bodyData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        const { role, token } = response.data;
        dispatch(setAuth({ role: role, token: token, auth: true }));
        alert(auth.token);
        navigate('/');
      })
      .catch(function (error) {
        console.log(error);
        alert('error');
      });
  }

  async function handleGoogleLoginClick(e) {
    e.preventDefault();

    //CORS에러 있음
    await axios
      .get('http://localhost:3001/api/auth/login/google')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <FormCard>
      <Logo src={logo} alt="Logo" />
      <LoginFormInput
        placeholder="이메일"
        type="email"
        name="email"
        value={email}
        onChange={inputHandleChange}
      />
      <LoginFormInput
        placeholder="비밀번호"
        type="password"
        name="password"
        value={password}
        onChange={inputHandleChange}
      />
      <LoginFormButton onClick={handleLoginClick}>로그인</LoginFormButton>
      <LinkContainer>
        <Link to="/home">비밀번호 찾기</Link>
        <Link to="/signup">회원가입</Link>
      </LinkContainer>
      <LoginGoogleButton onClick={handleGoogleLoginClick}>
        <GoogleLogo src={googleLogo} alt="googleLogo" />
        Google
      </LoginGoogleButton>
      <span>SNS 로그인/회원가입</span>
    </FormCard>
  );
};

export default LoginForm;
