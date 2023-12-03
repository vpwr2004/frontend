import React from 'react'

const ModifyUser = (prop) => {
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
      <div >
        <p className="w-40 text-gray-400 text-center font-normal text-[16px] ">
          {`Availabiliy: Yes`}
        </p>
      </div>
      
    </div>
  )
}

export default ModifyUser












