import React, {useEffect} from 'react';
import HeroCall from '../apicall/apiCall';
import style from './quiz-page.css'





export default function Quiz() {
    const apiKey = '3679AC90F8E7123E9E8DB10AA800EB90';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = await fetch(`http://cdn.dota2.com/apps/dota2/images/heroes/invoker_full.png/?key=${apiKey}`)
                const res = await req.json();
                console.log(res)
            } 
            catch {
                console.error()
            }
        }
        fetchData()
    }, [])
    
    
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