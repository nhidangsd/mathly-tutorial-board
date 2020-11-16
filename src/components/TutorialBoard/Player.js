import React from 'react';
import playBtn from './images/play-button.png'
import pauseBtn from './images/pause-button.png'
import arrowBtn from './images/arrow-button.png'

export default function Player(props){
    return(
        <div>

            <div className='previous-btn' onClick={props.previous}> 
                <img src={arrowBtn} alt='previous-btn'/>
            </div>
            <div className='play-btn' onClick={props.play}> 
                <img src={playBtn} alt='play-btn'/>
            </div>
            <div className='pause-btn' onClick={props.pause}> 
                <img src={pauseBtn} alt='pause-btn'/>
            </div>
            <div className='next-btn' onClick={props.next}> 
                <img src={arrowBtn} alt='next-btn'/>
            </div>

        </div>
    );
}