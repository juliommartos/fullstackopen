import React from 'react';

const Persons = ({ persons, onchange }) => {
  
  const result = persons.filter(person => person.name === onchange)
  
  return (
    result.map((person) => (
      <p key={person.id}>
        {person.name}
        {' '}
        {person.number}
      </p>
    ))

  );
};

export default Persons;
