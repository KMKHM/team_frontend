/**
 * TODO
 * 1. favor, language 값이 true인 것만 뽑아오는 것
 */
import React, { useEffect } from 'react';
import PinDropIcon from '@mui/icons-material/PinDrop';
import {
  User,
  UserInfo,
  UserEmoji,
  UserDetail,
  DetailItem,
  UserName,
  UserBio,
  BadgeWrapper,
  Badge,
} from './FriendInfoStyle';
import { getBirth, getAge } from './utils';

const FriendInfo = ({ friend, favor, language }) => {
  // TODO 1
  const favorites = [];
  const languages = [];
  if (favor?.movie === true) favorites.push('movie');
  if (favor?.language === true) favorites.push('language');
  if (favor?.book === true) favorites.push('book');
  if (favor?.game === true) favorites.push('game');
  if (favor?.coding === true) favorites.push('coding');
  if (favor?.fantacy === true) favorites.push('fantacy');
  if (favor?.sports === true) favorites.push('sports');
  if (favor?.entertainment === true) favorites.push('entertainment');
  if (favor?.music === true) favorites.push('music');
  if (favor?.fashion === true) favorites.push('fashion');
  if (favor?.art === true) favorites.push('art');
  if (favor?.travel === true) favorites.push('travel');
  if (language?.afrikaans === true) languages.push('afrikaans');
  if (language?.chinese === true) languages.push('chinese');
  if (language?.english === true) languages.push('english');
  if (language?.french === true) languages.push('french');
  if (language?.german === true) languages.push('german');
  if (language?.japanese === true) languages.push('japanese');
  if (language?.korean === true) languages.push('korean');
  if (language?.russian === true) languages.push('russian');
  if (language?.spanish === true) languages.push('spanish');
  if (language?.uzbek === true) languages.push('uzbek');

  return (
    <User>
      <UserInfo>
        <UserName>{friend.nickname}</UserName>
        <UserDetail>
          <DetailItem>
            <PinDropIcon style={{ fontSize: '1rem' }} />
            {friend.location}
          </DetailItem>
          <DetailItem>
            {friend.birthday && getBirth(friend.birthday)}
            {friend.birthday ? '(' + getAge(friend.birthday) + ')' : ''}
          </DetailItem>
        </UserDetail>
        <UserBio>{friend.profileText}</UserBio>
        <BadgeWrapper>
          {favorites.length > 0 && favorites.map(item => <Badge>{item}</Badge>)}
          {languages.length > 0 &&
            languages.map(item => <Badge language>{item}</Badge>)}
        </BadgeWrapper>
      </UserInfo>
      <UserEmoji>{friend.profileImage ? profile.profileImage : '✉️'}</UserEmoji>
    </User>
  );
};

export default React.memo(FriendInfo);
