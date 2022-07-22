import styled from 'styled-components';
import React from 'react';
import UserGender from './UserGender';
import UserLocation from './UserLocation';

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 670px;
  margin-top: 40px;
`;
const PersonalInfo = () => {
  return (
    <UserInfoContainer>
      <UserGender />
      <UserLocation />
    </UserInfoContainer>
  );
};

export default PersonalInfo;
