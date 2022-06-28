import React, { useReducer, createContext } from 'react';
export const AppContext = createContext();

const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

const INITIAL_STATE = {
  user: {},
  token: token,
  userId: userId,
  isLoggedIn: Boolean(token),
};

//appStoreDispatch({ 
  //type: 'SET_LOGIN', 
  //payload:{
  //        isLoggedIn: true, 
  //        user: {
    //              token: 'token', 
//                  username: username, 
//                  id: username
//                } 
//          }
// });

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      if (action.payload.isLoggedIn) {
        localStorage.setItem('token', action.payload.user.token);
        localStorage.setItem('userId', action.payload.user.id);
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
      }
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
        token: action.payload.user && action.payload.user.token,
        userId: action.payload.user && action.payload.user.id
      };
    case 'SET_LOGOUT':
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      return{
        isLoggedIn: action.payload.isLoggedIn,
      }
    default:
      return INITIAL_STATE;
  }
};


// Create a provider for components to consume and subscribe to changes
export const AppContextProvider = props => {
  return (
    <AppContext.Provider value={useReducer(appReducer, INITIAL_STATE)}>
      {props.children}
    </AppContext.Provider>
  );
};
