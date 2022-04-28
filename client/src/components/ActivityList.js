import React, { useEffect, useState } from "react";
import axios from 'axios';
import Activity from "./Activity";


const ActivityList = ({ activities, setActivities}) => {

    useEffect(() => {
        axios.get('/activities')
            .then(res => {
                setActivities(res.data.activities);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])
    
    return (
        <div className="activity-container">
            <ul className="activity-list">
                {
                    activities.map((activity) =>
                        <Activity key={activity.id} id={activity.id} title={activity.title} start={activity.start} end={activity.end} time={activity.time} />
                    )
                }
            </ul>
        </div>
    );
};

export default ActivityList;