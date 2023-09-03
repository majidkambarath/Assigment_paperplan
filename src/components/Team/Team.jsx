import React from "react";
import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-2.jpg";
import team3 from "../../assets/team-3.jpg";
import { AiFillLinkedin } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
export default function Team() {
  return (
    <>
      <div className="w-full md:h-[749px]  bg-white ">
        <div className="flex justify-center">
          <h1 className="py-12 text-2xl font-bold  text-gray-950  ">
            Our Team
            <div className="h-[3px] w-12 bg-green-600 ml-9 mt-2"></div>
          </h1>
        </div>
        <div className="flex justify-evenly flex-col md:flex-row ml-9 gap-4 md:gap-0 md:ml-0">
          <div className="h-[530px] w-[330px] bg-white shadow-2xl  rounded-xl">
            <div className="h-[330px] w-[310px] ml-2 py-2 ">
              <img className="rounded-xl" src={team1} alt="team1_png" />
              <div className="flex justify-center mt-4">
                <h1 className="text-xl font-bold">Dr. Ravi Bharathi</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-xs font-bold text-gray-600">
                  CEO & Co-Founder
                </h1>
              </div>
              <div className="flex justify-center ml-3 mt-2">
                <h1 className="text-xs font-semibold text-gray-600/60 font-sans">
                  A Doctor by training from AIIMS, Bhubaneswar, renowned as one
                  of India's top medical institutes. His unique blend of medical
                  proficiency and technological acumen allows us to bridge the
                  gap between healthcare and innovation, driving our team's
                  vision to revolutionize the industry.
                </h1>
              </div>
              <div className="flex justify-center mt-3">
                <h1 className="font-Montserrat text-gray-700/50 text-lg ">Follow </h1>
                <NavLink to={'https://www.linkedin.com/in/dr-ravi-bharathi-898742151/'}>
                    
                <h1 className="text-2xl font-bold text-blue-600 ml-2">
                <AiFillLinkedin/>
                </h1>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="h-[580px] w-[330px] bg-white shadow-2xl rounded-xl">
            <div className="h-[350px] w-[310px] ml-2 py-2 ">
              <img className="rounded-xl" src={team2} alt="team1_png" />
              <div className="flex justify-center mt-4">
                <h1 className="text-xl font-bold">Venkatesh Raja</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-xs font-bold text-gray-600">
                  Co-Founder & CMO
                </h1>
              </div>
              
              <div className="flex justify-center ml-3 mt-2">
                <h1 className="text-xs font-semibold text-gray-600/60 font-sans">
                  An accomplished biomedical engineer with exceptional people
                  skills and communication abilities with experience working in
                  various medtech startups. Always looks at the big picture but
                  never misses the finer details. Never fails to leave a
                  pleasant memory on people he meets.Brings a wealth of
                  entrepreneurial experience and passion for technological
                  innovation to our team..
                </h1>
              </div>
              <div className="flex justify-center mt-3">
                <h1 className="font-Montserrat text-gray-700/50 text-lg ">Follow </h1>
                <NavLink to={'https://www.linkedin.com/in/venkatesh-raja-2b9b8720b/'}>
                    
                <h1 className="text-2xl font-bold text-blue-600 ml-2">
                <AiFillLinkedin/>
                </h1>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="h-[530px] w-[330px] bg-white shadow-2xl rounded-xl">
            <div className="h-[350px] w-[310px] ml-2 py-2 ">
              <img className="rounded-xl" src={team3} alt="team1_png" />
              <div className="flex justify-center mt-4">
                <h1 className="text-xl font-bold">Tamilmani Dhanapal</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="text-xs font-bold text-gray-600">
                Co-Founder & CTO
                </h1>
              </div>
              <div className="flex justify-center ml-3 mt-2">
                <h1 className="text-xs font-semibold text-gray-600/60 font-sans">
                  An Experienced CTO who specializes in app development. He has
                  a deep understanding of mobile technology and is constantly
                  seeking new ways to innovate in the field. passionate about
                  creating apps that solve real-world problems and enhance user
                  experience.
                </h1>
              </div>
              <div className="flex justify-center mt-3">
                <h1 className="font-Montserrat text-gray-700/50 text-lg ">Follow </h1>
                <NavLink to={'https://www.linkedin.com/in/freshtronics/'}>
                    
                <h1 className="text-2xl font-bold text-blue-600 ml-2">
                <AiFillLinkedin/>
                </h1>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
