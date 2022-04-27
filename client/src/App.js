import React, {useState} from 'react';
import './App.css';
import Timer from './components/Timer'
import ActivityList from './components/ActivityList';

function App() {
  const [inputText, setInputText] = useState("");
  const [activity, setActivity] = useState([]);
  return (
    <div className="App">
      
      <header><h1>Activity Tracker</h1></header>
      <Timer className="timer" activity={activity} setActivity={setActivity} inputText={inputText} setInputText={setInputText}/>
      <ActivityList className="activityList"/>
    </div>
  );
}

export default App;
