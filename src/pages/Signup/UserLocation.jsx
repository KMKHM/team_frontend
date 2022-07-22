import { React, useEffect } from 'react';
import styled from 'styled-components';
import loc from './location.png';
import refresh from './refresh.png';
import { useSelector, useDispatch } from 'react-redux';
import useLoc from './userLocationFunction';

const LocationContainer = styled.div`
  height: 50px;
  width: 330px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;

  border-radius: 20px;
  border: 4px solid #a9a9a9;

  font-size: 1.5rem;
`;

const Location = styled.img`
  width: 40px;
  height: 40px;

  border: none;
`;

const Refresh = styled.img`
  width: 40px;
  height: 40px;

  border: none;
`;

const UserLocation = props => {
  const { locationInfo, setLocationInfo } = props;

  useEffect(() => {
    useLoc().then(res => {
      setLocationInfo(state => {
        return { ...state, ...res };
      });
    });
  }, []);

  async function refreshHandleClick(e) {
    e.preventDefault();
    const locInfo = await useLoc();
    setLocationInfo(state => {
      return { ...state, ...locInfo };
    });
  }

  return (
    <LocationContainer>
      <Location src={loc} alt="location" />
      <span>{locationInfo.location}</span>
      <Refresh src={refresh} alt="refresh" onClick={refreshHandleClick} />
    </LocationContainer>
  );
};

export default UserLocation;
