import React from 'react';
import playBtn from './images/play-button.png'
import pauseBtn from './images/pause-button.png'
import arrowBtn from './images/arrow-button.png'
import './TutorialBoard.css'

export default function Player(props){


    return(
        <div className='player-control-menu'>

            <div className= 'previous-btn' onClick= {props.togglePrevious}> 
                <img src={arrowBtn} alt='previous-btn' />
            </div>
    
            <div className= 'play-btn' onClick= {props.togglePlaying}>
                <img 
                    src= {props.playing && !props.completed
                    ? pauseBtn 
                    : playBtn} alt='play-btn'
                />
            </div>
            
            <div className= 'next-btn' onClick= {props.toggleNext}> 
                <img src={arrowBtn} alt='next-btn'/>
            </div>

        </div>
    );
}