const url = 'http://fast-rider.herokuapp.com/api/v1/';
const token = '433898df4a3e992b8411004109e4d574a90695e39e';

const getData = async (params, options = {}) => {
    try{
        const response = await fetch(`${url}${params}?token=${token}`, options);
        const data = await response.json();
        return data;
    }
    catch(err){
        return { message: 'Server error.' };
    }
}

export const getRidesData = async () => {
    const params = 'rides';
    return await getData(params);
}

// export const getTicket = async (trackId) => {
//     try{
//         const params = `track.lyrics.get?track_id=${trackId}`;
//         const { lyrics } = await getTracks(params);
//         const { lyrics_body } = lyrics;

//         return lyrics_body;
//     }catch(err){
//         return '';
//     }

// }