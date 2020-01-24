import React, { useState, useEffect, useRef } from 'react';
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
    let ridesDataCtnRef = useRef();
    let submitBtnRef = useRef();
    let messageRef = useRef();

    const handleMobile = () => {
        document.addEventListener('touchmove', () => {
            if(ridesDataCtnRef.current && submitBtnRef.current){
                if(isElementAtTop(ridesDataCtnRef.current)){
                    submitBtnRef.current.style.visibility = 'visible';
                }else{
                    submitBtnRef.current.style.visibility = 'hidden';
                    
                }
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

    useEffect(() => {
       if(message !== '' && messageRef.current){
        const elementTop = messageRef.current.offsetTop;
        const body = document.body; 
        const html = document.documentElement;
        
        body.scrollTop = html.scrollTop = elementTop; 
       }

    }, [message]);

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
                (<div style={{color: '#FF5722'}} ref={messageRef}>{message}</div>)
            }
            <form onSubmit={handleSubmit}>
                <input className="submit_input" type="text" placeholder="#PIN" value={pin} onChange={(e) => { setPin(e.target.value); setMessage(''); }}/>
                <button className="submit_btn" id="submitBtn" ref={submitBtnRef}>SUBMIT</button> 
            </form>
            <div className="rides_data_ctn" id="ridesDataCtn" ref={ridesDataCtnRef}>
                {ridesData}
            </div>
        </div>
    )
}

export default Rides;