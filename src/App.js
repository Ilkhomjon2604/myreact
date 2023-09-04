import React from 'react';
import './App.css'
import Sidebar from './components/sidebar/sidebar';
import Body from './components/body/cards';
import styled   from 'styled-components'

const Container = styled.div`
display: flex;
max-width: 1664px;
width: 100%;
flex-direction: column;
background-color: #222;
`




const BodyWrapper = styled.div`
  width: 100%;
    display: flex;
    justify-content: space-between;

`


class App extends React.Component {
  state = {
    light : true
  }
  render(){
   
  

  return (

    <Container>

      <BodyWrapper>
        <Sidebar/>
        <Body/>
      </BodyWrapper>
    </Container>

  );
  }
}


export default App;