import styled from 'styled-components'


export const Wrapper = styled.form`
width: 400px;
padding: 20px;
display: flex;
flex-direction: column;
border-radius: 20px;
background-color: #fff;
`

export const Title = styled.h1`
    font-size: 30px;
    margin-bottom: 30px;

`
export const Lable = styled.label`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
`
export const Input = styled.input`
    padding:  10px;
    width: 100%;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;
    

`

export const Btn = styled.button`
padding: 10px ;
border-radius: 20px;
outline: none;
margin-bottom: 30px;
font-size: 20px;
font-weight: 700;
font-family: 'Courier New', Courier, monospace;
cursor: pointer;

`

export const Or = styled.span`
 width: 30px;
 height: 30px;
 border-radius: 50%;
 padding: 5px;
 box-sizing: border-box;
 border: 1px solid ;
 background-color: #fff;
 position: absolute;
 top: -15px;
 left: 45%;
 color: #000;
`

export const IconWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-bottom: 10px;
`