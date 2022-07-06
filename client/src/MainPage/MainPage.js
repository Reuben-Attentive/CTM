import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//Pages
import Home from './Home';
import Module from './Modules/Module';
import Tutorial from './Modules/Tutorial';
import Feedback from './Modules/Feedback';
import Performance from './Modules/Performance';
import PracticeArena from './Modules/PracticeArena';

const MainPage = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:module/' element={<Module/>}/>
        <Route path='/:module/tutorial' element={<Tutorial/>}/>
        <Route path='/:module/practice-mode' element={<PracticeArena/>}/>
        <Route path='/:module/practice-mode/performance' element={<Performance/>}/>
        <Route path='/feedback/:module/' element={<Feedback/>}/>
        <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
    </Router>
  );
};

export default MainPage;