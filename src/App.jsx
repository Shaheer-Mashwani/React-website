
import './App.css'
import CompanyLogo from './components/CompanyLogo'
import ComponentFeature from './components/ComponentFeature'
import FooterSection from './components/FooterSection'
import Hero from './components/Hero'
import MonitorSection from './components/MonitorSection'
import Navbar from './components/Navbar'
import NewsletterSection from './components/NewsletterSection'
import Pricing from './components/Pricing'
import PurposeSection from './components/PurposeSection'
import ScheduleSection from './components/ScheduleSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'

function App() {


  return (
    <>
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-b-full blur-[80px] -z-10'></div>
      <div className='overflow-hidden'>
        <Navbar/>
        <Hero/>
        <CompanyLogo/>
        <PurposeSection />
        <ComponentFeature/>
        <ScheduleSection/>
        <MonitorSection />
        <Pricing />
        <ServicesSection />
        <TestimonialsSection/>
        <NewsletterSection />
        <FooterSection/>
      </div>
    </main>
    </>
  )
}

export default App
