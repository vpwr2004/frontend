import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { filterUsers } from '../actions/userActions';
import { NavLink } from 'react-router-dom';
 const CreateTeamFilters = (props) => {
    const domain =props.domain;
    const gender=props.gender;
    const availabilty="Yes";
    const dispatch= useDispatch();
    const  HandleClick=()=>{
        if(props.gender.length === 0){
            return toast.error("Plese Select Domain.");
        }
        else if(props.domain.length === 0){
            return toast.error("Please Select gender.");
        }
        dispatch(filterUsers({domain,gender,availabilty}));
        props.setLoading(false);
        
    }
    
    // useEffect(()=>{
        
    // },[{domain,gender}]);
  return (
    <div className='pt-24 w-screen h-screen flex justify-center items-center'>
        <div className='lg:w-1/3 md:w-1/2 sm:w-12/12 xsm:w-12/12 min-w-[350px] h-[20rem] bg-gradient-to-r from-blue-500 via-purple-500 to-green-500  flex justify-center items-center flex-col gap-6 opacity-80 rounded-md shadow-xl'>
            <div className='flex gap-x-3'>
                <label htmlFor="domain"  className='font-semibold'>Domain : </label>
                <select name="domain" id="domain" onChange={(e)=>{props.setDomain(e.target.value)}} className='text-lg text-slate-500 w-[150px] px-2 pb-1 rounded-md'>
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
                <select name="gender" id="gender" onChange={(e)=>props.setGender(e.target.value)} className='text-lg text-slate-500 w-[150px] px-2 pb-1 rounded-md'>
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
            
                <button onClick={()=>{HandleClick()}} className='bg-blue text-xl font-semibold px-4 py-1 bg-blue-500 border-black border-2 rounded-md mt-6'>Search</button>

           
        </div>
    </div>
  )
}

export default CreateTeamFilters;
