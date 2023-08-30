import styled from 'styled-components'
import { ReactComponent as home } from '../../assets/home.svg'

export const SideBarWrap = styled.div`
width: 240px;
display: flex;
flex-direction:column;
`
export const SideBarItem = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
justify-content: center;
gap: 24px;
padding: 8px 24px;
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