import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import axios from 'axios';
import StyledSearchbar from './styles/StyledSearchbar';
import RecommendHeader from './RecommendHeader';
import RecommendFriendsList from './RecommendFriendsList';
import RecentlyArrivedLetter from './RecentlyArrivedLetter';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchUsers } from '../../redux/reducers/searchUser';
import styled from 'styled-components';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchUsers = useSelector(state => state.searchUser.searchUsers);
  const token = useSelector(state => state.auth.token);

  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/users?recommend=true', {
        headers: {
          Authorization: token,
        },
      })
      .then(res => res.data)
      .then(data => dispatch(setSearchUsers({ searchUsers: data })));
  }, []);

  const onSearch = e => {
    e.preventDefault();
    if (query === null || query === '') {
      axios
        .get(`http://localhost:3001/api/users?recommend=true`, {
          headers: {
            Authorization: token,
          },
        })
        .then(res => res.data)
        .then(data => dispatch(setSearchUsers({ searchUsers: data })));
    }
    axios
      .get(`http://localhost:3001/api/users?search=${query}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => res.data)
      .then(data => {
        dispatch(setSearchUsers({ searchUsers: data }));
        console.log('searchUsers', searchUsers);
      });
  };
  return (
    <>
      <MainTop>
        <StyledSearchbar>
          <form onSubmit={onSearch}>
            <input
              value={query}
              onChange={e => {
                setQuery(e.target.value);
              }}
              type="text"
              placeholder="당신과 취향이 비슷한 친구를 만나보세요!"
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </StyledSearchbar>
        <RecentlyArrivedLetter />
      </MainTop>
      <RecommendHeader />
      <RecommendFriendsList data={searchUsers} />
    </>
  );
};

const MainTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default SearchBar;
