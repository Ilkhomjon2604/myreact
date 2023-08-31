import styled from 'styled-components'
import { ReactComponent as home } from '../../assets/home.svg'

export const SideBarWrap = styled.div`
width: 240px;
display: flex;
flex-direction:column;
background-color: #222;

`
export const SideBarItem = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 24px;
padding: 15px 24px;
color: #fff;
cursor: pointer;


`

export const Icons = styled.div`

`;

Icons.Home = styled(home)`
    width: 20px;
    height: 20px;
    color: #fff;
`;

export const Hr = styled.hr`
margin: 20px 0;
`
export const RoundImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  -ms-border-radius: 50px;
  -o-border-radius: 50px;
`