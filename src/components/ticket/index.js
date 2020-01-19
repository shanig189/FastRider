import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getTicketData } from '../../services/api';
import { thanks } from '../../utils/data';
import { getTimeFromDateString } from '../../helpers/time';
import Instruction from '../instruction';
import './style.css';

const Ticket = () => {
    const { pin, ride_id } = useParams();
    const [ticket, setTicket] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const ticket = await getTicketData({ pin, ride_id });
            if(ticket.message){
                setMessage(ticket.message);
            }else{
                setMessage('');
                setTicket(ticket);
            }
        };
        fetchData();
    }, []);

    const ride_zone_color = Object.entries(ticket).length > 0 ? {  borderTop: `4px solid ${ticket.ride.zone.color}` } : {};

    return(
        <div className="ticket_ctn">
            {
                message !== '' ?
                <div className="message_ctn">
                    <span className="message">{message}</span>
                </div> 
                :
                Object.entries(ticket).length > 0 && 
                (<div className="thanks">
                    <Instruction instructionData={thanks}/>
                    <div className="ride_ctn ticket_data_ctn" style={ride_zone_color}>
                        <div className="ride_zone_ctn">
                            <span className="ticket_ride_name">{ticket.ride.name}</span>
                            <span className="ticket_zone_name">{ticket.ride.zone.name}</span>
                        </div>
                        <div className="ticket_time_ctn">
                            <span className="return_time_txt">Return At</span>
                            <span className="return_time_val">{getTimeFromDateString(ticket.return_time)}</span>
                        </div>
                        <div className="access_code_ctn">
                            <span className="access_code_txt">Use Access Code</span>
                            <span className="access_code_val">{ticket.access_code}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Ticket;