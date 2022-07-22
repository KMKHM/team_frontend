import styled from 'styled-components';

export const Friend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 80px;
`;

export const Account = styled.div`
  margin-bottom: 20px;

  & .userName {
    font-size: 1.75rem;
    font-weight: bold;

    margin-right: 10px;
  }

  & .userEmail {
    font-size: 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 15px;

  & p {
    display: flex;
    align-items: center;

    width: fit-content;
    padding: 5px 8px;
    margin-right: 10px;

    background-color: #40577a;
    color: white;
    font-size: 1rem;
    border-radius: 5px;
  }

  & .birthday {
    margin-right: 4px;
  }
`;

export const Introduction = styled.div`
  border: 1px #ff6f91 solid;
  border-radius: 15px;

  width: fit-content;
  padding: 11px 20px;
  > span {
    font-size: 1.25rem;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-top: 50px;
`;

export const LanguageInfo = styled.div`
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

export const InterestInfo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;

  .title {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: end;

    margin-right: 20px;

    width: 60px;
  }

  .tag {
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
