import React, { useState, useEffect } from "react";
import { pad, timeDifference } from "../utils"
import Axios from 'axios';


const Timer = ({ inputText, setInputText, activity, setActivity }) => {

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [time, setTime] = useState("00:00:00");
    const [isTracking, setTracking] = useState(false);
    const [intervalId, setIntervalId] = useState(0);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const startTimeHandler = (e) => {
        e.preventDefault();
        const start = new Date();
        setStartTime(start);
        setTracking(!isTracking);
        const newIntervalId = setInterval(() => {
            setTime(timeDifference(Date.now(),start.getTime())) // merely serves as a display time on timer. 
        }, 1000);
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
            start: startTime.toLocaleTimeString('en-GB'),
            end: end.toLocaleTimeString('en-GB'),
            
            time: timeDifference(end.getTime(),startTime.getTime()) //Ensures correct second on end time.
        }).then((res) => console.log(res));
        setStartTime("");
        setTime("00:00:00")
    }

    return (
        <form>
            <input className="timer-input" value={inputText} onChange={inputTextHandler} type="text" />
            <div className="timer-time">{time}</div>
            {isTracking ?
                <button className="timer-button" onClick={submitActivityHandler} type="submit">Stop</button>
                :
                <button className="timer-button" onClick={startTimeHandler}  type="submit">Start</button>
            }
        </form>
    );
}

export default Timer;