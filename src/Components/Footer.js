import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import { Grid, Slider } from '@material-ui/core'

import './css/Footer.css'

function Footer () {
  return (
    <div className='footer'>
      {/* Left Footer */}
      <div className='footer__left'>
        <img className='footer__albumLogo' src='' alt='' />
        <div className='footer__songInfo'>
          <h4>Oh Love</h4>
          <p>Green Day</p>
        </div>
      </div>

      {/* Center Footer */}
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>

      {/* RIGHT FOOTER */}
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className='' />
          </Grid>
          <Grid item>
            <VolumeDownIcon className='' />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continous-slider' />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
