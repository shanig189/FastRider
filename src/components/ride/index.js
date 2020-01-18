import React from 'react';
import { getTimeFromDateString } from '../../helpers/time';
import clock from '../../assets/images/clock.png';
import ticket from '../../assets/images/ticket.png';
import './style.css'

const Ride = ({ rideData, onSelectRide}) => {
    const { name, remaining_tickets, return_time } = rideData;
    const rideDataZone = { name: '', color: ''};

    if(rideData.zone){
        const { name, color } = rideData.zone;
        rideDataZone.name = name;
        rideDataZone.color = color;
    }

    const ride_zone_color = {
        borderTop: `4px solid ${rideDataZone.color}`
    }

    return(
        <div className="ride_ctn" style={ride_zone_color}>
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