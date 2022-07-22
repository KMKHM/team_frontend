import React, { useState, useEffect, useCallback } from 'react';
import MainWrapper from '../../components/common';
import FriendInfo from './FriendInfo';
import LetterList from './LetterList';
import { WriteBtn } from './LetterStyle';
import LetterEditor from './LetterEditor';
import { getDistance, getTime, formatDate } from './utils';
import CreateIcon from '@mui/icons-material/Create';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LetterDetail from './LetterDetail';
import { LetterWrapper } from './LetterStyle';

const Frame = props => {
  const friendId = useParams().id;

  // 편지 보내기 버튼
  const [writeIsShown, setWriteIsShown] = useState(false);
  // 편지 세부 내용 보기 버튼
  const [detailIsShown, setDetailIsShown] = useState(false);
  // 편지 리스트
  // 로그인한 유저
  const [user, setUser] = useState({});
  // 친구인 유저
  const [friend, setFriend] = useState({
    favor: [],
    language: [],
    info: {},
  });

  const fetchUser = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3001/api/auth/me', {
        headers: {
          Authorization: token,
        },
      });
      const data = res.data.user;
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }, [user]);

  const fetchFriend = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(
        `http://localhost:3001/api/users/${friendId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const data = res.data;
      setFriend({
        favor: data.user.Favor,
        language: data.user.Language,
        info: data.user,
      });
    } catch (error) {
      console.error(error);
    }
  };
  //   const fetchLetters = useCallback(async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       const res = await axios.get(
  //         `http://localhost:3001/api/letters/${friendId}`,
  //         {
  //           headers: {
  //             Authorization: token,
  //           },
  //         }
  //       );
  //       const data = res.data;
  //       setLetters(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }, [friendId]);

  const postLetter = useCallback(
    async newLetter => {
      try {
        const token = localStorage.getItem('token');
        await axios.post(
          `http://localhost:3001/api/letters/${friendId}`,
          newLetter,
          {
            headers: {
              Authorization: token,
            },
          }
        );
      } catch (error) {
        console.error(error);
      }
      await fetchLetters();
    },
    [friendId]
  );

  useEffect(() => {
    // 유저 정보 받아오기
    fetchUser();
    // 친구 정보 받아오기
    fetchFriend();
  }, []);

  // 편지 작성
  const createHandler = useCallback(
    content => {
      const distance = getDistance(
        user.longitude,
        user.latitude,
        friend.info.longitude,
        friend.info.latitude
      );
      const sendDate = new window.Date().toISOString();
      let receiveDate = new window.Date();
      const deliveryTime = getTime(distance);
      receiveDate = new window.Date(
        receiveDate.setMinutes(receiveDate.getMinutes() + deliveryTime)
      ).toISOString();
      const newLetter = {
        sendId: user.user_id,
        receiveId: friend.info.user_id,
        sendDate: sendDate,
        receiveDate: receiveDate,
        deliveryTime: deliveryTime,
        content: content,
      };

      postLetter(newLetter);
    },
    [writeIsShown]
  );

  // 편지 보내기 버튼
  const writeHandler = useCallback(() => {
    setWriteIsShown(current => !current);
  }, [writeIsShown]);

  // 편지 세부내용 보기
  const detailHandler = useCallback(() => {
    setDetailIsShown(current => !current);
  }, [detailIsShown]);

  return (
    <MainWrapper>
      {/* 친구 프로필 영역 */}
      <FriendInfo
        friend={friend.info}
        favor={friend.favor}
        language={friend.language}
      />

      {/* 편지 리스트, 세부 */}
      {props.children}

      {/* 편지 보내기 버튼, 편지 작성 컴포넌트 */}
      {!writeIsShown ? (
        <WriteBtn onClick={writeHandler}>
          <CreateIcon />
          편지 보내기
        </WriteBtn>
      ) : (
        <LetterEditor handleWrite={writeHandler} onCreate={createHandler} />
      )}
    </MainWrapper>
  );
};

export default Frame;
