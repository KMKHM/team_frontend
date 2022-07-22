import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const NavFriendsArea = () => {
  const [friends, setFriends] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      const res = await axios.get('http://localhost:3001/api/letters', {
        headers: {
          Authorization: token,
        },
      });
      // const data = res.data.user;
      console.log(res);
      // const res = await axios.get('http://localhost:3333/friend');
      const data = res.data;
      setFriends(data);
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };
  console.log(friends);
  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <Friends>
      {friends &&
        friends?.map(friend => {
          return (
            <StyledLink to={`/friend/${friend.id}`} key={friend.user_id}>
              <FriendsList>
                <div className="profileImgArea">
                  <img
                    src={
                      friend.profileImage
                        ? friend.profileImage
                        : '/img/뚱이.png'
                    }
                    alt="friendImg"
                  />
                </div>
                <span>{friend.nickname}</span>
              </FriendsList>
            </StyledLink>
          );
        })}
    </Friends>
  );
};

export default NavFriendsArea;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Friends = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
`;

const FriendsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  padding-bottom: 20px;

  > span {
    font-weight: bold;
    color: white;
  }

  & .profileImgArea {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 10px;

    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: white;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
