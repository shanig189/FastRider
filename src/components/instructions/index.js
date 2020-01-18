import React from 'react';
import Instruction from '../instruction';
import { instructions } from '../../utils/data';
import './style.css';

const Instructions = () => {
    const instructionsData = instructions.map((instruction, index) =>
        <Instruction key={index} instructionData={instruction} />
    );

    return(
        <div className="instructions_ctn">
            {instructionsData}
        </div>
    )
}

export default Instructions;