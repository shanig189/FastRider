import { MAX_NUM_OF_TRACKS } from '../utils/enums';
import { getTracksByName, getTrackLyrics } from './tracksApi';
import compare from './compare';

let originTracks = localStorage.getItem('tracks') ? JSON.parse(localStorage.getItem('tracks')) : [];
let trackToAddAfterDelete = {};

export const addTrack = async (trackName, artistName) => {
    let isShowModal = false;
    let isShowTrackNotFoundMsg = false;
    const tracksList = await getTracksByName(trackName, artistName);
    if(tracksList.length){
        const randomTrack = tracksList[Math.floor(Math.random()*tracksList.length)];
        const { track_id, track_name, artist_name, album_name } = randomTrack.track;
        const track = {
            trackId: track_id,
            trackName: track_name,
            artistName: artist_name,
            albumName: album_name
        }

        if(originTracks.length === MAX_NUM_OF_TRACKS){
            trackToAddAfterDelete = track;
            isShowModal = true;
        }else{
            originTracks.unshift(track);
            localStorage.setItem('tracks', JSON.stringify(originTracks));
        }
    }else{
        isShowTrackNotFoundMsg = true;
    }

    return { updatedTracks: originTracks, isShowModal, isShowTrackNotFoundMsg };
}

export const sortTracks = (sortOption, tracks) => {
    localStorage.setItem('tracksSortOption', sortOption);
    const sortedTracks = tracks.slice();
    
        switch(sortOption){
            case 'Track name': sortedTracks.sort(compare.bind(null, 'trackName')); break;
            case 'Artist name': sortedTracks.sort(compare.bind(null, 'artistName')); break;
            default: break;
        }
    
    return sortedTracks;
}

export const deleteTrack = (sortOption) => {
    originTracks.pop();
    originTracks.unshift(trackToAddAfterDelete);
    localStorage.setItem('tracks', JSON.stringify(originTracks));
    
    let updatedTracks = originTracks;

    if(sortOption !== 'Default'){
        updatedTracks = sortTracks(sortOption, updatedTracks);
    }
    
    return updatedTracks;
}

export const trackLyrics = async (trackId) => {
    const trackLyrics = await getTrackLyrics(trackId);

    return trackLyrics;
}