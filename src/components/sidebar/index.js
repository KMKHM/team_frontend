import React from 'react';
import { Navigate, Outlet } from 'react-router';
import NavTopArea from './NavTop';
import NavFriendsArea from './NavFriends';
import LogoutArea from './Logout';
import { Container, SideWrapper, Navbar } from './style';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const { auth, role } = useSelector(state => state.auth);
  return (
    <Container>
      <SideWrapper>
        <Navbar>
          <NavTopArea />
          <NavFriendsArea />
        </Navbar>
        <LogoutArea />
      </SideWrapper>
      {auth ? <Outlet /> : <Navigate to="/login" />}
    </Container>
  );
};

export default SideBar;
