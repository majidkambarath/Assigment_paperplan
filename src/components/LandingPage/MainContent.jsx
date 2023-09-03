import React from "react";
import { Link, NavLink } from "react-router-dom";
import ChatBot from "../bot/ChatBot";
import leftSideImage from '../../assets/new1.jpg'
import { StartChatBotApi } from "../../api/user/signupApi";
function MainContent() {
  const handleclick = () => {
    StartChatBotApi().then((res) => {
      console.log(res.data);
    });
  };
  return (
    <main className="mt-12 mx-auto p-4  max-w-screen-xl">
      <div className="p-4 flex flex-col-reverse md:flex-col-reverse  sm:flex-col-reverse lg:flex-row justify-around items-center">
        <div>
          <h3 className="text-4xl  md:w-[500px] font-medium">
            {/* Get Your own{" "} */}
            <span className="text-">Make your clinic Smarter, with HealTether</span>
          </h3>
          <h3 className="font-semibold text-4xl text-[#19BCCC]">
            {/* in less than 7 minutes! 🚀 */}
          </h3>

          <div className="flex  flex-col md:flex-row gap-3 mt-4">
            <button className="bg-gradient-to-r hover:bg-gradient-to-l  from-[#98fb98] to-[#95aa95] rounded-full py-3 px-5 text-white text-2xl font-semibold">
              Start 15-days trial now
            </button>
            <NavLink to={"/booking"}>
              <button className="border border-green-600 rounded-full py-3 px-5 text-2xl font-semibold hover:shadow-md hover:bg-gray-100">
                {" "}
                Book a demo{" "}
              </button>
            </NavLink>
          </div>
          <p className=" mt-3 ml-3 text-lg">Takes less than 60s ⚡</p>
        </div>

        <div>
          <img
          className="w-[400px]"
            src={leftSideImage}
            alt=""
          />
        </div>
      </div>
      <Link to={'https://web.whatsapp.com/'}>
      
      <div
        onClick={handleclick}
        className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"
      >
        <div>
          <div>
            <ChatBot />
          </div>
        </div>
      </div>
      </Link>
      
    </main>
  );
}

export default MainContent;
