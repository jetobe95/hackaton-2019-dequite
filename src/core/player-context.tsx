import React, { createContext } from 'react'
import Song from './domain/entities/song';
import { YoutubeSearch } from './domain/entities/youtube-search';

class PlayerContext {
    public isPlaying: boolean | undefined;
    public song: YoutubeSearch | undefined;
    setSong(song: YoutubeSearch): void { };
    setPlaying(playing: boolean): void { };
}

const Context = createContext<PlayerContext>(new PlayerContext());


export class PlayerProvider extends React.Component implements PlayerContext {
    public isPlaying: boolean = false;
    public song: YoutubeSearch | undefined;

    setSong = (song: YoutubeSearch) => {
        this.song = song;
        this.isPlaying = true;
        this.setState({})
    }

    setPlaying = (playing: boolean) => {
        this.isPlaying = playing;
        this.setState({})
    }


    render() {
        const value: PlayerContext = {
            isPlaying: this.isPlaying,
            song: this.song,
            setPlaying: this.setPlaying,
            setSong: this.setSong
        }
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
export default Context


