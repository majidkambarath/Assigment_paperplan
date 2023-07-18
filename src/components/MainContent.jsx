

function MainContent() {
  return (
    <main className="mt-12 mx-auto p-4  max-w-screen-xl">
        <div className="p-4 flex flex-col-reverse md:flex-col-reverse  sm:flex-col-reverse lg:flex-row justify-around items-center">
            <div> 
            <h3 className="text-4xl  md:w-[500px] font-medium">Get Your own <span className="text-[#19BCCC]">Digital clinic on WhatsApp</span></h3>
            <h3 className="font-semibold text-4xl text-[#19BCCC]">in less than 7 minutes! 🚀</h3>

            <div className="flex  flex-col md:flex-row gap-3 mt-4">
                <button className="bg-gradient-to-r hover:bg-gradient-to-l  from-[#4D63DD] to-[#22A1F5] rounded-full py-3 px-5 text-white text-2xl font-semibold">Start 15-days trial now</button>
                <button className="border border-blue-600 rounded-full py-3 px-5 text-2xl font-semibold hover:shadow-md hover:bg-gray-100"> Book a demo </button>
            </div>
            <p className=" mt-3 ml-3 text-lg">Takes less than 60s ⚡</p>
            
            </div>

            <div>
                <img src="https://www.paperplanetech.co/static/media/hero-image.2f231d9891424705d6d5129e181acf92.svg" alt="" />
            </div>
        </div>
    </main>
  )
}

export default MainContent