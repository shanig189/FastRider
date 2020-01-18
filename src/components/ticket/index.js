import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getTicketData } from '../../services/api';
import { thanks } from '../../utils/data';
import Instruction from '../instruction';
import './style.css';

const Ticket = () => {
    const { pin, ride_id } = useParams();
    const [ticket, setTicket] = useState({});
    const [message, setMessage] = useState('');
    var mock = {
        "id": 0,
        "ride": {
          "id": 0,
          "zone": {
            "id": 0,
            "name": "string",
            "color": "string"
          },
          "name": "string",
          "remaining_tickets": 0,
          "return_time": "2020-01-17T23:30:27.041Z"
        },
        "access_code": "string",
        "return_time": "2020-01-17T23:30:27.041Z"
      }

    useEffect(() => {
        const fetchData = async () => {
            const ticket = await getTicketData({ pin, ride_id });
            console.log("ticket", ticket)
            // if(ticket.message){
            //     setMessage(ticket.message);
            // }else{
                setMessage('');
                setTicket(ticket);
            // }
        };
        fetchData();
    }, []);

    return(
        <div className="ticket_ctn">
            {
                message !== '' ? 
                <span className="message">{message}</span>
                :
                <div className="thanks">
                    <Instruction instructionData={thanks}/>
                    <div className="ticket_data_ctn">
                        <div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Ticket;