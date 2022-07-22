import styled from 'styled-components';
import location from './location.png';
import refresh from './refresh.png';

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

const UserLocation = () => {
  return (
    <LocationContainer>
      <Location src={location} alt="location" />
      <span>South Korea</span>
      <Refresh src={refresh} alt="refresh" />
    </LocationContainer>
  );
};

export default UserLocation;
