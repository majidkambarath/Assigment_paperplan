import AskedQuestions from "./components/AskedQuestions"
import CompanyCarousel from "./components/CompanyCarousel"
import Contact from "./components/Contact"
import Features from "./components/Features"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import NavBar from "./components/NavBar"
import Sections from "./components/Sections"
import TrustCounts from "./components/TrustCounts"


function App() {
  return (
    <div className=''>
      <NavBar />
      <div className="mt-32">
      <MainContent />
      <CompanyCarousel />
      <Sections />
      <TrustCounts />
      <Features />
      <Contact />
      <AskedQuestions />
      <Footer />
      </div>
    </div>
  )
}

export default App
