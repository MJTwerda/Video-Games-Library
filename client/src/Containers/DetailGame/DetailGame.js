import React, { useEffect } from 'react';
import { getDetailGame } from '../../Actions/actions.js';
import {useSelector, useDispatch} from 'react-redux';

import style from './DetailGame.module.css';

export default function DetailGame(props) {

    const detailGame = useSelector(state => state.detailGame);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailGame(props.idGame));
    }, []);

    if (!detailGame) {
        return <h3>There is no game with the searched id. Please try with another id</h3>
    }
    
    return ( 
        <>

        <div className={style.cont_img}>
            <img src={detailGame.image} className={style.img} alt='Not Found'/>
        </div>
       <div className={style.container}>

        <h4 className={style.title}>{detailGame.name}</h4>
        
        <div className={style.cont_items}>
        {detailGame.platforms?.map(plat => {
            if (typeof plat === 'string') {
                return (<p className={style.item}>{plat}</p>)
            } else {
          return (
           <p className={style.item}>{plat.name} </p>
          )}
          })}
        </div>

        <h4 className={style.title}>Release: {detailGame.released}</h4>

        <p className={style.description}>{detailGame.description}</p>

        <h5 className={style.description}>Rating: {detailGame.rating}</h5>

        <div className={style.cont_items}>
            {detailGame.Genres?.map(gen => {
                return (
                    <p className={style.item}>{gen.name}</p>
                )}
            )}
            
        </div>

       </div>
       </>
    )
}
    
