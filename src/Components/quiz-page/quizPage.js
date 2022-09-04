import React, {useEffect} from 'react';
import { functionCall } from '../../apiCall';
import HeroCall from '../apicall/apiCall';
import style from './quiz-page.css'

export default function Quiz() {
    console.log(HeroCall())
    return(
        <div className="container">
            <div className="score">
                <p className="highscore">0</p>
                <p className="curr-score">0</p>
            </div>
            <div className="options">
                <div className="option1">
                    <img></img>
                    <p>Invoker</p>
                    <p>was picked</p>
                    <p>1</p>
                    <p>time</p>
                </div>
                <div className="option2">
                    <img></img>
                    <p>Marci</p>
                    <div className="btn-group">
                        <button className="More-btn">More</button>
                        <button className="less-btn">Less</button>
                    </div>
                    <p>play time</p>
                </div>
            </div>
        </div>
    )
}