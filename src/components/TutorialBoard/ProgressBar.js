import React, {useState, useEffect} from 'react';
import Player from './Player';
import './TutorialBoard.css';

export default function ProgressBar(props) {
  const [completed, setCompleted] = useState(props.startValue);
  let [playing, setPlaying] = useState(false);
  const [steps, setSteps] = useState([]); 

  const containerStyles = {
    backgroundColor: props.bgColor,
  };

  const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: props.color,
  };


  let idVar;

  const autoplay = () => {

    idVar = setInterval(() =>{
      
      setCompleted(completed =>
        (completed >= 100) ? clearInterval(idVar) : (completed + props.stepValue)
      );

    }, 1800);

  };

  const pause = () =>{
    clearInterval(idVar);
  }

  const togglePlaying = () =>{
    setPlaying(previous =>  !previous)
  };

  useEffect(() =>{
    
    if(playing){
      autoplay();
    }
    return pause;

  }, [playing])


  const togglePrevious = () => {
    setCompleted(previous => 
      (completed > 0) ? (previous - props.stepValue) : previous
    );
  };

  const toggleNext = () => {
    setCompleted(previous => 
      (completed < 100) ? (previous + props.stepValue) : previous
    );
  };

  return (
    <div>
      
      <div className='container-bar' style={containerStyles}>
        <div className='filler-bar' style={fillerStyles}>
          <span className='label-bar'>{completed}</span>
        </div>
      </div>

      <Player 
        completed= {completed < 100? false : true}
        playing = {playing}
        togglePrevious= {togglePrevious} 
        togglePlaying= {togglePlaying}
        toggleNext= {toggleNext} 
      />
    </div>
  );
}
