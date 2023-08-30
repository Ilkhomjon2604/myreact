import React from 'react';
import './App.css'
import Head from './components/header/head';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
max-width: 1664px;
width: 100%;
flex-direction: column;

`

function App() {
  return (
    <div className="App">
      <Head/>
    </div>
  );
}


export default App;