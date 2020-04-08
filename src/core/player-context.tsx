import React, { createContext } from 'react'
import Song from './domain/entities/song';

class PlayerContext {
    public isPlaying: boolean | undefined;
    public song: Song | undefined;
    setSong(song: Song): void { };
    setPlaying(playing: boolean): void { };
}

const Context = createContext<PlayerContext>(new PlayerContext());


export class PlayerProvider extends React.Component implements PlayerContext {
    public isPlaying: boolean = false;
    public song: Song | undefined;

    setSong = (song: Song) => {
        this.song = song;
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


