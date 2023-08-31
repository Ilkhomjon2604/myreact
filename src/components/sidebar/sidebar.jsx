import React from 'react';
import { SideBarWrap, SideBarItem, Hr, RoundImg } from './sidebar-style';
import { sidebar, sidebarExt, subscribed } from '../mock';
import prime from '../../assets/prime.svg'
class Sidebar extends React.Component {
    render() {
        this.state = {
            data: sidebar,
            data2: sidebarExt,
            data3: subscribed
        }
        return (
            <SideBarWrap>
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
                <SideBarItem  className='sidebar-item '>
                        <img src={prime} alt='Premium' /> <p>YourTube Premium</p>

                    </SideBarItem>
                    

            </SideBarWrap>
        )
    }
}

export default Sidebar;