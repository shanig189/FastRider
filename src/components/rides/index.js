import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getPinCode, setPinCode } from '../../services/pinActions';
import { pinValidation } from '../../helpers/validations';
import { getRidesData } from '../../services/api';
import Ride from '../ride';
import './style.css'

const Rides = () => {
    let history = useHistory();
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
            history.push(`/ticket/${pin}/${selectedRideId}`);
        }
    }

    return(
        <div className="rides_ctn">
            <form onSubmit={handleSubmit}>
                <input className="submit_input" type="text" placeholder="#PIN" value={pin} onChange={(e) => { setPin(e.target.value) }}/>
                <button className="submit_btn">SUBMIT</button> 
            </form>
            <div className="rides_data_ctn">
                {ridesData}
            </div>
        </div>
    )
}

export default Rides;