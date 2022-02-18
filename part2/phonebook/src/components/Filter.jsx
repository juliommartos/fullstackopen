import React from "react";
import Persons from "./Persons";

const Filter = ({ onchange, showp }) => {
  const [persons, show] = showp;

  const searchName = persons.filter((person) => person.name === show);

  return (
    <div>
      filter shown with
      {' '}
      <input type="text" onChange={onchange} />
      <Persons persons={searchName} />
    </div>

  );

};

export default Filter;
