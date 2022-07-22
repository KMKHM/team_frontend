import React, { useState } from 'react';
import LoginFormCardRight from './LoginFormCardRight';
import LoginImageCardLeft from './LoginImageCardLeft';
import LoginCard from './LoginCard';

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  return (
    <LoginCard>
      <LoginImageCardLeft />
      <LoginFormCardRight loginForm={loginForm} setLoginForm={setLoginForm} />
    </LoginCard>
  );
};

export default Login;
