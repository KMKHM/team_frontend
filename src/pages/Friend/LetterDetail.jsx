import React, { useEffect, useState } from 'react';
import MainWrapper from '../../components/common';
import { LetterWrapper } from './LetterStyle';
import FriendInfo from './FriendInfo';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './LetterDetail.module.css';

const LetterDetail = () => {
  const userId = useParams().id;
  const postId = useParams().postId;

  const [letter, setLetter] = useState({});

  const fetchLetter = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(
        `http://localhost:3001/api/letters/${userId}/${postId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const data = res.data;
      setLetter(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLetter();
    console.log(friend, favor, language);
  }, []);

  return (
    <MainWrapper>
      {/* <FriendInfo friend={friend} favor={favor} language={language} /> */}
      <LetterWrapper>
        <div className={style.letterHeader}>
          <h5 className="nickname">{letter.letter_id}</h5>
        </div>
        <p>{letter.nickname}</p>
        <p>{letter.content}</p>
        <p>{letter.receive_date}</p>
      </LetterWrapper>
    </MainWrapper>
  );
};

export default LetterDetail;
