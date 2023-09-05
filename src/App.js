import React from 'react';
import './App.css'
import styled,  {ThemeProvider, createGlobalStyle} from 'styled-components'
import { Wrapper, Title, HeadWrap, Number, FooterWrap, Name, Valid, Btn, Link } from './style';
import logo from './chip.png'

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props)=> props.theme.bg};
  color: ${(props)=> props.theme.cl}

}
.wrapper{
  background-color: ${(props)=> props.theme.wrb} ;
  
}
.btn{
  background-color: ${(props)=> props.theme.btn};
}
.link{
  color : ${(props)=> props.theme.link}
}
`

class App extends React.Component {
  state = {
    light : true
  }
 render(){
  const theme ={
    bg : this.state.light ? "white" : "black",
    cl : this.state.light ? "black" : "white",
    wrb : this.state.light ? "#ddd" : "#333",
    btn : this.state.light ? "coral" : "blue",
    link : this.state.light ? "red" : "blue"
  }
  return (
    <ThemeProvider theme ={theme}>
      <GlobalStyle/>
      <Wrapper className='wrapper'>
        <HeadWrap>
          <img src={logo} alt='img' width='70px'/>
          <Title>Visa</Title>
        </HeadWrap>
        <Number>1435 5382 5928 0350</Number>

        <FooterWrap>
          <Name>Madewith React</Name>
          <Valid>valid thru <br/> <strong>02/24</strong></Valid>
        </FooterWrap>
      </Wrapper>
    <Btn className='btn' onClick={()=> this.setState({light : !this.state.light})}>Toggle Theme</Btn>
    <Link href='https://github.com/Ilkhomjon2604' target='_blank' className='link'>Check my GitHub</Link>
    </ThemeProvider>
  )
 }
  
}



export default App;