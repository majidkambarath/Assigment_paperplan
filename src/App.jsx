import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import LoginPage from './pages/LoginPage';
import AuthVerify from './pages/AuthVerify';
import AuthOtpPage from './pages/AuthOtp';
import AuthSignUpPage from './pages/AuthSignUp';
import HostToast from "./components/Toastify/Toast";
import BookingPage from './pages/BookingPage';
import PaymentPage from './pages/PaymentPage';
import Protect from './utils/ProtectorRouter/userRouter'
export default function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing/>} />
          <Route path={"/login"} element={<LoginPage/>} />
          <Route path={"/signup"} element={<AuthVerify/>} />
          <Route path={"/otp"} element={<AuthOtpPage/>} />
          <Route path={"/authsignup"} element={<AuthSignUpPage/>} />
          <Route element={<Protect/>}>
          <Route path={"/booking"} element={<BookingPage/>} />
          <Route path={"/payment"} element={<PaymentPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <HostToast />
    </div>
  )
}

