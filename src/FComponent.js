import React, { useState } from 'react'

const FComponent = () => {
    const [time,setTime]=useState(new Date().toString());
    const [message,setMessage] = useState("Functional Component");

    const showDate =()=>{
        setTime(new Date().toString());
    };
  return (
    <div>
      <div>{time}</div>
      <button onClick={showDate}>Show Date</button>
      <div>{message}</div>
      <button onClick={()=> setMessage("Changed Functional Component")}>Change Message</button>
    </div>
  )
}

export default FComponent
