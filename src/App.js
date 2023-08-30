import React from 'react';
import './App.css'
import Head from './components/header/head';
import Sidebar from './components/sidebar/sidebar';

import styled from 'styled-components'

const Container = styled.div`
display: flex;
max-width: 1664px;
width: 100%;
flex-direction: column;
background-color: black;
`
const BodyWrapper = styled.div`
  width: 100%;
    display: flex;
    justify-content: space-between;

`

function App() {
  return (
    <Container>
      <Head/>
      <BodyWrapper>
        <Sidebar/>
      </BodyWrapper>
    </Container>
  );
}


export default App;