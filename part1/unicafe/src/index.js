import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({action, text}) => (
  <button onClick={action}> {text} </button>
);

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({accountants}) => {
  const [good, neutral, bad] = accountants;
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good / total * 100;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <table>
        <tbody>
        <Statistic text='good' value={good}/>
        <Statistic text='neutral' value={neutral}/>
        <Statistic text='bad' value={bad}/>
        <Statistic text='all' value={total}/>
        <Statistic text='average' value={isNaN(average) ? 0 : average}/>
        <Statistic text='positive' value={isNaN(positive) ? 0 : positive}/>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = 'give feedback';
  const subTitle = 'statistics';

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>{title}</h1>
      <Button action={handleClickGood} text={'good'}/>
      <Button action={handleClickNeutral} text={'neutral'}/>
      <Button action={handleClickBad} text={'bad'}/>
      <h2>{subTitle}</h2>
      <Statistics accountants={[good, neutral, bad]}/>
    </div>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
