import React , {useState}from 'react';
import './TutorialBoard.css'

export default function TutorialContent({solutions}){
    const promt= solutions[0];

    const solutionSteps = solutions.slice(1);
    return(
        <div key={solutions} className='tutorial-step'>
            <li>
                    {`${promt[0]} ${promt[1]}`}
            </li>
            {solutionSteps && solutionSteps.map(step =>(
                <li>
                    {`#${step[0]} ${step[1]}`}
                </li>
            ))}
            
        </div>
    );
    
}