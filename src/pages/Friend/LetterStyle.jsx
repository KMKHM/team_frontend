import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LetterWrapper = styled.ul`
  overflow: hidden;
  position: relative;
  margin: 200px 1rem 20rem 1rem;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 1.5rem;
  text-decoration: none;
`;

const Letter = styled.li`
  /* cursor: pointer; */
  width: 300px;
  border-radius: 1rem;
  box-sizing: border-box;
  padding: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;

  ${props =>
    props.send ? 'border: 1px dashed #ccc' : 'border: 1px solid #ccc'};

  &:hover {
    transform: scale(0.98);
    z-index: 1;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LetterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;

  & > img {
    width: 3rem;
  }
`;

const LetterContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.25rem;
  height: 6.25rem;
  color: #4f4f4f;
  text-decoration: none;
`;

const LetterFooter = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const Writer = styled.p`
  font-size: 1.25rem;
  margin: 0.75rem 0;
  font-weight: bold;
  color: #4f4f4f;
`;

const Date = styled.p`
  font-size: 1rem;
  color: #828282;
`;

const WriteBtn = styled.button`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 2;
  border: 1px solid #ccc;
  outline: none;
  background-color: #ccc;
  color: #333;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background-color: #4f4f4f;
    color: #ccc;
    opacity: 0.2;
  }
`;
export {
  LetterWrapper,
  Letter,
  StyledLink,
  LetterHeader,
  LetterContent,
  LetterFooter,
  Writer,
  Date,
  WriteBtn,
};
