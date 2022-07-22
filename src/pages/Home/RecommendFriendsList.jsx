import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  RecommendFriendsListContainer,
  RecommendationFriendBox,
  RecommendFriend,
  RecommendFriendName,
} from './styles/StyledRecommendFriendList';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchUserId } from '../../redux/reducers/searchUser';

const RecommendFriendsList = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <RecommendFriendsListContainer>
      <Swiper navigation spaceBetween={180} slidesPerView={6}>
        {data &&
          data.map((user, i) => (
            <SwiperSlide
              key={`user-${i}`}
              onClick={() => {
                const id = user.user_id;
                dispatch(setSearchUserId({ searchUserId: id }));
                navigate(`/${id}/recommenddetail`);
              }}
            >
              <RecommendationFriendBox>
                <RecommendFriend>
                  <img src={user.image} alt={user.nickname} />
                </RecommendFriend>
                <RecommendFriendName>
                  <span>{user.nickname}</span>
                </RecommendFriendName>
              </RecommendationFriendBox>
            </SwiperSlide>
          ))}
      </Swiper>
    </RecommendFriendsListContainer>
  );
};

export default RecommendFriendsList;
