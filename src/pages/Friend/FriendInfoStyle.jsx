import styled from 'styled-components';

const User = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 9;
  padding: 2rem 1rem;
  width: calc(100% - 390px);
  align-items: center;
  background: #fff;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const UserEmoji = styled.div`
  font-size: 4rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 255, 0.2);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.2);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, 0.2);
  }
`;

const UserDetail = styled.div`
  font-size: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;
const DetailItem = styled.span`
  color: #828282;
`;
const UserName = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
`;

const UserBio = styled.p`
  font-size: 1rem;
  color: #4f4f4f;
`;
const BadgeWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;
const Badge = styled.span`
  font-size: 1rem;
  color: #4f4f4f;
  position: relative;
  padding: 5px 10px;
  line-height: 1.2rem;

  & + & {
    margin-left: 2px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid #4f4f4f;
    opacity: 0.2;
    border-radius: 5px;
    ${props => props.language && 'background: #007aff'};
  }
`;

export {
  User,
  UserInfo,
  UserEmoji,
  UserDetail,
  DetailItem,
  UserName,
  UserBio,
  BadgeWrapper,
  Badge,
};
