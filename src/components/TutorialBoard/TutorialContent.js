import React , {useState}from 'react';
import './TutorialBoard.css'

export default function TutorialContent({solutions}){
    
    return(
        <div key={solutions}>
            {solutions && solutions.map(step =>(
                <li>
                    {`${step[0]}: ${step[1]}`}
                </li>
            ))}
        </div>
    );
    
}