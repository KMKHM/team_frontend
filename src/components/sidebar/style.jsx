import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-width: 960px;
  max-width: 1920px;
  height: 100vh;
  gap: 1rem;
  box-sizing: border-box;
`;

const SideWrapper = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow: auto;

  background-color: #40577a;
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
`;

const Footer = styled.footer`
  background: #999;
`;

export { Container, SideWrapper, Navbar, Footer };
