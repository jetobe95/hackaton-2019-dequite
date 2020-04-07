import React from 'react';
import exampleCover from '../../../assets/eminem.png';
export default function BottomPlayer(params: any) {
    return (
        <div className="bottom-player-container">
            <img src={exampleCover} alt="Eminen" />
            <div className="song-description-container">
                <div className="artist-name-container">
                    <h3 className="artist-name">Eminem Music</h3>
                </div>
                <div className="song-subtitle-container">
                    <span className="song-subtitle">Rap God (Explicit & Expl</span>
                    <span className="favorite-container">
                        <span  aria-label='im' className="favorite-icon button" role='img'>❤️</span>
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
                ⏮ ⏭ ▶️   🔄
            </div>
            <div className="line-reproductor-container">
                <span className='time-count'>1:45</span>
                <div className="line"></div>
                <span className='time-count'>6:03</span>
            </div>
        </div>
    )
}