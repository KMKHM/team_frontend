import React from 'react';
import MainWrapper from '../../components/common';
import SearchBar from './SearchBar';

import CurrentlyComingHeader from './CurrentlyComingHeader';
import CurrentlyComingLetter from './CurrentlyComingLetter';
const Home = () => {
  return (
    <MainWrapper>
      <SearchBar />
      <CurrentlyComingHeader />
      <CurrentlyComingLetter />
    </MainWrapper>
  );
};

export default Home;
