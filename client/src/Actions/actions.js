import axios from 'axios';

export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES';
export const DETAIL_GAME = 'DETAIL_GAME';
export const GET_GENRES = 'GET_GENRES';
export const GET_IMAGE_GAME = 'GET_IMAGE_GAME';
export const ADD_NEW_GAME = 'ADD_NEW_GAME';
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const RESET = 'RESET';
export const FILTER_AND_ORDER = 'FILTER_AND_ORDER';
export const MY_GAMES = 'MY_GAMES';
export const GET_ALL_PLATFORMS = 'GET_ALL_PLATFORMS';
export const API_GAMES = 'API_GAMES';


 export function getVideogamesByName(title) {
    return function(dispatch) {
        return axios.get('http://localhost:3001/videogames?name=' + title)
        .then(res => {
            dispatch({type: GET_VIDEOGAMES_BY_NAME, payload: res.data})
        })
        .catch(err => {return err})
    }
}  
export function getAllGames() {
    return function(dispatch) {
        return axios.get('http://localhost:3001/videogames/')
        .then(res => {
            dispatch({type: GET_ALL_GAMES, payload: res.data})
        })
        .catch(err => {return err})
    }
}  

export function getGenres() {
    return function(dispatch) {
        return axios('http://localhost:3001/genres')
        .then(res => {
            dispatch({type: GET_GENRES, payload: res.data})
        })
        .catch(err => {return err})
    }
}

export function getDetailGame(id) {
    return function(dispatch) {
        return axios.get('http://localhost:3001/videogame/' + id)
        .then(res => {
            dispatch({type: DETAIL_GAME, payload: res.data})
        })
        .catch(err => {return err})
    }
} 

export function addNewGame(newGame) {
    return function(dispatch) {
        return axios.post('http://localhost:3001/videogame/', newGame)
        .then(res => {
            dispatch({type: ADD_NEW_GAME, payload: res.data})
        })
        .catch(err => {return err})
    }
}

export function reset() {
    return function (dispatch) {
        dispatch({
          type: RESET
        });
      };
}

export function getPlatforms() {
    return function(dispatch) {
        return axios.get('http://localhost:3001/platforms')
        .then(res => {
            dispatch({
                type: GET_ALL_PLATFORMS,
                payload: res.data
            })
        })
        .catch(err => {return err})
    }
}

export function MyGames() {
    return function (dispatch) {
            dispatch({
                type: MY_GAMES
            })  
    }
}

export function apiGames() {
    console.log('Actions APIGAMES....')
    return function(dispatch) {
        dispatch({
            type: API_GAMES
        })
    }
}

export const ORDER_GAMES = 'ORDER_GAMES';
export const FILTER_BY_GENRES = 'FILTER_BY_GENRES';

export function OrderTwo (order) {
    return function (dispatch, getState) {
        
        let originGames = getState().searchAllGames;
        let processForOrder = getState().processGames;
        let objectToProcess = [...processForOrder];

        if (order === 'Not Order') {
            dispatch({
                type: ORDER_GAMES,
                payload: [...originGames]
            })
        }
        if (order === 'AlfA-Z') {
            objectToProcess.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else return -1
            }) 
        }
        if (order === 'AlfZ-A') {
            objectToProcess.sort((a, b) => {
                if (a.name < b.name) {
                    return 1
                } else return -1
            }) 
        }
        if (order === 'ascRating') {
            objectToProcess.sort((a, b) => {return a.rating - b.rating})
        }
        if (order === 'descRating') {
            objectToProcess.sort((a, b) => {return b.rating - a.rating})
        }
        
        dispatch({
            type: ORDER_GAMES,
            payload: objectToProcess
        })
    }
}

export function filterTwo(genre) {
    return function(dispatch, getState) {
        let flagName = getState().searchGamesByName;
        let originGames = getState().searchAllGames;
        let processForOrder = getState().processGames;

        let processByFilter = [];

        if (genre === 'NullSelGenre') {
            dispatch({
                type: ORDER_GAMES,
                payload: [...originGames]
            })
        }
       
        else {
            if (!flagName) {
                for (let i = 0; i < originGames.length; i++) {
                    for (let x = 0; x < originGames[i].Genres.length; x++) {
                        if (originGames[i].Genres[x].name === genre) {
                            processByFilter.push(originGames[i])
                        } 
                    }
                }
            }
            else {
                for (let i = 0; i < processForOrder.length; i++) {
                    for (let x = 0; x < processForOrder[i].Genres.length; x++) {
                        if (processForOrder[i].Genres[x].name === genre) {
                            processByFilter.push(processForOrder[i])
                        } 
                    }
                }
            }
        }
        dispatch({
            type: FILTER_BY_GENRES,
            payload: processByFilter
        })
    }
}












