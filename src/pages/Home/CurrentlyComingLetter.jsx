import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initComingLetters } from '../../redux/reducers/mainLetters';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  Container,
  CurrentlyComingContainer,
  CurrentlyComingContentContainer,
  LetterContent,
  CurrentlyProfile,
  CurrentlyImageContainer,
  CurrentlyIntroduction,
  CurrentlyFriendName,
  CurrentlyDate,
  CurrentlyLocation,
  CurrentlyTickingTime,
} from './styles/StyledCurrentlyComingLetter';

const CurrentlyComingLetter = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const mainComingLetters = useSelector(
    state => state.mainLetters.mainComingLetters
  );
  // console.log('mainComing', mainComingLetters);
  const fetchCurrentlyComingLetter = async () => {
    try {
      const res = await axios.get(
        'http://localhost:3001/api/letters/incoming',
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const data = await res.data;
      dispatch(initComingLetters({ mainComingLetters: data }));
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchCurrentlyComingLetter();
  }, []);

  // console.log('mainComingLetters', mainComingLetters);
  return (
    <Container>
      <Swiper spaceBetween={360} slidesPerView={5}>
        {!mainComingLetters ? (
          <div>현재 배송 중인 편지를 로딩중입니다.</div>
        ) : (
          mainComingLetters.map((letter, index) => (
            <SwiperSlide key={index}>
              <CurrentlyComingContainer>
                <CurrentlyComingContentContainer>
                  <LetterContent>{letter.content}</LetterContent>
                </CurrentlyComingContentContainer>
                <CurrentlyProfile>
                  <CurrentlyImageContainer>
                    <img src={letter.send_img} alt={letter.sendId} />
                  </CurrentlyImageContainer>
                  <CurrentlyIntroduction>
                    <CurrentlyFriendName>{letter.nickname}</CurrentlyFriendName>
                    <CurrentlyDate>{letter.send_date}</CurrentlyDate>
                    <CurrentlyLocation>
                      {letter.send_location}
                    </CurrentlyLocation>
                    <CurrentlyTickingTime>
                      {letter.receive_date}
                    </CurrentlyTickingTime>
                  </CurrentlyIntroduction>
                </CurrentlyProfile>
              </CurrentlyComingContainer>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </Container>
  );
};

export default CurrentlyComingLetter;
