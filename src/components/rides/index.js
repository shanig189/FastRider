import React, { useState, useEffect } from 'react';
import useMobileDetect from 'use-mobile-detect-hook';
import { useHistory } from 'react-router-dom';
import { getPinCode, setPinCode } from '../../services/pinActions';
import { isValidPinCode, isElementAtTop } from '../../helpers/validations';
import { getRidesData } from '../../services/api';
import Ride from '../ride';
import './style.css'

const Rides = () => {
    let history = useHistory();
    const detectMobile = useMobileDetect();
    const [rides, setRides] = useState([]);
    const [pin, setPin] = useState(getPinCode());
    const [selectedRideId, setSelectedRideId] = useState(null);
    const [message, setMessage] = useState('');

    const handleMobile = () => {
        document.addEventListener('touchmove', () => {
            const ridesDataCtn = document.getElementById('ridesDataCtn');
            const submitBtn = document.getElementById('submitBtn');
            if(isElementAtTop(ridesDataCtn)){
                submitBtn.style.visibility = 'visible';
            }else{
                submitBtn.style.visibility = 'hidden';
                
            }
        })
    }

    useEffect(() => {
        if(detectMobile.isMobile()){
            handleMobile();
        }

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
        if(!pin){
            setMessage('Pin cannot be empty.')
        }else if(!isValidPinCode(pin)){
            setMessage('Pin not valid.')
        }else if(!selectedRideId){
            setMessage('Please select a ride.')
        }else{
            setPinCode(pin);
            setMessage('');
            history.push(`/ticket/${pin}/${selectedRideId}`);
        }
    }

    return(
        <div className="rides_ctn" >
            {
                message && 
                (<div style={{color: '#FF5722'}}>{message}</div>)
            }
            <form onSubmit={handleSubmit}>
                <input className="submit_input" type="text" placeholder="#PIN" value={pin} onChange={(e) => { setPin(e.target.value); setMessage(''); }}/>
                <button className="submit_btn" id="submitBtn">SUBMIT</button> 
            </form>
            <div className="rides_data_ctn" id="ridesDataCtn">
                {ridesData}
            </div>
        </div>
    )
}

export default Rides;