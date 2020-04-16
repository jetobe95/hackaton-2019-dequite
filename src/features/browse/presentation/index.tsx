import React from 'react'
import EminenCover from '../../../assets/eminem.png';
import PlayerContext from '../../../core/player-context';
import Song from '../../../core/domain/entities/song';
import SongRowItem, { SongRowItemProps } from './components/song-row';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import IconButton from '@material-ui/core/IconButton'
export default function BrowsePage(params: any) {
    const { setSong, setPlaying } = React.useContext(PlayerContext);
    return (
        <div className="browser-container">
            <header className='p-2'>
                <IconButton>
                    <ArrowBackIos />
                </IconButton>
                <IconButton>
                    <ArrowForwardIos />
                </IconButton>
                <span className='browse-title'>The Killers Radio</span>
            </header>
            <div className="song-list">
                <SongRowItem {...new Song1()} onClick={() => {
                    setSong(new Song('Hola', 'DE', 'https://www.youtube.com/watch?v=OXJojqTzJL0&t=559s'))
                    setPlaying(true)
                }} />
                <SongRowItem {...new Song2()} onClick={() => {
                    setSong(new Song('Hola', 'DE', 'https://www.youtube.com/watch?v=OXJojqTzJL0&t=559s'))
                    setPlaying(true)
                }} />
                <SongRowItem {...new Song2()} onClick={() => {
                    setSong(new Song('Hola', 'DE', 'https://www.youtube.com/watch?v=OXJojqTzJL0&t=559s'))
                    setPlaying(true)
                }} />
                <SongRowItem {...new Song2()} onClick={() => {
                    setSong(new Song('Hola', 'DE', 'https://www.youtube.com/watch?v=OXJojqTzJL0&t=559s'))
                    setPlaying(true)
                }} />
                <SongRowItem {...new Song2()} onClick={() => {
                    setSong(new Song('Hola', 'DE', 'https://www.youtube.com/watch?v=OXJojqTzJL0&t=559s'))
                    setPlaying(true)
                }} />


            </div>
        </div>
    )
}


class Song1 implements SongRowItemProps {
    onClick(): void {
        throw new Error("Method not implemented.");
    }
    coverImage: string = EminenCover;
    songName: string = 'Enterlude Incididunt aliqua cillum tempor nisi.';
    albumName: string = 'The Killers'
    duration: string = '6:20';

}
class Song2 implements SongRowItemProps {
    onClick(): void {
        throw new Error("Method not implemented.");
    }
    coverImage: string = EminenCover;
    songName: string = 'Sint proident ut magna incididunt cupidatat sunt culpa aliqua.';
    albumName: string = 'The Killers'
    duration: string = '6:20';

}
