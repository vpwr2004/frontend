// actions/userActions.js
// import 'dotenv';
import axios from 'axios';
const BASE_URL=process.env.REACT_APP_API_URL;



export const getUsers = (page) => async (dispatch) => {
  try {
    console.log('PPPage',BASE_URL);
    
    const res = await axios.get(`${BASE_URL}/api/users?page=${page}`);
    console.log('getUsers',res.data);
    dispatch({ type: 'GET_USERS', payload: res.data });
  } catch (error) {
    console.error('Error fetching users', error);
  }
};

export const createUser = (user) => async (dispatch) => {
  
   
    axios.post(`${BASE_URL}/api/users`, user)
      .then(response => {
        console.log('POST request successful:', response.data);
        
      })
      .catch(error => {
        console.error('Error making POST request:', error);
      });
    // dispatch({ type: 'CREATE_USER', payload: res.data });
  
};

export const deleteUser =(userId)=>async(dispatch)=>{
  axios.delete(`${BASE_URL}/api/users/${userId}`)
  .then(response => {
    console.log('DELETE request successful:', response.data);
    // Handle the response data or update your state
  })
  .catch(error => {
    console.error('Error making DELETE request:', error);
    // Handle the error, such as displaying an error message to the user
  });
}
export const searchUsers = (name) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/search?name=${name}`);
    dispatch({ type: 'SEARCH_USERS', payload: res.data });
  } catch (error) {
    console.error('Error searching users', error);
  }
};

export const filterUsers = (filters) => async (dispatch) => {
  try {
    console.log('filters',filters);
    const res = await axios.get(`${BASE_URL}/api/filter`, { params: filters });
    dispatch({ type: 'FILTER_USERS', payload: res.data });
  } catch (error) {
    console.error('Error filtering users', error);
  }
};

export const createTeam = ({teamName,userIds}) => async (dispatch) => {
  try {
    // console.log('teamActions',teamName,userIds)
    const res = await axios.post(`${BASE_URL}/api/team`, { teamName,userIds });
    dispatch({ type: 'CREATE_TEAM', payload: res.data });
  } catch (error) {
    console.error('Error creating team', error);
  }
};

export const getAllTeams=()=>async(dispatch) => {
  
  try{
    const res= await axios.get(`${BASE_URL}/api/team`);
    console.log('userActions',res);
    dispatch({type: 'GET_ALL_TEAMS', payload: res.data});
  }
  catch(error){
    console.error('Error fetching all team details',error);
  }
}
export const getTeamById = (teamId) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/team/${teamId}`);
    dispatch({ type: 'GET_TEAM', payload: res.data });
  } catch (error) {
    console.error('Error fetching team details', error);
  }
};
