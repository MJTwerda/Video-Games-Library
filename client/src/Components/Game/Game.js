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

                        <h4 className={style.titleGame}>{game.name}</h4>

                    <NavLink to={`/videogame/${game.id}`} className={style.cont_poster}>
                        <img src={game.image} className={style.poster} alt='Not Found'/>
                    </NavLink>

                    <ul className={style.ulGame}>
                        {game.Genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li> 
                        ))}
                    </ul>
                </div>
            )
        })}
            
        </div>
    )
}
