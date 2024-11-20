"use client"
import React from 'react';
import { useSelector } from 'react-redux';

const Comp1 = () => {
    const count = useSelector((state) => state.counter.value); 
    console.log(count);
    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    );
};

export default Comp1;