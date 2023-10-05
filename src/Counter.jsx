import React from 'react'
import { useState } from 'react';

function Counter() {
  const[value,setValue]=useState(0);
  const decreaseValue=()=>{
    setValue(prev=>prev-1)

  }
  const increaseValue=()=>{
    setValue(prev=>prev+1)

  }

  return (
    <div>
      <button onClick={decreaseValue}>
        <span>-</span>
      </button>
      <button>
        <span>{value}</span>
      </button>
      <button onClick={increaseValue}>
        <span>+</span>
      </button>
    </div>
  )
}

export default Counter 