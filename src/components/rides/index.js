import React, { useState, useEffect } from 'react';
import Ride from '../ride';
import { getPinCode, setPinCode } from '../../services/pinActions';
import { pinValidation } from '../../helpers/validations';
import { getRidesData } from '../../services/api';
import './style.css'

const Rides = () => {
    const [rides, setRides] = useState([]);
    const [pin, setPin] = useState(getPinCode());
    const [selectedRideId, setSelectedRideId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const rides = await getRidesData();
            if(rides.message){
                alert(rides.message);
            }else{
                setRides(rides);
            }
        };
        fetchData();
    }, []);

    const handleSelectRide = (rideId) => {
        setSelectedRideId(rideId);
    }

    const ridesData = rides.map((ride, index) =>
        <Ride key={index} rideData={ride} onSelectRide={handleSelectRide} />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectedRideId && pinValidation(pin)){
            setPinCode(pin);
            //redirect
        }
    }


    return(
        <div className="rides_ctn">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="#PIN" value={pin} onChange={(e) => { setPin(e.target.value) }}/>
                <button>SUBMIT</button> 
            </form>
            <div className="rides_data_ctn">
                {ridesData}
            </div>
        </div>
    )
}

export default Rides;