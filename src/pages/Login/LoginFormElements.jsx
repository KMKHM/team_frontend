import styled from 'styled-components';

export const LoginFormButton = styled.button`
  width: 570px;
  height: 80px;
  margin: 40px 0 20px 0;
  padding: 20px;

  background-color: #59b1fc;

  border: none;
  border-radius: 15px;

  font-size: 2rem;
  font-weight: bold;
  color: white;

  cursor: pointer;
`;

export const LoginFormInput = styled.input`
  width: 550px;
  height: 70px;
  margin: 10px;
  padding: 0 0 0 20px;

  border: 4px solid #a9a9a9;
  border-radius: 20px;

  font-size: 2rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1vw;
  padding-bottom: 20px;

  * {
    margin: 0 20px 0 20px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: #a9a9a9;
  }
`;

export const Logo = styled.img`
  width: 300px;
`;

export const GoogleLogo = styled.img`
  position: absolute;
  left: 30px;
  top: 12px;

  width: 50px;
  height: 50px;

  border: none;
  border-radius: 15px;
`;

export const LoginGoogleButton = styled.button`
  position: relative;

  width: 570px;
  height: 80px;

  background-color: white;

  border: 3px solid #a9a9a9;
  border-radius: 15px;

  font-size: 1.8rem;
  font-weight: bold;
  color: #838383;

  cursor: pointer;
  + span {
    margin: 10px 20px 0 20px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #a9a9a9;
  }
`;
