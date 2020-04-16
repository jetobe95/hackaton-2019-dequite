import React from 'react';
import _ from 'lodash'
import ReactPlater from 'react-player';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayerContext from '../../../core/player-context';
import PlayControls from './components/play-controls';




export interface BottomPlayerState {
    muted?: boolean,
    duration?: number,
    playedSeconds?: number,
    /**
     * Fracción reproducida
     */
    played?: number,
    seeking: boolean
}

class BottomPlayer extends React.Component<any, BottomPlayerState>{
    constructor(props: any) {
        super(props)
        this.state = {
            duration: 0,
            muted: false,
            playedSeconds: 0,
            played: 0,
            seeking: false
        };
    };
    static contextType = PlayerContext;

    player: any;


    ref = (player: any) => {
        this.player = player
    }


    seekTo = (e: number | number[]) => {
        this.setState({ seeking: false })
        if (this.player) {
            this.player.seekTo(e)
            if (typeof e == "number") {
                this.setState({ played: e })
            }
        }
    }

    render() {
        const { song, isPlaying } = this.context;
        const { muted, } = this.state
        let url = ''
        if (song) {
            url = `https://www.youtube.com/watch?v=${song.id.videoId}`;
        }
        return (
            <div className={`bottom-player-container ${song ? '' : 'bottom-player-hidden'}`}>
                <div className='video-thumbnail'>
                    <img
                        className='video-thumbnail'
                        src={song?.snippet.thumbnails.high.url}
                    />
                    <ReactPlater
                        ref={this.ref}
                        muted={muted}
                        onDuration={(duration) => {
                            this.setState({
                                duration
                            });
                        }}
                        onProgress={({ playedSeconds, played }) => {
                            this.setState({
                                playedSeconds: playedSeconds,
                                played: played
                            });
                        }}

                        url={url} style={{ 'display': 'none' }}
                        playing={isPlaying} />
                </div>
                <div className="song-description-container">
                    <div className="artist-name-container">
                        <h3 className="artist-name">{_.get(song, 'snippet.channelTitle')}</h3>
                    </div>
                    <div className="song-subtitle-container">
                        <span className="song-subtitle">{_.get(song, 'snippet.title')}</span>
                        <span className="favorite-container">
                            <span aria-label='im' className="favorite-icon button" role='img'>
                                <FavoriteBorderIcon />
                            </span>
                        </span>
                    </div>
                </div>
                <PlayControls
                    seekTo={this.seekTo}
                    {...this.state}
                />


                <div className="right-icons-container">
                    🔉 🎶
                </div>
            </div>
        )

    }

}
export default BottomPlayer
