import React, {useState, useEffect} from 'react';
import Player from './Player';
import './TutorialBoard.css';

export default function ProgressBar(props) {
  const containerStyles = {
    backgroundColor: props.bgColor,
  };

  const fillerStyles = {
    width: `${props.completed}%`,
    backgroundColor: props.color,
  };


  const togglePlaying = () =>{
    props.setPlaying(previous =>  !previous)
  };

  const togglePrevious = () => {
    if(props.completed > 0){
      props.setCompleted(previous => (previous - props.stepValue));
      props.setCurrentStep(prev => prev-1);
      props.setSolutions(-1);
    }
  };

  const toggleNext = () => {
    if(props.completed < 100){
      props.setCompleted(previous => (previous + props.stepValue));
      props.setCurrentStep(prev => prev+1);
      props.setSolutions(props.currentStep);
    }
  };
  
  useEffect(() =>{
    let idVar;
    // const autoplay = () => {

    //   idVar = setInterval(() =>{
    //     props.setCompleted(completed =>
    //       (completed >= 100) ? clearInterval(idVar) : (completed + props.stepValue)
    //     );
    //   }, 1800);

    // };

    const autoplay = () => {

      idVar = setInterval(() =>{

        if(props.completed < 100){
            props.setCompleted(previous => (previous + props.stepValue));
            props.setCurrentStep(prev => prev+1);
            props.setSolutions(props.currentStep);
        }else{
          pause();
        }
        
      }, 1800);

    };

    const pause = () =>{
      clearInterval(idVar);
    }
    
    if(props.playing){
      autoplay();
    }
    return pause;

  }, [props]);


  return (
    <div className='container-controller'>
      
      <div className='container-bar' style={containerStyles}>
        <div className='filler-bar' style={fillerStyles}>
          
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
