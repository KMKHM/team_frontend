import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 45px;
  margin-left: 10px;
`;

export const CurrentlyComingContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid black;
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const CurrentlyComingContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const LetterContent = styled.div`
  width: 80%;
  height: 150px;
  border: 1px solid black;
  font-size: 24px;
  line-height: 36px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const CurrentlyProfile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const CurrentlyImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  img {
    width: 60%;
  }
`;
export const CurrentlyIntroduction = styled.div``;
export const CurrentlyFriendName = styled.div`
  font-size: 28px;
  line-height: 42px;
`;
export const CurrentlyDate = styled.div`
  font-size: 16px;
  line-height: 24px;
`;
export const CurrentlyLocation = styled.div`
  font-size: 16px;
  line-height: 24px;
`;
export const CurrentlyTickingTime = styled.div`
  font-size: 16px;
  line-height: 24px;
`;
