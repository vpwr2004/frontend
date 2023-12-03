// components/Filters.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterUsers } from '../actions/userActions';

const Filters = () => {
  const dispatch = useDispatch();
  const [domain, setDomain] = useState('');
  const [gender, setGender] = useState('');
  const [availability, setAvailability] = useState('');

  const handleFilter = () => {
    const filters = { domain, gender, availability };
    dispatch(filterUsers(filters));
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Domain"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2"
      />
      <input
        type="text"
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2 ml-2"
      />
      <input
        type="text"
        placeholder="Availability"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2 ml-2"
      />
      <button
        onClick={handleFilter}
        className="ml-2 bg-blue-500 text-white p-2 rounded-md"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
