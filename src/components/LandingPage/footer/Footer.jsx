
import logo from '../../../assets/newlogo.png'
function Footer() {
    return (
        <footer className='bg-teal-600 mt-4 pb-8'>
            <div className='mx-auto p-4  max-w-screen-xl '>
                <a href="#" className="flex items-center">
                    <img src={logo} className="md:w-[170px] w-[200px]" alt=" Logo" />
                </a>
                <div className='flex  md:flex-row flex-col  '>

                <div className='md:w-[500px]   text-white font-bold '>
                    <h1>Join us on this transformative journey as we redefine healthcare together. HealTether is here to meet all your healthcare needs, providing convenient, accessible, and high-quality care at your fingertips.</h1>
                </div>
                <div>
                    
                </div>
                <div className='md:ml-[140px] mt-4 md:mt-0'>
                     <h1 className='text-white font-bold'>Useful Links</h1>
                     <div className='flex flex-col gap-2 mt-3 text-white cursor-pointer'>
                     <p>About  us</p>
                    <p>Cancellation Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                     </div>
                   
                </div>
                <div className='md:ml-[100px] mt-4 md:mt-0'>
                     <h1 className='text-white font-bold'>Contact Us</h1>
                     <div className='flex flex-col gap-2 mt-3 text-white cursor-pointer'>
                     <p>No.12(2) Veerazhagamman Street</p>
                    <p>Bodinayakanur</p>
                    <p>Theni Tamil Nadu 625513</p>
                    <p> <strong>Phone</strong>: +91-9080857909</p>
                    <p><strong>Email</strong> : hello@healtether.com</p>
                     </div>
                   
                </div>
                </div>

                <div className='flex justify-center flex-wrap mt-16 md:mt-12'>
                    <div className='text-white'>
                        <p>Copyright 2023 Healtehter communication Pvt. Ltd All rights Reserved</p>
                    </div>
                    {/* <div className='flex gap-2 justify-center items-center'>
                        <div className='rounded-full  bg-blue-600 text-white h-8 w-8 cursor-pointer'>
                            <p className='text-center font-bold mt-1'>in</p>
                        </div>

                        <div className='rounded-full  bg-blue-600 text-white h-8 w-8 cursor-pointer'>
                            <p className='text-center mt-1 font-bold'>f</p>
                        </div>

                        <div className='rounded-full  bg-blue-600 text-white h-8 w-8 cursor-pointer'>
                            <p className='text-center mt-1 font-bold'>t</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer