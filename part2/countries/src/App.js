import { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([{}]);
  const [search, setSearch] = useState('');
 
  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data))
  };

  useEffect(hook, []);

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div>
      find countries
      <input type='text' onChange={handleSearch} />
</div>
  );
};

export default App;
