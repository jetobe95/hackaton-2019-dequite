import React from 'react';
import { Link, LinkProps, NavLink, NavLinkProps } from 'react-router-dom'
import soundHouseLogo from '../../../../assets/sound-house.png'


export default function LeftSideBar(props: any) {

    return (
        <div className='side-bar-container'>
            <img src={soundHouseLogo} className='logo' />
            <input type="text" placeholder='search' />
            <div style={{ marginBottom: '3rem' }}></div>
            <NavLink
                component={LeftTabItem}
                isActive={(p, a) => {
                    return true
                }} 
                activeClassName='left-gradient active' 
                to='/hello' >
                Home
            </NavLink>

            <a href="#">Browse</a>
            <br />
            <a href="#">Your music</a>
            <a href="#">Your songs</a>
            <a href="#">Artists</a>
            <br />
            <a href="#">Playlists</a>
            <a href="#">+ Create playlist</a>
            <a href="#">Artists</a> 
        </div>
    )
}



function LeftTabItem({ className }: any) {
    console.log(className)
    
    return (
        <div className='left-gradient active'>
            <a  href="#">Home</a>
        </div>
    )
}