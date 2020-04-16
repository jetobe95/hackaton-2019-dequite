import React from 'react';
import { NavLink,withRouter } from 'react-router-dom'

import soundHouseLogo from '../../../../assets/sound-house.png'
import NavigationKeys from '../../../navigation/key';
import TextInput from '../../../components/inputs/text-Input';
import UserContext, { IUserContext } from '../../../user-context';

function LeftSideBar(props: any) {
    const activeClass: string = 'active';

    function onFocus():void {
        props.history.push('/')
    }

    const userContext: IUserContext = React.useContext(UserContext);

    return (
        <nav className='side-bar-container '>
            <img src={soundHouseLogo} className='logo' alt='soung-house-logo.png' />
            <TextInput
                onFocus={onFocus}
                onChangeText={(s) => userContext.setSearchQuery(s)}
            />
            <NavLink
                className='mt-3'
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


export default withRouter(LeftSideBar)