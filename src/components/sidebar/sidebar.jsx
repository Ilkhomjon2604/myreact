import React from 'react';
import { SideBarWrap, SideBarItem, Hr, RoundImg, LogoWrap, Icons } from './sidebar-style';
import { sidebar, sidebarExt, subscribed } from '../mock';
import prime from '../../assets/prime.svg'
import logo from '../../assets/logo.png'

class Sidebar extends React.Component {
    constructor(props){
        super (props);
          
        this.state = {
            data: sidebar,
            data2: sidebarExt,
            data3: subscribed
        }
    }
    render() {
      
        return (
            <SideBarWrap>

                <LogoWrap>
                    <Icons.Burger />
                    <a href="youtube.com" target='_blank'>  <Icons.Logo src={logo} /></a>
                </LogoWrap>

                {this.state.data.map(({ icon, name }, index) => {

                    return index === 0 ?
                        <SideBarItem key={index} className=' active sidebar-item '>
                            <img src={icon} alt={name} /> <p>{name}</p>
                        </SideBarItem> :
                        <SideBarItem key={index} className='sidebar-item '>
                            <img src={icon} alt={name} /> <p>{name}</p>
                        </SideBarItem>
                })}

                <Hr />

                {this.state.data2.map(({ icon, name }, index) => {
                    return <SideBarItem key={index} className='sidebar-item '>
                        <img src={icon} alt={name} /> <p>{name}</p>
                    </SideBarItem>
                })}


                <Hr />

                {this.state.data3.map(({ img, name }, index) => {
                    return <SideBarItem key={index} className='sidebar-item '>
                        <RoundImg className='sub-img' src={img} alt={name} /> <p>{name}</p>
                    </SideBarItem>
                })}

                <Hr />
                <SideBarItem className='sidebar-item '>
                    <img src={prime} alt='Premium' /> <p>YourTube Premium</p>

                </SideBarItem>


            </SideBarWrap>
        )
    }
}

export default Sidebar;