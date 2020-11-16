import React, {useState} from 'react';
import Player from './Player';

export default function ProgressBar(props) {
  const [completed, setCompleted] = useState(props.startValue);
  let [playing, setPlaying] = useState(false);
  const [steps, setSteps] = useState([]); 

  const containerStyles = {
    height: 14,
    width: 1029,
    backgroundColor: props.bgColor,
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: props.color,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 0.5s ease-in-out',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  let idVar;
  const autoplay = () => {

    if(!playing){
      setPlaying = true;

      idVar = setInterval(() =>{
      
        setCompleted(completed =>{
            
          if(completed >= 100){
            clearInterval(idVar);
            setPlaying = false;
          }
          else {
            return completed + props.stepValue;
          }

        });

      }, 1800);
    }
    else if(playing){
      clearInterval(idVar);
      setPlaying = false;
    }
      
  };
  // const autoplay = () => {

  //   idVar = setInterval(() =>{
  //     if(!playing){
       
  //       setPlaying = true;
  //       setCompleted(completed =>{
            
  //         if(completed >= 100){
  //           clearInterval(idVar);
  //           setPlaying = false;
  //         }
  //         else {
  //           return completed + props.stepValue;
  //         }

  //       }, 1800);

  //     }
  //     else{
  //       setPlaying = false
  //     };

  //   });
  // };

  const pause = () => {

    if(playing){
      clearInterval(idVar);
      setPlaying = false;

    }
  }

  const previous = () => {
    setCompleted(previous => {
      if (completed > 0){
        return previous - props.stepValue;
      }
      else return previous;
    })
  }

  const next = () => {
    setCompleted(previous => {
      if (completed < 100){
        return previous + props.stepValue;
      }
      else return previous;
    })
  }

  return (
    <div>
      <div className='ContainerBar' style={containerStyles}>
        <div className='FilerBar' style={fillerStyles}>
          <span className='LabelBar' style={labelStyles}>{completed}</span>
        </div>
      </div>
      <Player 
        previous= {previous} 
        play= {autoplay}
        pause= {pause} 
        next= {next} 
      />
    </div>
  );
}
