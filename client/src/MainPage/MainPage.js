import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import Module from './Modules/Module';
import Tutorial from './Modules/Tutorial';

const MainPage = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/:module/' exact element={<Module/>}/>
        <Route path='/:module/tutorial' exact element={<Tutorial/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default MainPage;