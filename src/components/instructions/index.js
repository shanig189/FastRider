import React from 'react';
import Instruction from '../instruction';
import { instructions } from '../../utils/enums';
import './style.css';

const Instructions = () => {
    const getInstructions = instructions.map((instruction, index) =>
        <Instruction key={index} instructionData={instruction} />
    );

    return(
        <div className="instructions_ctn">
            {getInstructions}
        </div>
    )
}

export default Instructions;