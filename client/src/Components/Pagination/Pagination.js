import React from 'react';
import style from './Pagination.module.css';

function Pagination({gamesPerPage, totalGames, paginate, prev, next, numPag}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={style.totalPag}>
            <ul>
                {pageNumbers.map(number => {
                    return (
                    <div key={number} className={style.btnPag}>
                        <button key={number} onClick={() => paginate(number)} className={style.btnInd}>
                            {number}
                        </button>
                    </div>
                    
                    )}
                )}
                <div className={style.direction}>
                    <button onClick={() => prev()} disabled={numPag === 1} className={style.btnDirec}>
                    Prev</button>
                    <button onClick={() => next()} disabled={numPag === pageNumbers.length} className={style.btnDirec}>
                    Next</button>
                </div>
            </ul>
        </nav>

    )
}

export default Pagination
