import ticket from '../assets/images/ticket.png';
import arrow from '../assets/images/arrow.png';
import clock from '../assets/images/clock.png';
import check from '../assets/images/check.png';

export const instructions = [
    {
        icon: ticket,
        content: "Enter your park ticket #PIN number, then select the desired ride while noting the stated return time."
    },
    {
        icon: arrow,
        content: "Press 'submit' to confirm and retrieve your access code."
    },
    {
        icon: clock,
        content: "When the time comes, use the special FastRider line to cut out a considerable wait time."
    }
];

export const thanks = {
    icon: check,
    content: "Thank you for using The Jungle™ FastRider ticket system - your access code is now ready!."
}