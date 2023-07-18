import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import LoginPage from './pages/LoginPage';
export default function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing/>} />
          <Route path={"/login"} element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

