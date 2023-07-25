
import { useState } from 'react'
import logo from '../../assets/healtehter3.png'
import ClinicSection from './ClinicSection'
import BusinessSections from './BusinessSections'

function Sections() {
    const [change, setChange] = useState(false)
    return (
        <div className='mt-12'>
            <div className="text-center flex justify-center">
                <img src={logo} className='w-[150px]' alt="logo" />
            </div>

            <div className='flex justify-center gap-3 align-middle items-center mt-8'>
                <div className='bg-gray-500 py-0 px-0 rounded-full flex flex-wrap  text-white text-xl font-semibold'>
                    <button onClick={() => setChange(false)} className={`px-[40px] py-4 rounded-full ${!change ? 'bg-blue-500' : ''} `}>Clinics</button>
                    <button onClick={() => setChange(true)} className={`px-[40px] py-4 rounded-full ${change ? 'bg-blue-500' : ''}`}>Bussinesses</button>
                </div>
            </div>
            {
                !change && <ClinicSection />
            }

            {
                change && <BusinessSections/>
            }
        
           
        </div>
    )
}

export default Sections