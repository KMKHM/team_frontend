import styled from 'styled-components';

const StyledSearchbar = styled.div`
  width: 40%;
  min-width: 360px;
  margin-top: 45px;
  margin-left: 10px;
  font-size: 24px;

  form {
    border: 1px solid #d3d3d3;
    padding: 2px 5px;
    display: flex;
    justify-content: space-between;
    border-radius: 40px;
    padding: 5px;

    input {
      width: 80%;
      border: none;
      outline: none;
      font-size: 24px;
      margin-left: 10px;
      padding: 5px 0;
    }
    button {
      border: none;
      cursor: pointer;
      background: #fedebe;
      border-radius: 50%;
    }
  }
`;

export default StyledSearchbar;
