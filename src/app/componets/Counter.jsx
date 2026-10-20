"use client";

import React, { useState } from 'react';

const Counter = () => {
    const[count,setCount] =useState(0);

    console.log("counter is rendaring")
    const handleIncrease = () =>{
        console.log('set the button click')
        setCount(count + 1);
    }
    return (
        <div>
            <h2 className='text-5xl font-bold'>Counter:{count}</h2>
            
            <button onClick= {handleIncrease} className='bg-amber-500 text-3xl text-amber-50'>click mee!
                
            </button>
        </div>
    );
};

export default Counter;