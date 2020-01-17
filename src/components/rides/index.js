import React, { useState } from 'react';
import './style.css'

const Rides = () => {
    const [pin, setPin] = useState('');

    // const getRides = async () => {
    //     const rides = await getRides();

    //     // rides.
    // }
    return(
        <div className="rides_ctn">
            <form>
                <input type="text" placeholder="#PIN" value={pin} onChange={(e) => { setPin(e.target.value) }}/>
                <button>SUBMIT</button> 
            </form>
        </div>
    )
}

export default Rides;