import React from 'react'
import MonitorCard from '../assets/monitor-card.webp'

const MonitorSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
    <div className='flex flex-col md:flex-row items-center justify-between gwp-12 md:gap-24'>
        {/* left section */}
        <div className='md:w-1/2 w-full'>
            <p className='text-green-600 font-semibold'>MONITOR</p>
            <h2 className='text-3xl md:text-4xl font-bold text-neutral-900  mt-4 mb-6'>Introducing best mobile carousels</h2>
            <p className='text-gray-600 mb-8 md:w-3/5'>Take control of your time and boost your productivity withh our intelligent scheduling sysstem. Automate appoinments, manage the availability, and deliver exceptional customer experiences through seamless calendar managment. </p>
            <a href='a' className='text-blue-500 font-semibold flex items-centergap-2 hover:gap-4 transition-all'>Explore scheduling features </a>
        </div>
        

        {/*Right section */}
        <div className='md:w-1/2 w-full'>
            <img src={MonitorCard} alt='Monitor image' className='w-full h-auto '></img>
        </div>

    </div>
</section>
  )
}

export default MonitorSection