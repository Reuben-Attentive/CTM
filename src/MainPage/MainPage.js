import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import DataModel from './Modules/DataModel';

const MainPage = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/:module/data-model' exact element={<DataModel/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default MainPage;