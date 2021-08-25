import { GET_VIDEOGAMES_BY_NAME, DETAIL_GAME , GET_GENRES, ADD_NEW_GAME, GET_ALL_GAMES, RESET, ORDER_GAMES, FILTER_BY_GENRES, MY_GAMES, GET_ALL_PLATFORMS, API_GAMES} from '../Actions/actions.js';

const initialState = {
    searchAllGames: [],
    processGames: [],
    detailGame: {},
    genresGames: [],
    searchGamesByName: false,
    myGamesOnly: false,
    platformsGames: []
};

export function rootReducer(state = initialState, action) {

    if (action.type === GET_ALL_GAMES) {
        return {
            ...state,
            searchGamesByName: false,
            myGamesOnly: false,
            searchAllGames: action.payload,
            processGames: action.payload
        }
    }
    if (action.type === GET_VIDEOGAMES_BY_NAME) {
        return {
            ...state,
            searchGamesByName: true,
            processGames: action.payload
        }
    }
    if (action.type === MY_GAMES) {
        return {
            ...state,
            myGamesOnly: true,
            processGames: [...state.processGames].filter(g => g.id.length > 8)
        }
    }
    if (action.type === API_GAMES) {
        console.log('Chequeando: STATE PROCESS GAMES', state.processGames)
        return {
            ...state,
            myGamesOnly: false,
            processGames: [...state.processGames].filter(g => typeof (g.id) === 'number')
        }
    }
    if (action.type === GET_GENRES) {
        return {
            ...state,
            genresGames: action.payload
        }
    }
    if (action.type === DETAIL_GAME) {
        return {
            ...state,
            detailGame: action.payload
        }
    }
    if (action.type === ADD_NEW_GAME) {
        return {
            ...state,
            searchAllGames: [...state.searchAllGames].concat(action.payload),
            processGames: [...state.processGames].concat(action.payload),
        }
    }
    if (action.type === RESET) {
        return {
            ...state,
            detailGame: {},
        }
    }
    if (action.type === GET_ALL_PLATFORMS) {
        return {
            ...state,
            platformsGames: action.payload
        }
    }
    if (action.type === ORDER_GAMES) {
        return {
            ...state,
            processGames: action.payload
        }
    }
    if (action.type === FILTER_BY_GENRES) {
        return {
            ...state,
            processGames: action.payload
        }
    }

    return state;
}

export default rootReducer;
