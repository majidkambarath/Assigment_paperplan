import React from 'react'
import NavBar from '../../components/LandingPage/navbar/NavBar'
import Team from '../../components/Team/Team'
import Footer from '../../components/LandingPage/footer/Footer'
export default function TeamPage() {
  return (
    <div>
        <NavBar/>/
        <div className='mt-[60px]'>
        <Team/>
        </div>
       <Footer/>
    </div>
  )
}
