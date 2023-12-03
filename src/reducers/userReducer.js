// reducers/userReducer.js
const initialState = {
    users: [],
    teams: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USERS':
        return { ...state, users: action.payload };
      case 'SEARCH_USERS':
        return { ...state, users: action.payload };
      case 'FILTER_USERS':
        return { ...state, users: action.payload };
      case 'CREATE_USER':
        return { ...state, users: [...state.users, action.payload] }
      case 'CREATE_TEAM':
        return { ...state, teams: [...state.teams, action.payload] };
      case 'GET_ALL_TEAMS':
        return { ...state, teams: action.payload};
      case 'GET_TEAM':
        return { ...state, teams: [...state.teams, action.payload] };
      ;
      default:
        return state;
    }
  };
  
  export default userReducer;
  