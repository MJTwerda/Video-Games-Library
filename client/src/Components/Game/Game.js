import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Game.module.css';

export default function Game({games}) {

    return (
        <div className={style.container}>
        {
            games.map(game => {
                return (
                <div key={game.id} className={style.indGame}>

                        <h3 className={style.titleGame}>{game.name}</h3>

                    <NavLink to={`/videogame/${game.id}`} className={style.cont_poster}>
                        <img src={game.image} className={style.poster} alt='Search'/>
                    </NavLink>

                    <ul className={style.ulGame}>
                        {game.Genres.map(genre => (
                            <li key={genre.id} className={style.indGame}>{genre.name}</li> 
                        ))}
                    </ul>
                </div>
            )
        })}
            
        </div>
    )
}
