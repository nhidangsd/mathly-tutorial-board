import React from 'react';
import RoundedBox from './TutorialBoard/RoundedBox'
import ProgressBar from './TutorialBoard/ProgressBar'
import './TutorialBoard/TutorialBoard.css'
import tutorialList from './TutorialBoard/tutorialExamples'


export default function TutorialBoard(){
    return(
        <div className='board'>
           <ProgressBar 
                startValue= {0} 
                stepValue= {100 / tutorialList[0].steps} 
                height= '5px' 
                color= '#EC6057' 
                bgColor= '#5F1F20' 
            />
        </div>
    );
}