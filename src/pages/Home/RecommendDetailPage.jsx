import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  ProfileImg,
  Title,
  MyProfile,
  GoBackButton,
} from './styles/StyledRecoomendDetailPage';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { RecommendFriendArea } from './RecommendFriendArea';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchUser } from '../../redux/reducers/searchUser';

function RecommendDetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
  const searchUser = useSelector(state => state.searchUser.searchUser);
  const searchUserId = useSelector(state => state.searchUser.searchUserId);
  // console.log('searchUserId', searchUserId);
  const fetchSearchUserDetail = async id => {
    try {
      const res = await axios.get(`http://localhost:3001/api/users/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      const data = await res.data;
      dispatch(setSearchUser({ searchUser: data }));
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchSearchUserDetail(searchUserId);
  }, []);
  // console.log('searchUser', searchUser);
  return (
    <>
      <Wrapper>
        <Title>
          <GoBackButton onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </GoBackButton>
          {searchUser.user.nickname}의 프로필
        </Title>
        <MyProfile>
          <ProfileImg>
            <div className="profileImgArea">
              <img
                className="profileEmoji"
                src={searchUser.user.profileImage}
                alt=""
              />
            </div>
          </ProfileImg>
          <RecommendFriendArea data={searchUser.user} />
        </MyProfile>
      </Wrapper>
    </>
  );
}

export default RecommendDetailPage;
