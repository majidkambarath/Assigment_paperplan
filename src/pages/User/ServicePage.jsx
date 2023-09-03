import React from 'react'
import NavBar from '../../components/LandingPage/navbar/NavBar'
import Services from '../../components/LandingPage/services/Services'
import Footer from '../../components/LandingPage/footer/Footer'
export default function ServicePage() {
  return (
    <div>
        <NavBar/>
        <div className='mt-[60px]'>
            <Services/>

            
        </div>
        <div className='-mt-4'>
        <Footer/>
        </div>
    </div>
  )
}
