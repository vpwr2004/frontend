// components/TeamDetails.js
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeams } from '../actions/userActions';
import TeamCard from './TeamCard';
import {NavLink} from 'react-router-dom';


const TeamDetails = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  console.log("teams",teams);
  
  const [teamData, setTeamData]=useState([]);

  
  console.log('teamDAta',teamData);
  // setTeamData(teams[0]);
  useEffect(()=>{
    setTeamData(teams);
  },[teams]);
  useEffect(() => {
    dispatch(getAllTeams()); // Fetch initial user list
    
  }, [dispatch]);
  return (
    <div>

    
    {
      // !teamData ? (<div className='font-bold text-3xl w-screen h-screen flex justify-center align-center'>NO TEAMS FOUND</div>): 
      teamData.length==0 ? 
      (<div className='w-screen h-screen flex justify-center items-center flex-col'>
        <div className='mb-4 text-3xl font-bold '>No Teams Found</div>
        <NavLink to="/create-team"><button className=' bg-blue-500 font-bold text-xl px-4 py-2 text-white rounded-md border-2  border-black'>Create Team</button></NavLink></div>):
      (
        <div className='pt-24'>
          <h2 className="text-4xl font-bold opacity-80 mb-4 text-center">Team Details</h2>
          <div className='flex flex-col gap-y-10'>
          {
            teamData.map((team)=>(
              <div key={team._id} className='w-10/12 mx-auto border-2 shadow-lg px-6 py-8 rounded-md '>
                <div className='font-semibold text-3xl text-center text-slate-500'>{team.TeamName}</div>
                <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] ">
                {
                  team.users.map((user)=>{
                    // console.log('user',user);
                    return <TeamCard key={user._id} user={user}/>
                  })
                }
                </div>
              </div>
            ))
          }
          </div>
        </div>
      )
    }
    </div>
  );
};

export default TeamDetails;
