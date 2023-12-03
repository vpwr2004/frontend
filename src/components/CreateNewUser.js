 
 import React from 'react'
 import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { createUser } from '../actions/userActions';
// import { useNavigate } from 'react-router-dom';
 const CreateNewUser = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [formData,setFormData]=useState({
        "name": "",
        "email": "",
        "gender": "Male",
        "avatar": "https://robohash.org/sintessequaerat.png?size=50x50&set=set1",
        "domain": "IT",
        "availability": "Yes"
      })
    const HandleForm=(e)=>{
        // console.log(e.target.name);
        const {name,value}=e.target;
        setFormData((prev)=>({...prev,[name]:value}))
      }
  
      const HandleCreate=(e)=>{
        console.log('formData',formData);
        if(formData.name.length<=3)
            return toast.error('Length of Enter should be greater than 3')
        else if(formData.gender.length<=3)
            return toast.error('Please select your gender.');
        else if(formData.domain.length<2)
            return toast.error('Please select your domain');
        else if(formData.availability.length<2)
            return toast.error('Please select your availbilty');
        else if(formData.avatar.length<1)
            return toast.error('Pleae enter your avatar');
        dispatch(createUser(formData));
        navigate('/');
      }
   return (
      
 <div className="pt-24 w-full  ">
    
    <div className='w-1/3 min-w-[350px] mx-auto bg-red-200 flex flex-col items-center rounded-lg py-4 gap-y-4'>
        <div className='text-center font-bold text-3xl text-slate-600 '>Create New User</div>
        <div className='text-right'>
            <label htmlFor='name' className='font-semibold'> Name : </label>
            <input
                type="text"
                placeholder="Enter Full Name"
                name='name'
                value={formData.name}
                id='name'
                onChange={HandleForm}
                className='text-lg text-slate-500 w-[200px] px-2 pb-1 rounded-md'
            /> 
        </div>

        <div>
        <label htmlFor='email' className='font-semibold'>Email : </label>
        <input
            type="email"
            placeholder="Enter Email"
            name='email'
            value={formData.email}
            id='email'
            onChange={(e) => {HandleForm(e)}}
            className='text-lg text-slate-500 w-[200px] px-2 pb-1 rounded-md'
        /> 
        </div>

        <div className='flex gap-x-3'>
            <label htmlFor="domain"  className='font-semibold'>Domain : </label>
            <select name="domain" id="domain" onChange={(e)=>{HandleForm(e)}} className='text-lg text-slate-500 w-[200px] px-2 pb-1 rounded-md'>
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
            <select name="gender" id="gender" onChange={(e)=>{HandleForm(e)}} className='text-lg text-slate-500 w-[200px] px-2 pb-1 rounded-md'>
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
            <label htmlFor="availability" className='font-semibold'>Availability : </label>
            <select name="availability" id="availability" onChange={(e)=>{HandleForm(e)}} className='text-lg text-slate-500 w-[180px] px-2 pb-1 rounded-md'>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            
            </select>
        </div>
        
        
        <button onClick={()=>HandleCreate()} className="ml-2 bg-blue-500 text-white p-2 rounded-md" > Create </button>
 </div>
</div> 
   )
 }
 
 export default CreateNewUser
 
 
