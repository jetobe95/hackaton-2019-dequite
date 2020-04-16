import React, { useContext } from 'react';
import ReactPlater from 'react-player';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import PlayerContext from '../../../core/player-context';
export default function BottomPlayer(params: any) {
    const playerContext = useContext(PlayerContext);
    const { song } = playerContext;
    let url = '';
    if (song != undefined) {
        url = song.url;
    }

    


    return (
        <div className={`bottom-player-container ${song?'':'bottom-player-hidden'}`}>
            <div className='video-thumbnail'>
                <ReactPlater url={url} style={{ 'display': 'none' }} playing={playerContext.isPlaying} />
            </div>
            <div className="song-description-container">
                <div className="artist-name-container">
                    <h3 className="artist-name">Eminem Music</h3>
                </div>
                <div className="song-subtitle-container">
                    <span className="song-subtitle">Rap God (Explicit & Expl</span>
                    <span className="favorite-container">
                        <span aria-label='im' className="favorite-icon button" role='img'>
                            <FavoriteBorderIcon />
                        </span>
                    </span>
                </div>
            </div>

            <PlayControls />


            <div className="right-icons-container">
                🔉 🎶
            </div>
        </div>
    )
}

function PlayControls(params: any) {
    return (
        <div className="play-controls-container">
            <div className="row-icons-container">
                ⏮ ⏭ <PlayArrowIcon style={{color:'white'}}/>  🔄
            </div>
            <div className="line-reproductor-container">
                <span className='time-count'>1:45</span>
                <div className="line"></div>
                <span className='time-count'>6:03</span>
            </div>
        </div>
    )
}