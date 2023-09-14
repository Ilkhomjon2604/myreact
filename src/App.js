import React from 'react';
import './App.css'
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

  const theme = {
    bg : light ? 'aquamarine' : '#333',
    cl : light ? 'black' : 'white',
    crb : light ? 'white' : '#2f1b6b',
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

      <button onClick={onChange} className='btn btn-theme'> Theme</button>
    </div>
    </ThemeProvider>
   
  )
 
  
}



export default App;