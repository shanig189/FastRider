export const getTimeFromDateString = (str) => {
    const myDate = new Date(str);
    
    const hours = myDate.getHours();
    const minutes = myDate.getMinutes();

    return `${hours}:${minutes}`;
}