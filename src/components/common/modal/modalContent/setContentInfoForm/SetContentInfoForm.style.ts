import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Date = styled.p`
  margin-bottom: 30px;
  font-size: 30px;
  font-family: 'Gruppo';
  font-weight: bold;
  color: #108210;
`;

export const Thumbnail = styled.img`
  width: 350px;
  height: 320px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
`;

export const SetContentInputList = styled.ul`
  margin-top: 20px;
`;

export const SetContentInputSort = styled.li`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SetContentInput = styled.input`
  padding: 2px 120px 2px 5px;
  font-size: 19px;
  border: none;
  border-bottom: 1px solid #b4b4b4;

  &:focus {
    outline: none;
  }
`;

export const SetContentDescription = styled.textarea`
  width: 320px;
  padding: 2px 0 70px 2px;
  font-size: 19px;
  border: none;
  border-bottom: 1px solid #b4b4b4;
  resize: none;

  &:focus {
    outline: none;
  }
`;
