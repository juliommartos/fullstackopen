import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from "./components/Filter";
import axios from 'axios';

const App = () => {
  
  // Usestate, UseEffect
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState(0);
  const [show, setShow] = useState('');

  const hook = () => {
    axios
    .get('http://127.0.0.1:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  };

  useEffect(hook, []);

  // Handle
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleShowPerson = (event) => {
    console.log(event.target.value);
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
      <Filter onchange={handleShowPerson} showp={[persons, show]}/>
      <h3>add a new</h3>
      <PersonForm onchange={[addContact, handleNameChange, handlePhoneChange]} />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
