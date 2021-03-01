import React from 'react';
import PlayCircleOutineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';
import './Footer.css';

const Footer: React.FC<{}> = () => {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img
                    className="footer__albumLogo" 
                    src="" 
                    alt="Album Art"
                />
                <div className="footer__songInfo">
                    <h4>Text</h4>
                    <p>Text 2</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green' />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby='continuous-slider' />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
