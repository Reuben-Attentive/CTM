import React, { useReducer, createContext } from 'react';
export const AppContext = createContext();

const user = localStorage.getItem('user');

const INITIAL_STATE = {
  user: user,
  isLoggedIn: Boolean(user),
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
        localStorage.setItem('user', action.payload.user);
      } else {
        localStorage.removeItem('user');
      }
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
      };
    case 'SET_LOGOUT':
      localStorage.removeItem('user');
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