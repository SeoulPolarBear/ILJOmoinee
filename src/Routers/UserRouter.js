import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MyPage from '../Pages/MyPage';
import SignUp from '../Pages/SignUp';
import SignUp2 from '../Pages/SignUp2';
import MyPage01 from '../Pages/MyPage01';

const UserRouter = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUp2" element={<SignUp2 />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/MyPage01" element={<MyPage01 />}/>
      </Routes>
    </div>
  );
}

export default UserRouter;