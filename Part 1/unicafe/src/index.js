import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
   );
};

const Statistics = ({ good, neutral, bad }) => {
  const allFeedbacks = good + neutral + bad;
  const average = ((good - bad) / allFeedbacks);
  const positive = (good * 100 / allFeedbacks);

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
      <Statistic text='Good' value={good}/>
      <Statistic text='Neutral' value={neutral}/>
      <Statistic text='Bad' value={bad}/>
      <Statistic text='All' value={allFeedbacks}/>
      <Statistic text='Average' value={average}/>
      <Statistic text='Positive' value={positive}/>
    </main>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <main>
      <p>{text} {value}</p>
    </main>
  )
}

const App = () =>{
const [ good, setGood ] = useState(0);
const [ neutral, setNeutral ] = useState(0);
const [ bad, setBad ] = useState(0);


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
    <Button handleClick={handleGoodClick} text='Good'/>
    <Button handleClick={handleNeutralClick} text='Neutral'/>
    <Button handleClick={handleBadClick} text='Bad'/>
    <Statistics good={good} neutral={neutral} bad={bad}/>
  </main>
)
}

ReactDOM.render(<App/>, document.getElementById('root'))
