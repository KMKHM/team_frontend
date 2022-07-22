import React from 'react';

import { LetterWrapper } from './LetterStyle';

import LetterItem from './LetterItem';

const LetterList = props => {
  const { user, friend, letters } = props;
  return (
    <LetterWrapper>
      {letters.length === 0 && <p>아직 편지가 없습니다.</p>}
      {letters.map(letter => (
        <LetterItem
          letter={letter}
          friend={friend}
          user={user}
          handleClick={props.handleClick}
        />
      ))}
    </LetterWrapper>
  );
};

export default React.memo(LetterList);
