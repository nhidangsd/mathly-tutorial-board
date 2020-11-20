import React, {useState} from 'react';
import RoundedBox from './TutorialBoard/RoundedBox'
import ProgressBar from './TutorialBoard/ProgressBar'
import './TutorialBoard/TutorialBoard.css'
import example from './TutorialBoard/tutorialExamples'
import TutorialContent from './TutorialBoard/TutorialContent';


export default function TutorialBoard(props){
  const [completed, setCompleted] = useState(0); 
  let [playing, setPlaying] = useState(false); 
  const [solutions, setSolutions] = useState([example.promt]); 

  const updateCompleted = (val) => setCompleted(val);
  const updatePlaying = (val) => setPlaying(val);
  const updateSolutions = (step) => {
    setSolutions(
      (step === -1)
      ? [...solutions].slice(0, solutions.length-1)
      : [...solutions, example.solution[step]]
    );
  }

  const stepValue = 100 / example.solution.length;
  return(
    <div className='board'>
      <div className='tutorial-content'>
      <TutorialContent
        solutions= {solutions}
      />
      </div>
      
      <div className='tutorial-controller'>
      <ProgressBar 
        startValue = {completed}
        stepValue = {stepValue} 
        completed= {completed}
        setCompleted = {updateCompleted}
        playing= {playing}
        setPlaying= {updatePlaying}
        setSolutions= {updateSolutions}
        height= '5px' 
        color= '#EC6057' 
        bgColor= '#5F1F20' 
      />
      </div>
          
    </div>
  );
}