import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ name }) => <h1>{name}</h1>;

const Part = ({ course, exercises }) => <p>{course} {exercises}</p>;

const Content = ({ parts }) => (
  <div>
    <Part course={parts[0].name} exercises={parts[0].exercises} />
    <Part course={parts[1].name} exercises={parts[1].exercises} />
    <Part course={parts[2].name} exercises={parts[2].exercises} />
  </div>
);

const Total = ({ exercises }) => (
  <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total exercises={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);