import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import Item from './Item';
import Sidebar2 from './Sidebar2';

const Sidebar: React.FC = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <Sidebar2 width={400} height={'100vh'}>
        <List>
          <Item />
          <Item />
          <Item />
          <Item />
        </List>
        <AddBtn>+ read more</AddBtn>
      </Sidebar2>
    </Container>
  );
};

export default Sidebar;
const Container = styled.div`
  position: absolute;
  left: 0px;
`;

const List = styled.p``;
const AddBtn = styled.button``;
