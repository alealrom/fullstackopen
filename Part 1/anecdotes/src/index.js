import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const Votes = ({ votes }) => {
  return(
    <p>Has {votes} votes</p>
  )
}

const MostVoted = ({ votes, anecdotes, selected }) => {
  let mostVotes = Math.max(...votes);
  let index = votes.indexOf(mostVotes);
  return (
    <div>
      <h2>Anectote with most votes</h2>
      <p>{anecdotes[index]}</p>
      <Votes votes={votes[selected]}/>
    </div>
  )
}

const App = (props) => {
  const [ selected, setSelected ] = useState(0);
  const [ votes, setVotes ] = useState(new Array(anecdotes.length).fill(0));

  const randomAnecdotes = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  }

  const voteByAnecdote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <Votes votes={votes[selected]}/>
      <Button onClick={voteByAnecdote} text='Vote'/>
      <Button onClick={randomAnecdotes} text='Next Anecdote'/>
      <MostVoted votes={votes} anecdotes={anecdotes} selected={selected}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />, document.getElementById('root')
)