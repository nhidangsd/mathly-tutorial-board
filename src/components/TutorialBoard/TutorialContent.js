import React , {useState}from 'react';
import './TutorialBoard.css'

export default function TutorialContent({solutions, currentStep}){
    const [promtText, promtMath]= solutions[0];
    const solutionSteps = solutions.slice(1);

    const currentStepStyling = {
        borderRadius: 30,
        backgroundColor: '#E8E8E8',
        width: '53vw',
        height: '3.1rem',  
    }
    const noStyling = {
        none: 'none',
    }

    return(
        <div key={solutions} className='tutorial-container'>
            <li className= 'promt-wrapper'> 
                <span className='promt'>
                    <span className='promt-text'>
                        {`${promtText}:`}
                    </span>
                    <span className= 'promt-math'>
                        {` ${promtMath}`}
                    </span>
                </span>
                
                <span className='tutorial-username'>
                        Tommy Pickles
                </span>
            </li>
            <div className='step-wrapper'>
            {solutionSteps && solutionSteps.map(([text='', math=''], index) =>(
                <li className= 'step' style= {currentStep-1 === index ? currentStepStyling : noStyling}>
                    <span className='step-text'>
                        {`#${text}`}
                    </span>
                    <span className= 'step-math'>
                        {`${math}`}
                    </span>
                </li>
            ))}
            </div>
            
        </div>
    );
    
}