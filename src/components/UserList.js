// components/UserList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterUsers, getUsers } from '../actions/userActions';
import UserCard from './UserCard';
import toast from 'react-hot-toast';
import { FaPlus } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [domain,setDomain]=useState('');
  const [gender,setGender]= useState('');
  const [availabilty,setAvailability]= useState('');
  const [visible, setvisible]=useState(true);
  console.log("users",users);

  useEffect(() => {
    dispatch(getUsers(1)); // Fetch initial user list
  }, [dispatch]);

  const [page,setPage]=useState(1);

    function HandleIncrement(){
      dispatch(getUsers(page+1));
      setPage(page+1);

    }
    function HandleDecrement(){
      dispatch(getUsers(page-1));
      setPage(page-1);
    }

    function HandleClick(){
      dispatch(filterUsers({domain,gender,availabilty}));
    }
  return (
    <div className='pt-28 relative w-full flex flex-col justify-center items-center overflow-x-hidden'>
    
          <div className=' mx-auto flex flex-col sm:flex-col xsm:flex-col md:flex-row justify-center items-center  gap-2 opacity-80 rounded-md border-2 outline-2 outline-slate-400 py-1 px-2'>
            <div className='flex gap-x-3'>
                <label htmlFor="domain"  className='font-semibold'>Domain : </label>
                <select name="domain" id="domain" onChange={(e)=>{setDomain(e.target.value)}} className='text-lg text-slate-500 w-[80px] lg:w-[150px] md:w-[100px] sm:w-[80px] px-2 pb-1 rounded-md'>
                <option value="IT">IT</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Management">Management</option>
                <option value="UI Designing">UI Designing</option>
                <option value="Business Development">Business Development</option>
                </select>
            </div>
            <div className='flex gap-x-3'>
                <label htmlFor="gender" className='font-semibold'>Gender : </label>
                <select name="gender" id="gender" onChange={(e)=>setGender(e.target.value)} className='text-lg text-slate-500 w-[80px] lg:w-[150px] md:w-[100px] sm:w-[80px] px-2 pb-1 rounded-md'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderqueer">Genderqueer</option>
                <option value="Genderfluid">Genderfluid</option>
                <option value="Polygender">Polygender</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Agender">Agender</option>
                <option value="Bigender">Bigender</option>
                </select>
            </div>

            <div className='flex gap-x-3'>
                <label htmlFor="available" className='font-semibold'>Availability : </label>
                <select name="availble" id="available" onChange={(e)=>setAvailability(e.target.value)} className='text-lg w-[80px] text-slate-500 lg:w-[150px] md:w-[100px] sm:w-[80px] px-2 pb-1 rounded-md'>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                
                </select>
            </div>
            <button onClick={()=>{HandleClick()}} className='bg-blue text-xl font-semibold px-4 py-1 bg-blue-500 border-black border-2 rounded-md '>Search</button>
          </div>
          <div className='w-full flex flex-wrap justify-center items-center mx-auto'>
            {users.length > 0 ? (
              <div className="max-w-[72rem] mx-auto grid xsm:grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  p-2  space-y-10 space-x-5 min-h-[80vh] justify-center justify-self-center">
                {users.map((user) => (
                  <UserCard key={user._id} user={user} />
                ))}
              </div>
            ) : (
              <div className='w-screen h-screen font-semibold text-2xl flex justify-center items-center '>No Posts Found</div>
            )}

          </div>

          <div className='sticky  b-0 '>
            <div className='w-full h-20  mx-auto   '>
              <div className='flex gap-x-10 justify-center px-10  py-4 '>
              <button onClick={HandleDecrement} className='font-semibold'>❮ Previous</button>
                <button onClick={HandleIncrement} className='font-semibold'>Next ❯</button>
              </div>
            </div>
            
          </div>
      <NavLink to='/create-user'>
        <div className='w-full flex justify-center'>
        <button onClick={()=>{setvisible(false)}}  className='bont-semibold text-2xl bg-blue-500  px-5 py-2 rounded-full text-white mb-10 flex gap-x-1 justify-center items-center'>Add New User <FaPlus/> </button>
      </div>
      </NavLink>
      
    
    </div>
  );
};


export default UserList;
