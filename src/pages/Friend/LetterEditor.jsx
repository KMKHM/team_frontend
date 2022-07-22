import React, { useState, useRef } from 'react';
import style from './LetterEditor.module.css';
import CloseIcon from '@mui/icons-material/Close';

const LetterEditor = ({ handleWrite, onCreate }) => {
  const contentInput = useRef();
  const [state, setState] = useState({
    content: '',
  });

  const handleChangeState = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (state.content.length < 1) {
      // alert('편지 내용을 입력해주세요.');
      contentInput.current.focus();
      return;
    }
    onCreate(state.content);
    handleWrite();
    setState({
      content: '',
    });
  };

  return (
    <div className={style.LetterEditor}>
      <div className={style.FlexBox}>
        <CloseIcon
          onClick={handleWrite}
          style={{ width: '2rem', padding: '1rem .5rem', cursor: 'pointer' }}
        />
        <div className="btn" onClick={handleSubmit}>
          보내기
        </div>
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          placeholder="탭하여 편지 쓰기..."
        />
      </div>
    </div>
  );
};

export default LetterEditor;
