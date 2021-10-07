import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, getAllGames, getGenres } from '../../Actions/actions.js';

import Game from '../../Components/Game/Game.js';
import Pagination from '../../Components/Pagination/Pagination.js';
import ActGames from '../ActGames/ActGames.js';
import SearchGames from '../SearchGames/SearchGames.js';
import Loading from '../Loading/Loading.js';

import style from './Videogames.module.css';

export default function Videogames() {

    let games = useSelector(state => state.processGames);
    const allGamesOriginal = useSelector(state => state.searchAllGames);
    
    //Para el paginado
    const [currentPage, setcurrentPage] = useState(1);
    const [gamesPerPage] = useState(9);

    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getAllGames());
        dispatch(getGenres());
        dispatch(reset());
    },[dispatch]);
    
    const lastIndex = currentPage * gamesPerPage; //pag en la que estoy(2) * 9
    const firstIndex = lastIndex - gamesPerPage; //18 - 9
    const currentGames = games.slice(firstIndex, lastIndex) 

    //Funciones para paginar <Pagination />
    function paginate (pageNumber) {
        setcurrentPage(pageNumber);
    }
    const paginateButtonPrev = ()  => {
        setcurrentPage(currentPage - 1)
    }
    const paginateButtonNext  = ()  => {
        setcurrentPage(currentPage + 1)
    }

    /* if (!allGamesOriginal.length || !games.length) {
        return <Loading />
    } */
    /* if (!allGamesOriginal.length) {
        return <h3>Loading Games.Please wait...</h3>
    } 
    if (!games.length) {
        return <h3>Games not Found. Try with another Genre</h3>
    } */

    return (
         <div className={!allGamesOriginal.length || !games.length ? 
                style.contNotGame :style.container}>
            <div className={style.inputFilt}>

                <div className={style.search}>
                    <SearchGames />
                </div>
                
                <div className={style.ordFilt}>
                    <ActGames />
                </div>
            </div>

            <div className={style.game}>
            {!allGamesOriginal.length || !games.length ? 
            <Loading /> : <Game games={currentGames} /> 
             }
            </div>

            <div className={style.paginate}>
                <Pagination 
                    gamesPerPage={gamesPerPage} //
                    totalGames={games.length} //100
                    paginate={paginate}
                    prev={paginateButtonPrev}
                    next={paginateButtonNext}
                    numPag={currentPage}
                />
            </div>           
        </div>
     )
    }
