import React, {useState, useEffect} from 'react';
import { preProcessFile } from 'typescript';
import Player from './Player';
import './TutorialBoard.css';

export default function ProgressBar(props) {
  const [step, setStep] = useState(0);
  const containerStyles = {
    backgroundColor: props.bgColor,
  };

  const fillerStyles = {
    width: `${props.completed}%`,
    backgroundColor: props.color,
  };


  let idVar;

  const autoplay = () => {

    idVar = setInterval(() =>{
      props.setCompleted(completed =>
        (completed >= 100) ? clearInterval(idVar) : (completed + props.stepValue)
      );
    }, 1800);

  };

  const pause = () =>{
    clearInterval(idVar);
  }

  const togglePlaying = () =>{
    props.setPlaying(previous =>  !previous)
  };
  
  useEffect(() =>{
    
    if(props.playing){
      
      
      autoplay();
    }
    return pause;

  }, [props.playing]);


  const togglePrevious = () => {
    if(props.completed > 0){
      props.setCompleted(previous => (previous - props.stepValue));
      setStep(prev => prev-1);
      props.setSolutions(-1);
    }
  };

  const toggleNext = () => {
    if(props.completed < 100){
      props.setCompleted(previous => (previous + props.stepValue));
      setStep(prev => prev+1);
      props.setSolutions(step);
    }
  };

  return (
    <div>
      
      <div className='container-bar' style={containerStyles}>
        <div className='filler-bar' style={fillerStyles}>
          <span className='label-bar'>{props.completed}</span>
        </div>
      </div>

      <Player 
        completed= {props.completed < 100? false : true}
        playing = {props.playing}
        togglePrevious= {togglePrevious} 
        togglePlaying= {togglePlaying}
        toggleNext= {toggleNext} 
      />
    </div>
  );
}
