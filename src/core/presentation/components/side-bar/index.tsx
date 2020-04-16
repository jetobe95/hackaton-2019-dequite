import React from 'react';
import { NavLink } from 'react-router-dom'
import soundHouseLogo from '../../../../assets/sound-house.png'
import NavigationKeys from '../../../navigation/key';

export default function LeftSideBar(props: any) {
    const activeClass:string = 'active';
    return (
        <nav className='side-bar-container'>
            <img src={soundHouseLogo} className='logo' alt='soung-house-logo.png'/>
            <input type="text" placeholder='Search' className='search-side-bar' />
            <div style={{ marginBottom: '3rem' }}></div>
            <NavLink
                exact={false}
                isActive={(_, { pathname }) => (pathname === ('/select-genre') || pathname === '/')}
                activeClassName={activeClass}
                to='/' >
                Home
            </NavLink>
            <NavLink
                activeClassName={activeClass}
                to={NavigationKeys.browse} >
                Browse
            </NavLink>
            <br />
            <NavLink
                activeClassName={activeClass}
                to={NavigationKeys.yourMusic} >
                Your music
            </NavLink>
            <NavLink
                activeClassName={activeClass}
                to={NavigationKeys.mySongs} >
              My Songs
            </NavLink>
            <NavLink
                activeClassName={activeClass}
                to={NavigationKeys.artists} >
                    Artists
            </NavLink>
          
            <br />
            <NavLink
                activeClassName={activeClass}
                to={NavigationKeys.playLists} >
                    Playlists
            </NavLink>
            <NavLink
                activeClassName={activeClass}
                to={NavigationKeys.createPlayLists} >
                   + Create playlist
            </NavLink>
        </nav>
    )
}
