import styled from 'styled-components'

export const WrapGn = styled.div`
width: 100%;
display: flex;
flex-direction: column;

`
export const CardWrap = styled.div`
width: 100%;
background-color: #111;
display: flex;
padding: 40px 10px;
justify-content: space-around;
column-gap: 18px;
flex-wrap: wrap;
row-gap: 38px;
`

export const FilterBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 20px 0;
    border-top: 1px solid #fffdfd60;
    border-bottom: 1px solid #fffdfd60;
    background-color: #222;
    margin-top: -20px;
`

export const FilterBtn = styled.button`
padding: 8px 12px;
color: #fff;
background-color: #777;
border: 1px solid black;
border-radius: 50px;
cursor: pointer;
transition: all .3s ease-in-out;
`

export const Card = styled.div`
    display: flex;
    width: 332px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
    color: #fff;


`
Card.Img = styled.img`
width: 100%;
height: 186px;
border-radius: 20px;
margin-bottom: 20px;
`
Card.Detail = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
gap: 20px;
`
Card.Title = styled.h3`
    color: #ddd;
    font-weight: 400;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
`
Card.Text = styled.p`
color: #999;
margin-top: 10px;
`