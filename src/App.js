import React, { useState } from 'react';
import './App.css'
import Login from './component/login/login';
import SignUp from './component/signup/signup';
import { ThemeProvider, createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.cl};
}
.card{
  background-color: ${(props) => props.theme.crb};
  color: ${(props) => props.theme.crc};
}
.or-wrap{
  color: ${(props) => props.theme.cl};

}
.btn{
  background-color: ${(props) => props.theme.btb};

}
`

function App(){
  const [active,  setActive] = useState(true)
  const [light, setLight] = useState(true)
  function changePage(value) {
    setActive(value)
  }

  const theme = {
    bg : light ? 'aquamarine' : '#551b8c',
    cl : light ? 'black' : 'white',
    crb : light ? 'white' : '#2f1b6b ',
    crc : light ? 'black' : 'white',
    btb : light ? 'rgb(254, 122, 144)' : 'green',
   
  }
  function onChange (){
    setLight(!light)
  }
  return (

    <ThemeProvider theme={theme}>
    <GlobalStyle/>

    <div className='main-wrap' >
      {active ? <Login changePage={changePage}/> : <SignUp changePage={changePage}/>}
      <button onClick={onChange} className='btn btn-theme'> Theme</button>
    </div>
    </ThemeProvider>
   
  )
 
  
}



export default App;