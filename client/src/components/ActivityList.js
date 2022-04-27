import React, { useEffect, useState } from "react";
import axios from 'axios';
import Activity from "./Activity";


const ActivityList = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('/activities')
            .then(res => {
                setActivities(res.data.activities);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(activities)
    return (
        <div className="activity-container">
            <ul className="activity-list">
                {
                    activities.map((activity) =>
                        <Activity key={activity.id} title={activity.title} start={activity.start} end={activity.end} time={activity.time} />
                    )
                }
            </ul>
        </div>
    );
};

export default ActivityList;