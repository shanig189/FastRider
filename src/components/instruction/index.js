import React from 'react';
import './style.css';

const Instruction = ({ instructionData }) => {
    return(
        <div className="instruction_ctn">
            <img src={instructionData.icon} alt=""/>
            <span>{instructionData.content}</span>
        </div>
    )
}

export default Instruction;