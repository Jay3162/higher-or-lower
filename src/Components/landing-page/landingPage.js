import React from 'react';
import style from './landingPage.module.css'
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return(
        <div className={style["wrapper"]}>
            <header className={style['header']}>
                <h3>THE</h3>
                <h1>HIGHER</h1>
                <h1>LOWER</h1>
                <h3>GAME</h3>
            </header>
            <div>
                <button className={style['start-btn']}>
                    <Link className={style["link-btn"]}to='/menu'>Start</Link>
                </button>
            </div>
        </div>
    )
}