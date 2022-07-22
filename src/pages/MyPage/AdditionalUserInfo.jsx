import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AdditionalUserInfoArea = () => {
  const [favor, setFavor] = useState([]);
  const [language, setLanguage] = useState([]);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3001/api/auth/me', {
        headers: {
          Authorization: token,
        },
      });

      const { favorArray, languageArray } = res.data;
      setFavor(favorArray);
      setLanguage(languageArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <AdditionalInfo>
      <Info className="interest">
        <p className="title">관심사</p>
        {favor &&
          (favor || []).map(e =>
            e.selected === true ? (
              <p key={e.value} className="tag">
                {e.label}
              </p>
            ) : (
              ''
            )
          )}
      </Info>
      <Info className="language">
        <p className="title">언어</p>
        {language &&
          (language || []).map(e =>
            e.selected === true ? (
              <p key={e.value} className="tag">
                {e.label}
              </p>
            ) : (
              ''
            )
          )}
      </Info>
    </AdditionalInfo>
  );
};

export default AdditionalUserInfoArea;

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-top: 50px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;

  & .title {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: end;

    margin-right: 20px;

    width: 60px;
  }

  & .tag {
    width: fit-content;
    padding: 10px 8px;
    margin-right: 10px;

    background-color: #40577a;
    color: white;
    font-size: 1rem;
    border-radius: 5px;

    line-height: 12px;
  }
`;
