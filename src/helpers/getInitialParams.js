import { sortTracks } from './tracksActions';

export default () => {
    const localStorageTracks = localStorage.getItem('tracks');
    let tracks = [];
    let sortOption = 'Default';

    if(localStorageTracks){
        tracks = JSON.parse(localStorage.getItem('tracks'));
        const localStorageSortOption = localStorage.getItem('tracksSortOption');
        if(localStorageSortOption && localStorageSortOption !== 'Default'){
            sortOption = localStorageSortOption;
            tracks = sortTracks(localStorageSortOption, tracks);
        }
    }

    return { tracks, sortOption };
}