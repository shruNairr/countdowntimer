import React,{ useState, useEffect} from "react";
/*//all main logic is present in  this file and imported to app.js**/
const Timer = ( { duration }) => {
    const [time, setTime] =  useState(duration);
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        },1000)
    },[time]);
    const getFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));
        let days = parseInt(Math.floor(total_hours / 24));
        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);
    return `${days}   ${hours}   ${minutes}   ${seconds}`;
     };
    return <div>{getFormattedTime(time)}</div>;
    /*//to decerease the time by one ssecond in countdown 1000 milisecs =1sec
    //useeffect to set logic for the timer component
    //set dependency for use effect everytime time changes useeffect will run 
//  rendering the time value
   
   // return <div>timer</div>
    // timer text is set as heading */
};

export default Timer;
/*//implementing timercountdown*/
