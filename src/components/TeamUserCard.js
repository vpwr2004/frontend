// components/UserCard.js
import { useState } from 'react';
import React from 'react';

const TeamUserCard = ({ user, userIds,setUserIds }) => {
  // console.log("user_props",user);
  const [userSelection, setUserSelection]=useState(false);
  
  const handleUserSelection = (userId) => {
    if (!userIds.includes(userId)) {
      setUserSelection(true);
      setUserIds([...userIds, userId]);
    }
    else{
      setUserSelection(false);
      setUserIds(userIds.filter(id => id !== userId))
    }
    console.log('selectedUsers',userIds);
  };
  return (
    <div className="flex flex-col  items-center justify-between bg-white hover:scale-102 transition-all duration-300  ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]">
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
      <div className='flex gap-x-[4rem]'>
        <p className=" text-gray-400 font-normal text-[16px] ">
          {user.gender}
        </p>
      
        <button className={`${!userSelection?"bg-blue-500":"bg-red-400"} text-white font-normal text-[16px] px-2 py-1 rounded-md`} onClick={()=>handleUserSelection(user._id)}>
          {
            userSelection ? "Remove" : "Add"
          }
        </button>
      </div>
      
      {/* <div className="flex justify-between items-center w-full mt-5">
        <p className="text-green-600 font-semibold">${product.price}</p>
        {cart.some((p) => p.id == product.id) ? (
          <button
            className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div> */}
    </div>
  );
};

export default TeamUserCard;
