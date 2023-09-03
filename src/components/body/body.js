import styled from 'styled-components'
import { ReactComponent as searcher } from '../../assets/search.svg'
import { ReactComponent as add } from '../../assets/video-add.svg'
import { ReactComponent as noti } from '../../assets/notification.svg'



export const WrapGn = styled.div`
width: 100%;
display: flex;
flex-direction: column;

`

export const HeadWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 40px ;
    padding-bottom: 32px;
    background-color: #222;
`;
export const Icons = styled.div`

`;


Icons.Search = styled(searcher)`
    width: 83px;
    height: 50px;
    border-top-right-radius: 25px;
border-bottom-right-radius: 25px;
`;
Icons.VideoAdd = styled(add)`
    width: 20px;
    height: 14px;
    cursor: pointer;
`;
Icons.Notification = styled(noti)`
    width: 16px;
    height: 20px;
    cursor: pointer;
`;
Icons.Logo = styled.img``
Icons.User = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
cursor: pointer;
object-fit: cover;

`

export const Search = styled.div`
display:flex;
align-items: center;
justify-content: center;

overflow: hidden;
`
Search.Input = styled.input`

width: 574px;
padding: 10px 10px;  
border: 1px solid #eee;
outline:none;
border-top-left-radius: 25px;
border-bottom-left-radius: 25px;
`
export const UserWrap = styled.div`
display: flex;
align-items: center;
gap: 16px;
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