import styled from 'styled-components'

export const Wrapper = styled.div`
width: 600px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 30px 50px;
border-radius: 10px;
cursor: pointer;
-webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
-moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
margin-bottom: 50px;
`

export const Title = styled.h1`
font-size: 75px;
letter-spacing: 5px;
`

export const HeadWrap = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`

export const Number = styled.h4`
    font-size: 40px;
    letter-spacing: 7px;
    margin-bottom: 40px;
`

export const FooterWrap = styled.div`
    display: flex;
    gap: 100px;
    align-items: flex-end;
    margin-bottom: 10px;

`

export const Name = styled.h3`
    font-size: 30px;
    letter-spacing: 5px;
    margin-left: auto;
`

export const Valid = styled.p`
font-size: 25px;

`

export const Btn = styled.button`
padding: 20px 40px;
color: #fff;
background-color: coral;
border: none;
outline: none;
cursor: pointer;
border-radius: 10px;
font-size: 20px;
position: absolute;
top: 20px;
right: 50px;
`

export const Link = styled.a`
text-decoration: underline;
color: blue;
font-size: 30px;
margin-left: 200px;

`