import { createGlobalState } from 'react-hooks-global-state';
import getInitialParams from '../helpers/getInitialParams';

const  { tracks, sortOption } = getInitialParams();

const initialState = {
     tracks,
     sortOption,
     isShowModal: false,
     chosenTrack: null,
     isShowTrackNotFoundMsg: false
    };
const { GlobalStateProvider, useGlobalState } = createGlobalState(initialState);

export {GlobalStateProvider, useGlobalState};