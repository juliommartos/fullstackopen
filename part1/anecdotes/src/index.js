import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Title = ({text}) => <h1>{text}</h1>;

const Button = ({action, text}) => <button onClick={action}>{text}</button>;

const MostVotes = ({points}) => {
  const maxPoints = Math.max(...points);
  const position = points.indexOf(maxPoints);

  if (maxPoints === 0) {
    return <></>;
  }
  return (
    <p>{anecdotes[position]}</p>
  );
};

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0));

  const handleClickSelected = () => {
    const aleatory = Math.round(Math.random() * (anecdotes.length - 1));
    return setSelected(aleatory);
  };

  const handleClickVoted = () => {
    const copy = [...voted]
    copy[selected] += 1
    return setVoted(copy)
  };

  return (
    <div>
      <div>
        <Title text='Anecdote of the day'/>
        <p>{anecdotes[selected]}</p>
        <p>has voted {voted[selected]}</p>
      </div>
      <div>
        <Title text='Anecdote with most votes'/>
        <MostVotes points={voted}/>
      </div>
      <Button action={handleClickSelected} text='next anecdote'/>
      <Button action={handleClickVoted} text='vote'/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>,
  document.getElementById('root')
);