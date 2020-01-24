import React, { useState, useRef } from 'react';
import { getTimeFromDateString } from '../../helpers/time';
import clock from '../../assets/images/clock.png';
import ticket from '../../assets/images/ticket.png';
import './style.css'

const ridesIdsRefsList = {};
let isFirstTimeClick = true;
let previosId = null;

const Ride = ({ rideData, onSelectRide }) => {
    const { id, name, remaining_tickets, return_time } = rideData;
    const rideDataZone = { name: '', color: ''};
    const idRef = useRef();

    if(rideData.zone){
        const { name, color } = rideData.zone;
        rideDataZone.name = name;
        rideDataZone.color = color;
    }

    const handleRideClick = (e, color, id) => {
        console.log(ridesIdsRefsList, "aaa")
        if(isFirstTimeClick){
            isFirstTimeClick = false;
            previosId = id;
        }else{
            if(previosId !== id){
                // document.getElementById(previosId).style.background = '#373737';
                ridesIdsRefsList[previosId].style.background = '#373737';
                previosId = id;
            }
        }
        e.target.style.background = color;
        onSelectRide(id);
    }

    const ride_zone_color = {
        borderTop: `4px solid ${rideDataZone.color}`
    }

    return(
        <div className="ride_ctn" style={ride_zone_color} id={id} ref={(idRef) => ridesIdsRefsList[id] = idRef} onClick={(e) => {handleRideClick(e, rideDataZone.color, id)}}>
           <span className="zone_name">{rideDataZone.name}</span>
           <h4 className="ride_name">{name}</h4>
           <div className="time_Ticket_Ctn">
               <div>
                   <img className="time_Ticket_icon" src={clock} alt="" />
                   <span className="time_Ticket_content">{getTimeFromDateString(return_time)}</span>
               </div>
               <div>
                   <img className="time_Ticket_icon" src={ticket} alt="" />
                   <span className="time_Ticket_content">{remaining_tickets}</span>
               </div>
           </div>
        </div>
    )
}

export default Ride;