import React from 'react'
import { useState } from 'react';

export default 
function Service() {
    const[check, setCheck]=useState(true);
const toggleValue=()=>{
    console.log("click");
    setCheck(prev=>!prev)
}

   
  return (
    <>
    <div>
        {check ?"true":"false"}
    </div>
    <button onClick={toggleValue}>
        Toggle
        </button>
    </>
  )
}
