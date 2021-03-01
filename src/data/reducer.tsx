import { my_token } from '../client_id';
//const my_token: string = '';

interface State {
    user: null,
    playlists: [],
    playing: boolean,
    item: null,
    token: string
}

export const initialState: State = {
    user:null,
    playlists: [],
    playing: false,
    item: null,
    //To be Removed after project is complete
    token: my_token
}

const reducer = (state: any, action: any) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}

export default reducer;