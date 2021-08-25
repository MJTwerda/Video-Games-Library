import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OrderTwo, filterTwo } from '../../Actions/actions.js';

import style from './ActGames.module.css';

export default function ActGames() {
    const [orders, setOrders] = useState('');
    const [filters, setFilters] = useState('');

    const allGenres = useSelector(state => state.genresGames);

    const dispatch = useDispatch();
    
    function handdleInputOrder(e) {
        let value = e.target.value;

        if (value === 'NullSelected') {
            setOrders('Not Order')
        }
        if (value === 'AlfA-Z' || value === 'AlfZ-A' || value === 'ascRating' || value === 'descRating') {
            setOrders(value)
        }
        console.log('valor de casilla filtrado/ordenado: ', value);
    }

    function handdleInputFilter(e) {
        let value = e.target.value;
        let name = e.target.name;

        if (name === 'FilterGenre' && value === 'NullSelGenre') {
            setFilters('NullSelGenre')
        }
        if(name === 'FilterGenre') {
            setFilters(value)
        }
        console.log('value de option genre: ', value);
        console.log('name de option genre: ', name)
    }

    function handdleOrderSubmit(e) {
        e.preventDefault();
        dispatch(OrderTwo(orders));
        setOrders('');
        console.log('Ordered has be okay');
    } 

    function handdleFilterSubmit(e) {
        e.preventDefault();
        if (filters.length) {
            dispatch(filterTwo(filters));
            setFilters('')
        }
        else return ('No hay games con ese Genre')
        console.log('Filtered has be okay');
    }
     
    return(
        <div className={style.gral}>

        <form onSubmit={handdleOrderSubmit} className={style.or}>
            <label className={style.label}>See Games </label>
                <select onChange={handdleInputOrder} className={style.selectOr}>
                <option selected value='NullSelected' className={style.options}>-Filter/Order-</option>

                <optgroup label='by Name' >
                    <option value='AlfA-Z'>ASC</option>
                    <option value='AlfZ-A'>DESC</option>
                </optgroup>

                <optgroup label='by Rating'>
                    <option value='ascRating'>Min-Max</option>
                    <option value='descRating'>Max-Min</option>
                </optgroup>
                </select>

            <input  type='submit' value='Apply' 
                    onSubmit={handdleOrderSubmit} className={style.btns}/>    
        </form>

        <form onSubmit={handdleFilterSubmit} className={style.fil}>
            <label className={style.label}>Filter by Genres </label>
                <select name='FilterGenre' onChange={handdleInputFilter} className={style.selectFilt}>

                    <option selected value='NullSelGenre' className={style.options}>-Select Genre-</option>
                    {allGenres.map(genre =>
                        <option key={genre.name} value={genre.name}>{genre.name}</option>)}

                </select>
            <input  type='submit' value='Apply' 
                    onSubmit={handdleFilterSubmit} className={style.btns}/>  
        </form>

        </div>
    )
}
