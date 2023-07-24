import React from 'react'
import {Route, Routes } from "react-router-dom";
import Landing from '../pages/User/Landing';
import LoginPage from '../pages/User/LoginPage';
import AuthVerify from '../pages/User/AuthVerify';
import AuthOtpPage from '../pages/User/AuthOtp';
import AuthSignUpPage from '../pages/User/AuthSignUp';
import BookingPage from '../pages/User/BookingPage';
import PaymentPage from '../pages/User/PaymentPage';
import Protect from '../utils/ProtectorRouter/userRouter'
import ForgotPage from '../pages/User/ForgotPage';
import OtpforgotPage from '../pages/User/OtpforgotPage';
import ForgotPassFormPage from '../pages/User/ForgotPassForm';
export default function UserRouter() {
  return (
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/signup" element={<AuthVerify/>} />
    <Route path="/otp" element={<AuthOtpPage/>} />
    <Route path="/authsignup" element={<AuthSignUpPage/>} />
    <Route path="/forgotPass" element={<ForgotPage/>} />
    <Route path="/forgotPassOtp" element={<OtpforgotPage/>} />
    <Route path="/forgotPassForm" element={<ForgotPassFormPage/>} />
    <Route element={<Protect/>}>
    <Route path="/booking" element={<BookingPage/>} />
    <Route path="/payment" element={<PaymentPage/>} />
    </Route>
  </Routes>
  )
}
