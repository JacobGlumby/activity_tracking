import React, {useState} from 'react';
import './App.css';
import Timer from './components/Timer'
import ActivityList from './components/ActivityList';

function App() {
  const [inputText, setInputText] = useState("");
  const [activities, setActivities] = useState([]);
  return (
    <div className="App">
      
      <header><h1>Activity Tracker</h1></header>
      <Timer  activities={activities} setActivities={setActivities} inputText={inputText} setInputText={setInputText}/>
      <ActivityList className="activityList" activities={activities} setActivities={setActivities}/>
    </div>
  );
}

export default App;
