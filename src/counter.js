import React from 'react'
import { useState } from 'react';


export default function Intro() {

    const [count, setcount] = useState(0);


    function add() {
        setcount(count + 1);

    }

    function subtract() {
        setcount(count - 1);

    }

    return (
        <>


            <h1> count : {count}</h1>

            <div className="counter_buttons">
                <button onClick={add}>add</button>

                <button onClick={subtract}>subtract</button>
            </div>
        </>
    );

} 
