import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/App.less';
import App from './App';
import { AppContextProvider } from './Stores/AppStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>,
  </React.StrictMode>
);