import React from 'react';
import './App.css';
import styled from 'styled-components';
import DndTest from './components/Dnd/DndTest';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Container = styled.div``;

function App() {
  return (
    <AppWrapper>
      <Container>
        <DndTest />
      </Container>
    </AppWrapper>
  );
}

export default App;
