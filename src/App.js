import React from 'react';
import './App.css'
import Head from './components/header/head';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
max-width: 1664px;
width: 100%;
flex-direction: column;
background-color: black;

`

function App() {
  return (
    <Container>
      <Head/>
    </Container>
  );
}


export default App;