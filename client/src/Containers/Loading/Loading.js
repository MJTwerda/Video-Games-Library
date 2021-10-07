import React from "react";
import { useSelector } from "react-redux";

import style from './Loading.module.css';

export default function Loading() {
    const games = useSelector(state => state.processGames);
    const allGamesOriginal = useSelector(state => state.searchAllGames);
    
    if (!allGamesOriginal.length) {
        return(
        <div>
            <h3 className={style.title}>
            Loading Games.Please wait...
            </h3>
        </div>
    )} 
    if (!games.length) {
        return(
            <div>
                <h3 className={style.title}>
                Games not Found. Try with another Genre
                </h3>
            </div>
        )}
}