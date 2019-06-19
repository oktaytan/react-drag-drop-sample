import React from 'react';
import styled from 'styled-components';
import Droppable from '../Droppable';
import Draggable from '../Draggable';

const Wrapper = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  padding: 8px;
  color: #fff;
  background-color: #3498db;
  border-radius: 3px;
  cursor: move;
`;

const droppableStyle = {
  backgroundColor: '#fff',
  width: '250px',
  height: '400px',
  marign: '32px',
  borderRadius: '3px',
  boxShadow: '0 0 1rem rgba(0,0,0,0.3)'
};

class DndTest extends React.Component {
  render() {
    return (
      <Wrapper>
        <Droppable id='dr1' style={droppableStyle}>
          <Draggable id='item1' style={{ margin: '8px' }}>
            <Item>Some text</Item>
          </Draggable>
          <Draggable id='item2' style={{ margin: '8px' }}>
            <Item>Some other text</Item>
          </Draggable>
          <Draggable id='item3' style={{ margin: '8px' }}>
            <Item>Some other text 2</Item>
          </Draggable>
          <Draggable id='item4' style={{ margin: '8px' }}>
            <Item>Some other text 3</Item>
          </Draggable>
        </Droppable>
        <Droppable id='dr2' style={droppableStyle} />
      </Wrapper>
    );
  }
}

export default DndTest;
