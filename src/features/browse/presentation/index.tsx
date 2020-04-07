import React from 'react'
import EminenCover from '../../../assets/eminem.png';

export default function BrowsePage(params: any) {
    return (
        <div className="browser-container">
            <p>
                <span className='navigation-indicator button'>{" < "}</span>
                <span className='navigation-indicator button'>{" > "}</span>
                <span className='browse-title'>The Killers Radio</span>
            </p>
            <p>
                <span>Show All</span>
                <span>Solo Audio</span>
                <span>Solo lyrics</span>
            </p>

            <div className="song-list">
                <SongRowItem {...new Song1()} />
                <SongRowItem {...new Song2()} />
                <SongRowItem {...new Song2()} />
                <SongRowItem {...new Song2()} />
                <SongRowItem {...new Song2()} />


            </div>
        </div>
    )
}

interface SongRowItemProps {
    coverImage: string
    songName: string
    albumName: string
    duration: string
}
class Song1 implements SongRowItemProps {
    coverImage: string = EminenCover;
    songName: string = 'Enterlude';
    albumName: string = 'The Killers'
    duration: string = '6:20';

}
class Song2 implements SongRowItemProps {
    coverImage: string = EminenCover;
    songName: string = 'Mr. Brightside';
    albumName: string = 'The Killers'
    duration: string = '6:20';

}
function SongRowItem(props: SongRowItemProps) {
    return (
        <div className="song-row-item-container">
            <div className="leading-container">
                <img src={EminenCover} alt="" className="song-cover" />
                <span className='song-icon-options'>
                    <span aria-label='im' role='img'>❤️</span>
                    <span aria-label='im' role='img'>{' '}</span>
                    <span>🛠</span>
                </span>
            </div>
            <span className="song-title">{props.songName}</span>
            <span className="artist-title">{props.albumName}</span>
            <span className="duration">{props.duration}</span>
        </div>
    )
}