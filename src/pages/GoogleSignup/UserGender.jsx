import React from 'react';
import styled from 'styled-components';

const GenderContainer = styled.div`
  display: flex;

  border-radius: 20px;
`;

const Male = styled.input`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 4px solid #a9a9a9;

  display: none;

  width: 110px;
  font-size: 2rem;

  + label {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 60px;
    width: 110px;

    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 4px solid #a9a9a9;
    background: #59b1fc;
    color: white;

    cursor: pointer;

    font-size: 2rem;
  }
`;

const Female = styled.input`
  display: none;

  + label {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 60px;
    width: 110px;

    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 4px solid #a9a9a9;
    background: white;
    cursor: pointer;

    font-size: 2rem;
  }
`;

const UserGender = () => {
  return (
    <GenderContainer>
      <Male type="radio" id="male" />
      <label htmlFor="male">남성</label>
      <Female type="radio" id="female" />
      <label htmlFor="female">여성</label>
    </GenderContainer>
  );
};

export default UserGender;
