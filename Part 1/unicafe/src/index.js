import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statistics = ({good, neutral, bad, allFeedbacks, average, positive}) => {
  if (allFeedbacks === 0 || isNaN(average) || isNaN(positive)){
    return(
      <main>
        <h2>Statistics</h2>
        <p>No feedback given.</p>
      </main>
    )
  }

  return (
    <main>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {allFeedbacks}</p>
      <p>Average {average}</p>
      <p>Positive {positive + "%"}</p>
    </main>
  );
};

const App = () =>{
const [ good, setGood ] = useState(0);
const [ neutral, setNeutral ] = useState(0);
const [ bad, setBad ] = useState(0);
const allFeedbacks = good + neutral + bad;
const average = (((good * 1) - bad) / allFeedbacks);
const positive = (good * 100 / allFeedbacks);

const handleGoodClick = () => {
  setGood(good + 1);
}

const handleNeutralClick = () => {
  setNeutral(neutral + 1);
}

const handleBadClick = () => {
  setBad(bad + 1);
}

return (
  <main>
    <h2>Give Feedback</h2>
    <button onClick={handleGoodClick}>Good</button>
    <button onClick={handleNeutralClick}>Neutral</button>
    <button onClick={handleBadClick}>Bad</button>
    <Statistics good={good} neutral={neutral} bad={bad} allFeedbacks={allFeedbacks} average={average} positive={positive}/>
  </main>
)
}

ReactDOM.render(<App/>, document.getElementById('root'))
