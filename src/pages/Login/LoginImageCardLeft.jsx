import React from 'react';
import styled from 'styled-components';
import backgroundImage from './mailboxBG.jpg';

const ImgCard = styled.div`
  width: 700px;
  height: 800px;

  border-top-left-radius: 48px;
  border-bottom-left-radius: 48px;

  background-image: url(${backgroundImage});

  background-size: 1350px 900px;
  background-position: 55% 20%;

  display: flex;
  justify-content: center;
  direction: column;

  span {
    margin-top: 50px;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const Login = () => {
  return (
    <ImgCard>
      <span>Lorem ipsum, dolor sit amet</span>
    </ImgCard>
  );
};

export default Login;
