// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { NavLink } from "react-router-dom";
// import SearchBar from "./SearchBar";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <div className="w-full l-0 r-0 t-0 flex flex-col md:flex-row justify-between items-center h-20 mx-auto bg-black fixed z-50">
//       <div className="flex justify-between items-center w-full md:w-auto px-6">
//         <NavLink to="/">
//           <div>
//             <img src={logo} className="h-14" alt="Logo" />
//           </div>
//         </NavLink>
//         <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
//           <svg
//             className="h-6 w-6 fill-current text-slate-100"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             {mobileMenuOpen ? (
//               <path d="M19 6H5c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2zM19 18H5c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2z" />
//             ) : (
//               <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z" />
//             )}
//           </svg>
//         </div>
//       </div>

//       <SearchBar />

//       <div
//         className={`flex flex-col md:flex-row items-center gap-x-6 md:mr-6  text-slate-100 -tracking-tighter font-medium ${
//           mobileMenuOpen ? "flex ml-[70%] bg-black rounded-lg px-2 py-4 min-w-[200px] text-lg -mt-[50px]" : "hidden md:flex"
//         } md:ml-auto`}
//       >
//         <NavLink to="/" onClick={toggleMobileMenu}>
//           <p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">
//             Home
//           </p>
//         </NavLink>
//         <NavLink to="/create-team" onClick={toggleMobileMenu}>
//           <div className="relative">Create Team</div>
//         </NavLink>
//         <NavLink to="/my-teams" onClick={toggleMobileMenu}>
//           <div className="relative">My Teams</div>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Navbar;














// import logo from "../assets/logo.png";
// import { NavLink } from "react-router-dom";
// import SearchBar from "./SearchBar";

// const Navbar = () => {
//   return (
//     <div className="w-full l-0 r-0 t-0 flex flex-row justify-between items-center h-20  mx-auto bg-black fixed z-50">
//       <NavLink to="/">
//         <div className="ml-6">
//           <img src={logo} className="h-14" alt="Logo" />
//         </div>
//       </NavLink>
//       <SearchBar/>

//       {
        
//         <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
//         <NavLink to="/">
//           <p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">
//             Home
//           </p>
//         </NavLink>
//         <NavLink to="/create-team">
//           <div className="relative">
//             Create Team
//           </div>
//         </NavLink>
//         <NavLink to="/my-teams">
//           <div className="relative">
//             My Teams
//           </div>
//         </NavLink>
//       </div>
//       }
//     </div>
//   );
// };

// export default Navbar;

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchBar from './SearchBar';

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} fixed='top' expand={expand} className="bg-body-tertiary mb-3  ">
          <Container fluid>
            <Navbar.Brand href="/" className='font-extrabold pl-8 '>HELIVERSE</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title  className='font-extrabold' id={`offcanvasNavbarLabel-expand-${expand}`}>
                  HELIVERSE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-6">
                  <Nav.Link className='font-bold text-lg' href="/">Home</Nav.Link>
                  <Nav.Link className='font-bold text-lg' href="/create-team">Create Team</Nav.Link>
                  <Nav.Link className='font-bold text-lg' href="/my-teams">My Teams</Nav.Link>
                  
                </Nav>
                
                <SearchBar  className='pe-8'/>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;