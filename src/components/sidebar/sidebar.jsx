import React from 'react';
import { SideBarWrap, SideBarItem, Icons } from './sidebar-style';
class Sidebar extends React.Component{
    render(){
        return (
            <SideBarWrap>
                <SideBarItem className='sidebar-item active'>
                    <Icons.Home/> <p>Home</p>
                </SideBarItem>
               
            </SideBarWrap>
        )
    }
}

export default Sidebar;