import React, { useRef, useEffect, useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import UserArea from './User';
import UserSignOutArea from './UserSignOut';
import UserInfoEditArea from './UserInfoEdit';
import { Wrapper, ProfileImg, Title, MyProfile } from './style';
import axios from 'axios';

const MyPage = () => {
  const [userData, setUserData] = useState({});
  const [favor, setFavor] = useState([]);
  const [language, setLanguage] = useState([]);
  const [img, setImg] = useState('');

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3001/api/auth/me', {
        headers: {
          Authorization: token,
        },
      });

      const { favorArray, languageArray, user } = res.data;
      setFavor(favorArray);
      setLanguage(languageArray);
      setUserData(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const imgInput = useRef();

  const handleImgUpload = async e => {
    const uploadFile = e.target.files[0];
    const formData = new FormData();
    formData.append('files', uploadFile);

    await axios.patch(`http://localhost:3333/user/1`, formData, {
      // headers: {
      //   'Content-Type': 'application/json; charset=utf-8',
      // 'Content-Type': 'multipart/form-data',
      //   authorization: `Bearer ${localStorage.getItem('token')}`,
      // },
    });
  };

  const handleUploadBtn = e => {
    e.preventDefault();
    imgInput.current.click();
  };
  return (
    <Wrapper>
      <Title>나의 프로필</Title>
      <MyProfile>
        <ProfileImg>
          <div className="profileImgArea">
            <img
              className="profileEmoji"
              src={
                userData.profileImage ? userData.profileImage : '/img/뚱이.png'
              }
              alt="뚱이"
            />
            <input
              type="file"
              style={{ display: 'none' }}
              ref={imgInput}
              accept="image/jpg, image/png, image/jpeg"
              onClick={handleImgUpload}
            />
            <button
              className="imgUploadBtn"
              onClick={handleUploadBtn}
              type="button"
            >
              <AddPhotoAlternateIcon />
            </button>
          </div>
        </ProfileImg>
        <UserArea data={userData} favor={favor} language={language} />
        <div className="setting">
          <UserInfoEditArea data={userData} favor={favor} language={language} />
          <UserSignOutArea data={userData} />
        </div>
      </MyProfile>
    </Wrapper>
  );
};

export default MyPage;
