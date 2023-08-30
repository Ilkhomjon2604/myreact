import styled from 'styled-components'
import { ReactComponent as burger } from '../../assets/guide.svg'
import { ReactComponent as searcher } from '../../assets/search.svg'
import { ReactComponent as add } from '../../assets/video-add.svg'
import { ReactComponent as noti } from '../../assets/notification.svg'





export const HeadWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
`;

export const LogoWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
`

export const Search = styled.div`
display:flex;
align-items: center;
justify-content: center;

overflow: hidden;
`

;

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

export const Icons = styled.div`

`;

Icons.Burger = styled(burger)`
    width: 24px;
    height: 24px;
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
`;
Icons.Notification = styled(noti)`
    width: 16px;
    height: 20px;
`;
Icons.Logo = styled.img``
Icons.User = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;

`