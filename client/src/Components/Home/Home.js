import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllGames, getGenres } from '../../Actions/actions.js';

import style from './Home.module.css';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    let initial = async function() {
      await dispatch(getAllGames());
      await dispatch(getGenres());
      }
      initial();
  }, []);

    return (
      <div className={style.fondo}>
        <h1 className={style.title}>Henry Videogames</h1>
        <Link to='/videogames'>
            <button className={style.btn}>HOME</button>
        </Link>
      </div>
    )
}

export default Home;
