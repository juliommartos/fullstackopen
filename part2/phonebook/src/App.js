import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Julio', id: 1 }]);
  const [newName, setNewName] = useState('');

  const handleNameChange = event => {
    console.log(event.target.value)
    setNewName(event.target.value);
  };

  const addContact = event => {
    event.preventDefault();
    const contact = {
      name: newName,
      id: persons.length + 1,
    };

    setPersons(persons.concat(contact));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map( person => <p key={person.id}>{person.name}</p>)}
    </div>
  );
};

export default App;
