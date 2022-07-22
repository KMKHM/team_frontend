import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { SettingBtn, ModalStyle } from './style';
import axios from 'axios';

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 13px;
`;

const Input = styled.input`
  padding: 5px 5px;
`;

const UserSignOutArea = props => {
  const { password } = props.data;

  const [checkPassowrd, setCheckPassword] = useState('');
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    await axios.patch(`http://localhost:3333/user/1`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: token,
      },
      currentPassword: checkPassowrd,
    });

    handleModal();
    localStorage.clear();
    alert('회원 탈퇴되었습니다. 지금까지 이용해주셔서 감사합니다.');
    document.location.href = '/login';
  };

  return (
    <div className="setting">
      <SettingBtn className="userSignOut" onClick={handleModal}>
        <DeleteForeverIcon />
        <p>회원 탈퇴</p>
      </SettingBtn>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="userSignOut-title"
        aria-describedby="userSignOut-description"
      >
        <ModalStyle>
          <Title id="userSignOut-title">정말 탈퇴하시겠습니까?</Title>
          <div id="userSignOut-description" style={{ fontSize: '0.8rem' }}>
            탈퇴하시려면 현재 비밀번호를 입력해주세요.
          </div>
          <Input
            style={{ display: 'block', marginBottom: '20px', marginTop: '8px' }}
            type="password"
            onChange={e => {
              setCheckPassword(e.target.value);
            }}
          />
          <Button
            variant="outlined"
            onClick={handleModal}
            color="error"
            sx={{ mr: 1 }}
          >
            취소하기
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="error"
            onClick={handleSubmit}
          >
            탈퇴하기
          </Button>
        </ModalStyle>
      </Modal>
    </div>
  );
};

export default UserSignOutArea;
