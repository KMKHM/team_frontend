import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';
import {
  Friend,
  Account,
  Info,
  Introduction,
  InterestInfo,
  LanguageInfo,
  AdditionalInfo,
} from './styles/StyledRecommendFriendArea';

export const RecommendFriendArea = ({ data }) => {
  return (
    <Friend>
      <Account>
        <span className="userName">{data.nickname}</span>
        <span className="userEmail">{data.email}</span>
      </Account>
      <Info>
        <div className="gender">
          <p>{data.gender === 'men' ? <MaleIcon /> : <FemaleIcon />}</p>
        </div>
        <div className="birthday">
          <p>
            <CakeOutlinedIcon />
            {data.birthday}
          </p>
        </div>
        <div className="location">
          <p>
            <LocationOnIcon />
            {data.location}
          </p>
        </div>
      </Info>
      <Introduction>
        <span>{data.profileText}</span>
      </Introduction>
      <AdditionalInfo>
        <InterestInfo>
          <p className="title">관심사</p>
          {data.Favor?.art && <p className="tag">예술</p>}
          {data.Favor?.book && <p className="tag">독서</p>}
          {data.Favor?.coding && <p className="tag">코딩</p>}
          {data.Favor?.entertainment && <p className="tag">예능</p>}
          {data.Favor?.fantacy && <p className="tag">판타지</p>}
          {data.Favor?.fashion && <p className="tag">패션</p>}
          {data.Favor?.game && <p className="tag">게임</p>}
          {data.Favor?.movie && <p className="tag">영화</p>}
          {data.Favor?.music && <p className="tag">노래</p>}
          {data.Favor?.sports && <p className="tag">스포츠</p>}
          {data.Favor?.travel && <p className="tag">여행</p>}
        </InterestInfo>
        <LanguageInfo>
          <p className="title">언어</p>
          {data.Language?.afrikaans && <p className="tag">아프리카어</p>}
          {data.Language?.chinese && <p className="tag">중국어</p>}
          {data.Language?.english && <p className="tag">영어</p>}
          {data.Language?.french && <p className="tag">프랑스어</p>}
          {data.Language?.german && <p className="tag">독일어</p>}
          {data.Language?.japanese && <p className="tag">일본어</p>}
          {data.Language?.korean && <p className="tag">한국어</p>}
          {data.Language?.russian && <p className="tag">러시안어</p>}
          {data.Language?.russian && <p className="tag">스페인어</p>}
          {data.Language?.uzbek && <p className="tag">우즈베키스탄어</p>}
        </LanguageInfo>
      </AdditionalInfo>
    </Friend>
  );
};
