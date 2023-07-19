import React, { useRef, useEffect, useState } from "react";
import leftimg from "../../assets/loginAsset.png";
import logo from "../../assets/paper.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import LoginForm from "../AuthForm/LoginForm";
export default function Login() {
  // const inputRef = useRef(null);
  // const [hide, setHide] = useState(false);
  // // const [change,setChange] = useState('text')
  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //     // inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
  //   }
  // }, []);
  return (
    <>
      <div className="bg-slate-50 w-full  h-screen flex md:flex-row flex-col">
        <div className="md:w-[600px] md:h-screen  bg-white md:rounded-tr-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img className="w-2/5 md:py-16 py-7 mr-44 " src={logo} alt="img" />
            <img className="w-3/3" src={leftimg} alt="img" />
          </div>
        </div>
        <div className="md:w-[800px] mt-4 md:mt-0">
          <div className="md:ml-[150px] ml-6">
            <h1 className="md:text-5xl text-4xl font-bold  text-purple-950 md:mt-[230px]  font-sans">
              Sign In
            </h1>
            <h1 className="font-sans mt-2 text-lg  text-purple-900/70">
              Login with your Phone number or Email
            </h1>
          </div>
             <LoginForm/>
             <div className="mt-5 md:ml-[150px] ml-4">
              <h1 className="text-blue-600 font-sans text-md cursor-pointer">Forgot Password?</h1>
              <h1 className="text-black font-sans text-md ">Don’t have an account? <span className="text-blue-600 cursor-pointer">Sign up</span> </h1>
             </div>
        </div>
      </div>
    </>
  );
}
