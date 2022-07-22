import styled from 'styled-components';

export const LoginInput = styled.input`
  width: 650px;
  height: 70px;
  margin: 10px;
  padding: 0 0 0 20px;

  border: 4px solid #a9a9a9;
  border-radius: 20px;

  font-size: 2rem;
`;

export const LoginButton = styled.button`
  width: 670px;
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
