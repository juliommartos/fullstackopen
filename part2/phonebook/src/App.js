import React, { useState } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from "./components/Filter";

const App = () => {
  
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState(0);
  const [show, setShow] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleShowPerson = (event) => {
    setShow(event.target.value);
  };

  const addContact = (event) => {
    event.preventDefault();

    const contact = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };

    const existName = persons.find((person) => person.name === newName);

    if (existName !== undefined) {
      return alert(`${newName} is already added to phonebook`);
    }

    return setPersons(persons.concat(contact));
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onchange={[handleShowPerson]}/>
      

      <h3>add a new</h3>

      <PersonForm onchange={[addContact, handleNameChange, handlePhoneChange]} />

      <h3>Numbers</h3>

      <Persons persons={persons} onchange={show}/>

    </div>
  );
};

export default App;
