import React from "react";

const Activity = ({ title, start, end, time }) => {
    return (
        <li >
                <div className="top-row">
                    <div className="activity-title">
                        {title}
                    </div>
                    <div className="activity-time">
                        {time}
                    </div>
                </div>
                <div className="bottom-row">
                    <div className="activity-start">
                        Start: {start}
                    </div>
                    <div className="activity-end">
                        End: {end}
                    </div>
                </div>
        </li>
    );
};

export default Activity;