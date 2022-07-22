import styled from 'styled-components';

export const RecommendFriendsListContainer = styled.div`
  margin-left: 10px;
  margin-top: 35px;
`;
export const RecommendationFriendBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  padding: 15px;
  cursor: pointer;
`;
export const RecommendFriend = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid black;
  border-radius: 50%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export const RecommendFriendName = styled.div`
  font-size: 32px;
  text-align: center;
  line-height: 39px;
  span {
    font-size: 32px;
  }
`;
