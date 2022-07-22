import styled from 'styled-components';

const GoBackButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
`;

const Wrapper = styled.div`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;

const MyProfile = styled.div`
  display: flex;
  margin: 100px auto;
  position: relative;

  height: 420px;
  align-items: flex-start;

  > .setting {
    display: flex;

    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 1.75rem;
  margin-left: 140px;
`;

const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.25rem;
  padding: 5px 0;

  > span {
    font-weight: bold;
    color: white;
  }

  & .profileImgArea {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    margin-right: 10px;

    width: 170px;
    height: 170px;
    border-radius: 100%;
    background-color: white;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2),
      inset -2.5px -3px 0px rgba(0, 0, 0, 0.1);

    & img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: contain;
    }

    & .imgUploadBtn {
      width: 40px;
      height: 40px;
      position: absolute;
      bottom: 0;
      right: 0;

      cursor: pointer;

      border: 1px solid;
      border-radius: 100%;
    }
  }
`;

export { Wrapper, ProfileImg, Title, MyProfile, GoBackButton };
