import React from 'react';

const Persons = props => {
  const {persons} = props;
  
  return (
    persons.map((person) => (
      <p key={person.id}>
        {person.name}
        {' '}
        {person.number}
      </p>
    ))
  );
};

export default Persons;
