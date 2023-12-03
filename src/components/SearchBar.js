// components/SearchBar.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchUsers } from '../actions/userActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(searchUsers(searchTerm));
  };
  // useEffect(()=>handleSearch(),[searchTerm]);

  return (
    <div className="mb-2  flex justify-center items-center">
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
        className="border-2  w-[150px]   border-gray-300 rounded-md p-2"
      />
      <button
        onClick={()=>handleSearch()}
        className="ml-2 bg-blue-500 text-white p-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
