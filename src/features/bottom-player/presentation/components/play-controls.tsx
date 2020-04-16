import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider'
import { BottomPlayerState } from '..';



const SoundHouseSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '0',
    margin: '0 2px'
  },
  thumb: {
    display: 'none'
  },
  active: {
  },
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: '.25rem',
    background: 'linear-gradient(45deg, #DD166B, #722FD9)',
    borderRadius: 0,
  },
  rail: {
    height: '.25rem',
    opacity: 0.4,
    backgroundColor: '#fff',
    borderRadius: 0
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

interface PlayControlsProps extends BottomPlayerState {
  seekTo(e: number | number[]): void
}

export default function PlayControls(props: PlayControlsProps) {
  function fmtMSS(s: number | undefined): string {
    if (s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + Math.floor(s);
    } else {
      return '-/-'
    }
  }
  return (
    <div className="play-controls-container">
      <div className="row-icons-container">
        ⏮ ⏭ <PlayArrowIcon style={{ color: 'white' }} />  🔄
            </div>
      <div className="line-reproductor-container">
        <span className='time-count'>{fmtMSS(props.playedSeconds)}</span>
        <SoundHouseSlider
          step={0.001}
          onChange={(_, value) => props.seekTo(value)}
          value={props.played}
          max={1}
          min={0}
        />
        <span className='time-count'>{fmtMSS(props.duration)}</span>
      </div>
    </div>
  )
}