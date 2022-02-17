import React from 'react';

const PersonForm = ({ onchange }) => {
  const [addContact, handleNameChange, handlePhoneChange] = onchange;

  return (
    <form onSubmit={addContact}>
      <div>
        name:
        {' '}
        <input type="text" onChange={handleNameChange} />
      </div>
      <div>
        number:
        {' '}
        <input type="number" onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
