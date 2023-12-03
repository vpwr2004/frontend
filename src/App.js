// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import TeamCreation from './components/TeamCreation';
import TeamDetails from './components/TeamDetails';
import Navbar from './components/OffcanvasExample';
import CreateNewUser from './components/CreateNewUser';

function App() {
  return (
    // <Router>
      <div className="w-screen">
        <Navbar/>
        <Routes>
         
          <Route path="/" element={<> <UserList /> </>}></Route>
          <Route path="/create-team" element={<TeamCreation />}></Route>
          <Route path="/my-teams" element={<TeamDetails />}></Route>
          <Route path="/create-user" element={<CreateNewUser />}></Route>
        </Routes>
      </div>
    // </Router>
  );
}

export default App;
