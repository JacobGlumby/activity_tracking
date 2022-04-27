import React, { useState, useEffect } from "react";
import Axios from 'axios';


const Timer = ({ inputText, setInputText, activity, setActivity }) => {

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [time, setTime] = useState("");
    const [isTracking, setTracking] = useState(false);
    const [intervalId, setIntervalId] = useState(0);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const startTimeHandler = (e) => {
        e.preventDefault();
        setStartTime(new Date());
        setTracking(!isTracking);
        console.log(startTime);
        const newIntervalId = setInterval(()=>{
            const diffMs = Date.now() - startTime.getTime();
            console.log(diffMs);
            const diffSec = Math.floor(diffMs/1000);
            const diffMin = Math.floor(diffSec/60);
            const diffHr = Math.floor(diffMin/60);
            setTime(`${diffHr}:${diffMin}:${diffSec}`);
        },1000);
        setIntervalId(newIntervalId);
    }
    const submitActivityHandler = (e) => {
        e.preventDefault();
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
        }

        setInputText("");
        setTracking(!isTracking);

        var end = new Date();
        Axios.post('/activities', { 
            title: inputText, 
            start: startTime.toLocaleTimeString(), 
            end: end.toLocaleTimeString()
        }).then((res) => console.log(res));
        setStartTime("");
        

    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="timer-input" />
            <div className="timer-time">{time}</div>
            {isTracking ?
                <button onClick={submitActivityHandler} className="timer-button" type="submit">Stop</button>
                :
                <button onClick={startTimeHandler} className="timer-button" type="submit">Start</button>
            }
        </form>
    );
}

export default Timer;