import React from 'react';
import { Link } from 'react-router-dom';
import style from './menu.css'
export default function Menu() {
    const invoCard = new URL('./images/Invoker-img.jpg', import.meta.url)
    return(
        <div className={style['container']}>
            <div className={style['top']}>
                <p className={style['title']}>Choose Game Mode</p>
                <button className={style['profile-btn']}>Career Profile</button>
            </div>
            <Link to='/'>Home</Link>
            <hr></hr>
            <div className='categories'>
                <span className='nav-opt'></span>
                <span className='nav-opt'></span>
                <span className='nav-opt'></span>
                <span className='nav-opt'></span>
                <span className='nav-opt'></span>
            </div>
            <div className={style["card-container"]}>
                <div className={style['card']}>
                    <Link to='/Quiz'>
                        <img className='game-img' src={invoCard} alt="most popular hero"></img>
                        <div className='card-lower'>
                            <p>Most Popular Hero</p>
                            <p>Guess which hero has the highest pick rate</p>
                        </div>
                    </Link>
                </div>
            </div>


        </div>
    )
}