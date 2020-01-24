const url = 'http://fast-rider.herokuapp.com/api/v1/';
const token = '433898df4a3e992b8411004109e4d574a90695e39e';

const getData = async (dataType, options = {}) => {
    try{
        const response = await fetch(`${url}${dataType}?token=${token}`, options);
        const data = await response.json();
        return data;
    }
    catch(err){
        return { message: 'Server error.' };
    }
}

export const getRidesData = async () => {
    const dataType = 'rides';
    return await getData(dataType);
}

export const getTicketData = async (params) => {
    const dataType = `tickets`;
    params.token = token;
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }
    return await getData(dataType, options);
}