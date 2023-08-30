import React from 'react';
import { HeadWrap, LogoWrap, Icons, Search, UserWrap } from './header-style';
import logo from '../../assets/logo.png'
import user from '../../assets/user.jpg'





class Head extends  React.Component{
    render(){
        return (
            <HeadWrap>

                <LogoWrap>
                    <Icons.Burger/>
                    <Icons.Logo src={logo}/>
                </LogoWrap>

                <Search>
                    <Search.Input placeholder='Type for search ...' type= 'text'></Search.Input>
                    <Icons.Search/>
                </Search>

                <UserWrap>
                    <Icons.VideoAdd/>
                    <Icons.Notification/>
                    <Icons.User src= {user}/>


                </UserWrap>

            </HeadWrap>
        )
    }
}

export default Head ;