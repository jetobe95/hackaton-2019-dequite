import React from 'react';
import Favorite from '@material-ui/icons/Favorite'
import FavoriteOutline from '@material-ui/icons/FavoriteBorderOutlined'
import HorizontalSplit from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import EminenCover from '../../../../assets/eminem.png';
export interface SongRowItemProps {
    coverImage: string
    songName: string
    albumName: string
    duration: string
    onClick(): void
}
interface FavoriteToggleProps {
    active: boolean
}
function FavoriteToggle(props: FavoriteToggleProps) {
    let icon

    if (props.active) {
        icon = (
            <Favorite />
        )
    } else {
        icon = (
            <FavoriteOutline />
        )
    }

    return (
        <IconButton
            color="inherit"
            className='icon-button-favorite'
            onClick={() => console.log('Icon Press')}
        >
            {icon}
        </IconButton>
    )


}

export default function SongRowItem(props: SongRowItemProps) {
    return (
        <div
            onClick={props.onClick}
            className="song-row-item-container">
            <div className="leading-container">
                <img src={EminenCover} alt="" className="song-cover" />
            </div>
            <span className='song-icon-options'>
                <FavoriteToggle active={false} />
                <IconButton
                    color='inherit'
                    className="icon-button-favorite">
                    <HorizontalSplit />
                </IconButton>
            </span>
            <span className="song-title">{props.songName}</span>
            <span className="artist-title">{props.albumName}</span>
            <span className="duration">{props.duration}</span>
        </div>
    )
}
