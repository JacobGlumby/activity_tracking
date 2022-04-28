import React, { useState, useEffect } from "react";
import { pad, calculateTimeDifference } from "../utils"
import axios from 'axios';


const Timer = ({ inputText, setInputText, activities, setActivities }) => {

    const [startTime, setStartTime] = useState("");    // Keeps the start time. 
    const [time, setTime] = useState("00:00:00");      // Used for timer. Not saved to the db, as it is not reliable enough. 
    const [isTracking, setTracking] = useState(false); // Used for determining what button to show. 
    const [intervalId, setIntervalId] = useState(0);   // Interval id, used to stop the interval function 

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const startTimeHandler = (e) => {
        e.preventDefault();
        const start = new Date();
        setStartTime(start);        
        setTracking(!isTracking);   // Flips the tracking boolean, in order to show stop button. 
        const newIntervalId = setInterval(() => {
            setTime(calculateTimeDifference(Date.now(), start.getTime())) 
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

        const activityObject = {
            title: inputText,
            start: startTime.toLocaleTimeString('en-GB'), // en-GB to get colons between hours minutes and seconds
            end: end.toLocaleTimeString('en-GB'),
            time: calculateTimeDifference(end.getTime(), startTime.getTime()) //Ensures correct second on end time.
        }
        axios.post('/activities', activityObject)
            .then((res) => {
                console.log(res);

                activityObject.id = res.data.id;
                setActivities([
                   activityObject, ...activities]
                );
            }).catch((err) => {
                console.log(err.message)
            });

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
                <button className="timer-button" onClick={startTimeHandler} type="submit">Start</button>
            }
        </form>
    );
}

export default Timer;