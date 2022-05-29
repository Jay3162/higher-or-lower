import React from 'react';
import { useEffect, useState } from 'react';

export default function HeroCall () {
    const [hero, setHero] = useState('')
    useEffect(() => {
        const fetchHero = async() => {
            let req = await fetch('http://cdn.dota2.com/apps/dota2/images/heroes/invoker_sb.png');
            let response = await req.json();
            console.log(response)
            setHero(response)
        }
        fetchHero()
    }, [hero])
    return (
        <div>

        </div>
    )
}