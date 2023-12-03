// components/TeamCreation.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTeam, filterUsers } from '../actions/userActions';
import TeamUserCard from './TeamUserCard';
import {toast} from 'react-hot-toast';
import  CreateTeamFilters  from './CreateTeamFilters';
import {NavLink} from 'react-router-dom';

const TeamCreation = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const [userIds, setUserIds] = useState([]);
  const [teamName,setTeamName]=useState("");
  const [domain,setDomain]=useState('IT');
  const [gender,setGender]=useState('Male');
  const [availabilty,setAvailabilty]= useState("Yes");
  const [loading, setLoading]=useState(true);

  
  const handleTeamCreation = () => {
    
    if(userIds.length==0){
      return toast.error("Please Select Team");
    }
    else if(teamName.length<=3){
      return toast.error("Team Name should be greater than 3");
    }
    console.log('teamCreation',teamName,userIds);
    dispatch(createTeam({teamName,userIds}));
    toast.success("Team Created Successfully",{
      position:'top-left'
    });
  };

  return (
    <div>
      {
        loading ? (<CreateTeamFilters gender={gender} setGender={setGender} domain={domain} setDomain={setDomain} setLoading={setLoading}/>):
        (
        <div className="container mx-auto pt-12 mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">Create Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users.map((user) => {
              
                return (<TeamUserCard key={user._id}  user={user} userIds={userIds} setUserIds={setUserIds}/>);
            
            })}
          </div>
          <div className=' py-16 w-full '>
              <label htmlFor="teamName">Enter Team Name: </label>
              <input
              type="text"
              placeholder="Enter Team Name"
              value={teamName}
              name='teamName'
              onChange={(e) => setTeamName(e.target.value)}
              className="border-2 border-gray-300 rounded-md p-2"
            />
          </div>
          <NavLink to='/my-teams'>
              <button
              onClick={handleTeamCreation}
              className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md "
            >
              Create Team
            </button>
          </NavLink>
          
        </div>
        )
      }
    </div>
  );
};

export default TeamCreation;
