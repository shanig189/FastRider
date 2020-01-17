import React from 'react';
import './style.css';

const Instruction = ({ instructionData }) => {
    console.log("instruction", instructionData)
    return(
        <div className="instruction_ctn">
            <img src={instructionData.icon} alt=""/>
            <span>{instructionData.content}</span>
        </div>
    )
}

export default Instruction;