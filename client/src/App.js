import React, {useContext } from 'react';
import Login from "./LoginPage/Login";
import MainPage from "./MainPage/MainPage";
import { AppContext } from './Stores/AppStore';

function App() {
  const [appStore, appStoreDispatch] = useContext(AppContext);

  return (
    <div className="App">
      {appStore.isLoggedIn ? <MainPage /> : <Login />}
    </div>
  );
}

export default App;
