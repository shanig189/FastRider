const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // for cors problem
const url = 'http://api.musixmatch.com/ws/1.1/';
const key = '363d6ff81d8b621aa464d2b3ae1ec576';
const options = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}

const getTracks = async (params) => {
    const response = await fetch(`${proxyUrl}${url}${params}&apikey=${key}`, options);
    const data = await response.json();

    return data.message.body;
}

export const getTracksByName = async (trackName, artistName) => {
    try{
        let params = `track.search?q_track=${trackName}`;
        
        if(artistName){
            params += `&q_artist=${artistName}`;
        }
    
        const { track_list } = await getTracks(params);
        
        return track_list;
    }catch(err){
        return [];
    }

}

export const getTrackLyrics = async (trackId) => {
    try{
        const params = `track.lyrics.get?track_id=${trackId}`;
        const { lyrics } = await getTracks(params);
        const { lyrics_body } = lyrics;

        return lyrics_body;
    }catch(err){
        return '';
    }

}