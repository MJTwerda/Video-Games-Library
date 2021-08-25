import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getVideogamesByName, getAllGames, getGenres, MyGames, apiGames } from '../../Actions/actions.js';

import style from './SearchGames.module.css';

export default function SearchGames() {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function onChange(e) {
        setName(e.target.value);
    }

    function handdleSubmit(e) {
        e.preventDefault();
            dispatch(getVideogamesByName(name));
            dispatch(getGenres());
        setName('') 
    }
    function handdleSubmitAllGames(e) {
        e.preventDefault();
            dispatch(getAllGames());
            dispatch(getGenres());
            setName('');
    }

    function handdleSubmitMyGames(e) {
        e.preventDefault();
        dispatch(MyGames());
    }

    function handdleSubmitApiGames(e) {
    e.preventDefault();
    console.log('E TARGET VALUE APIGAMES: ', e.target.value);
    dispatch(apiGames());
    }

    return(
        <div className={style.gral}>
            <form onSubmit={handdleSubmit} className={style.Form_text_submit}>

                <input  type='text' value={name} placeholder='Search videogames' 
                        onChange={onChange} className={style.inputText}/>

                <input  type='submit' name='ByName'  className={style.btnSearch}
                        value='By Name' onSubmit={handdleSubmit} />
            </form>

            <form onSubmit={handdleSubmitAllGames} className={style.Form_btn_Allgames}>
            
                <input  type='submit' name='All' className={style.btnSearch}
                        value='All Games' onSubmit={handdleSubmitAllGames} />
            </form>

            <form onSubmit={handdleSubmitMyGames} className={style.Form_btn_Allgames}>
                <input  type='submit'  name='MyGames' className={style.btnSearch}
                        value='My Games' onSubmit={handdleSubmitMyGames}/>
            </form>
        
            <form onSubmit={handdleSubmitApiGames} className={style.Form_btn_Allgames}>
                <input  type='submit'  name='ApiGames' className={style.btnSearch}
                        value='Api Games' onSubmit={handdleSubmitApiGames}/>
            </form>

        </div>
    )
}
