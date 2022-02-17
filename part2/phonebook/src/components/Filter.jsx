import React from "react";

const Filter = ({ onchange }) => {
  const [handleShowPerson] = onchange;

  return (
    <div>
      filter shown with
      {' '}
      <input type="text" onChange={handleShowPerson} />
    </div>
  );
};

export default Filter;
