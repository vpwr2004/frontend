// components/UserCard.js
import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteUser } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const UserCard = ({ user }) => {
  // console.log("user_props",user);
  const dispatch=useDispatch();
  const HandleClick=()=>{
    dispatch(deleteUser(user._id));
    // navigate('/');
    window.location.reload(false);
  }
  return (
    <div className="max-h-[300px] flex flex-col items-center justify-between bg-white hover:scale-102 transition-all duration-300  ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] ">
      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-center truncate mt-1 w-40">
          {user.name}
        </h1>
      </div>
      
      <div className="h-[100px]">
        <img
          src={user.avatar}
          alt="Product Image"
          className="h-full w-full"
        />
      </div>
      <div className='flex gap-x-12'>
        <p className=" text-gray-400 font-normal text-[16px] ">
          {user.domain}
        </p>
      
        <p className=" text-gray-400 font-normal text-[16px] ">
          {user.gender}
        </p>
      </div>
      <div className='flex gap-x-2'>
        <p className="w-40 text-gray-400 font-normal text-[16px] ">
          {`Availabiliy: ${user.availability ?"Yes":"No"}`}
        </p>
        {/* <NavLink to="" refresh="true"> */}
          <button onClick={HandleClick} className=' text-2xl text-red-700 bg-red-100 p-2 rounded-full '><AiFillDelete/></button>

        {/* </NavLink> */}
      </div>
      
    </div>
  );
};

export default UserCard;
