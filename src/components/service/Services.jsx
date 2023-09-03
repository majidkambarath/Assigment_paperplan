import React, { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { CiWavePulse1 } from "react-icons/ci";
import { BsJournalBookmark } from "react-icons/bs";
import { BsHeartPulse } from "react-icons/bs";
import { TbVector } from "react-icons/tb";
import { BsCapsule } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
export default function Services() {
  const [moveState, setMoveState] = useState({
    div1: false,
    div2: false,
    div3: false,
    div4: false,
    div5: false,
    div6: false,
  });

  const handleMouseEnter = (divId) => {
    setMoveState((prevState) => ({
      ...prevState,
      [divId]: true,
    }));
  };

  const handleMouseLeave = (divId) => {
    setMoveState((prevState) => ({
      ...prevState,
      [divId]: false,
    }));
  };
  return (
    <div className="w-full  md:h-[1260px] bg-gray-100 ">
      <div className="flex justify-center">
        <h1 className="py-20 text-2xl font-bold  text-gray-950  ">
          Our Scope of Services
          <div className="h-[3px] w-12 bg-green-600 ml-[100px] mt-2"></div>
        </h1>
      </div>
      <div className="flex justify-center -mt-16 ml-5 md:ml-0">
        <h1 className="md:text-lg  text-gray-700/50 font-thin ">
          Integrated into the United Health Interface (UHI), ensuring a seamless
          and unified healthcare experience.
        </h1>
      </div>
      <div className="flex justify-evenly mt-7 flex-col md:flex-row ml-5 md:ml-5">
        <div
          onMouseEnter={() => handleMouseEnter("div1")}
          onMouseLeave={() => handleMouseLeave("div1")}
          className="md:w-1/4 w-[350px] h-[450px] bg-white mt-8 rounded-xl"
        >
          <div className="py-14 px-10">
            <h1
              className={`text-5xl relative ${
                !moveState.div1 ? "text-gray-200" : "text-teal-600"
              }`}
            >
              <BsCircleFill />
            </h1>
            <h1 className="text-6xl absolute -ml-6 font-thin -mt-11 text-black">
              <CiWavePulse1 />
            </h1>
          </div>
          <div className="-mt-8 ml-10">
            <h1 className="text-2xl font-bold ">
              Practice Management Application
            </h1>
          </div>
          <div
            className={`w-[260px] h-1 ml-10 mt-2 ${
              !moveState.div1 ? "bg-gray-200" : "bg-teal-600"
            }`}
          >
            {" "}
          </div>
          <div className="flex justify-center text-[14px] w-4/5 ml-10 mt-4">
            <h1>
              A cutting-edge cloud-based practice management application for
              healthcare providers to efficiently manage their operations while
              seamlessly sharing health records with patients, Streamlining
              their practice and enhance patient engagement with our
              user-friendly and secure platform.
            </h1>
          </div>
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("div2")}
          onMouseLeave={() => handleMouseLeave("div2")}
          className="md:w-1/4 w-[350px] h-[450px] bg-white mt-8 rounded-xl"
        >
          <div className="py-14 px-10">
            <h1
              className={`text-5xl relative ${
                !moveState.div2 ? "text-gray-200" : "text-teal-600"
              }`}
            >
              <BsCircleFill />
            </h1>
            <h1 className="text-5xl absolute -ml-5 font-thin -mt-11 text-black">
              <BsJournalBookmark />
            </h1>
          </div>
          <div className="-mt-8 ml-10">
            <h1 className="text-2xl font-bold ">Digital Health Records</h1>
          </div>
          <div
            className={`w-[260px] h-1 ml-10 mt-2 ${
              !moveState.div2 ? "bg-gray-200" : "bg-teal-600"
            }`}
          >
            {" "}
          </div>
          <div className="flex justify-center text-[14px] w-4/5 ml-10 mt-4">
            <h1>
              Our advanced electronic health records (EHR) system securely
              stores and manages your medical information in a digital format
              allowing healthcare providers to make informed decisions, track
              your medical history, and ensure seamless continuity of care, all
              while prioritizing data privacy and security by making sure only
              the records you consent to are shared with your provider.
            </h1>
          </div>
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("div3")}
          onMouseLeave={() => handleMouseLeave("div3")}
          className="md:w-1/4 w-[350px] h-[450px] bg-white mt-8 rounded-xl"
        >
          <div className="py-14 px-10">
            <h1
              className={`text-5xl relative ${
                !moveState.div3 ? "text-gray-200" : "text-teal-600"
              }`}
            >
              <BsCircleFill />
            </h1>
            <h1 className="text-5xl absolute -ml-5 font-thin -mt-11 text-black">
              <BsHeartPulse />
            </h1>
          </div>
          <div className="-mt-8 ml-10">
            <h1 className="text-2xl font-bold ">Online Doctor Consultation</h1>
          </div>
          <div
            className={`w-[260px] h-1 ml-10 mt-2 ${
              !moveState.div3 ? "bg-gray-200" : "bg-teal-600"
            }`}
          >
            {" "}
          </div>
          <div className="flex justify-center text-[14px] w-4/5 ml-10 mt-4">
            <h1>
              Connect with qualified medical professionals remotely, receive
              expert advice, and discuss your health concerns from the comfort
              of your own home. Our secure and user-friendly interface ensures a
              seamless and confidential virtual healthcare experience, saving
              you time and effort.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row justify-evenly mt-7 ml-5 md:ml-5">
        <div
          onMouseEnter={() => handleMouseEnter("div4")}
          onMouseLeave={() => handleMouseLeave("div4")}
          className="md:w-1/4 w-[350px] h-[400px] bg-white mt-8 rounded-xl"
        >
          <div className="py-14 px-10">
            <h1
              className={`text-5xl relative ${
                !moveState.div4 ? "text-gray-200" : "text-teal-600"
              }`}
            >
              <BsCircleFill />
            </h1>
            <h1 className="text-6xl absolute -ml-6 font-thin -mt-11 text-black">
              <TbVector />
            </h1>
          </div>
          <div className="-mt-8 ml-10">
            <h1 className="text-2xl font-bold ">Appointment Booking</h1>
          </div>
          <div
            className={`w-[260px] h-1 ml-10 mt-2 ${
              !moveState.div4 ? "bg-gray-200" : "bg-teal-600"
            }`}
          >
            {" "}
          </div>
          <div className="flex justify-center text-[14px] w-4/5 ml-10 mt-4 ">
            <h1>
              You can effortlessly schedule appointments with doctors using a
              simple and convenient process through WhatsApp, providing a
              seamless and efficient way to plan your visit and address any
              concerns.
            </h1>
          </div>
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("div5")}
          onMouseLeave={() => handleMouseLeave("div5")}
          className="md:w-1/4 w-[350px] h-[400px] bg-white mt-8 rounded-xl"
        >
          <div className="py-14 px-10">
            <h1
              className={`text-5xl relative ${
                !moveState.div5 ? "text-gray-200" : "text-teal-600"
              }`}
            >
              <BsCircleFill />
            </h1>
            <h1 className="text-6xl absolute -ml-6 font-thin -mt-11 text-black">
              <BsCapsule />
            </h1>
          </div>
          <div className="-mt-8 ml-10">
            <h1 className="text-2xl font-bold ">Followup Care</h1>
          </div>
          <div
            className={`w-[260px] h-1 ml-10 mt-2 ${
              !moveState.div5 ? "bg-gray-200" : "bg-teal-600"
            }`}
          >
            {" "}
          </div>
          <div className="flex justify-center text-[14px] w-4/5 ml-10 mt-4">
            <h1>
              Your contact with your doctor doesn't end when you leave the
              hospital, get curated content to understand your illness better
              and help aid in a faster recovery from your condition.
            </h1>
          </div>
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("div6")}
          onMouseLeave={() => handleMouseLeave("div6")}
          className="md:w-1/4 w-[350px] h-[400px] bg-white mt-8 rounded-xl "
        >
          <div className="py-14 px-10">
            <h1
              className={`text-5xl relative ${
                !moveState.div6 ? "text-gray-200" : "text-teal-600"
              }`}
            >
              <BsCircleFill />
            </h1>
            <h1 className="text-6xl absolute -ml-5 font-thin -mt-11 text-black">
              <BiMessageDetail />
            </h1>
          </div>
          <div className="-mt-8 ml-10">
            <h1 className="text-2xl font-bold ">Whatsapp Integrated</h1>
          </div>
          <div
            className={`w-[260px] h-1 ml-10 mt-2 ${
              !moveState.div6 ? "bg-gray-200" : "bg-teal-600"
            }`}
          >
            {" "}
          </div>
          <div className="flex justify-center text-[14px] w-4/5 ml-10 mt-4">
            <h1>
              You can effortlessly schedule appointments with doctors using a
              simple and convenient process through WhatsApp, providing a
              seamless and efficient way to plan your visit and address any
              concerns.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
