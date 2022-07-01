import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import Module from './Modules/Module';
import Tutorial from './Modules/Tutorial';
import Demo from './Modules/Demo';
import Feedback from './Modules/Feedback';
import Performance from './Performance/Performance';

const MainPage = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:module/' element={<Module/>}/>
        <Route path='/:module/tutorial' element={<Tutorial/>}/>
        <Route path='/:module/tutorial/demo' element={<Demo/>}/>
        <Route path='/:module/practice-mode/performance' element={<Performance/>}/>
        <Route path='/feedback/:module/' element={<Feedback/>}/>
        {/*path="*" means for any path other than above specified path goes to home */}
        <Route path="*" element={<Navigate to="/" replace />} /> 

      </Routes>
    </Router>
  );
};

export default MainPage;