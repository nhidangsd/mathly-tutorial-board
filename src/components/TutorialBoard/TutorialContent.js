import React , {useState}from 'react';
import './TutorialBoard.css'

export default function TutorialContent({solutions}){
    const [promtText, promtMath]= solutions[0];
    const solutionSteps = solutions.slice(1);

    return(
        <div key={solutions} className='tutorial-step'>
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
            {solutionSteps && solutionSteps.map(([text='', math='']) =>(
                <li className= 'step'>
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