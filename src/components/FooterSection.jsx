import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

const FooterSection = () => {
  return (
    <footer className='bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
                {/* Brand Column */}
                <div className="lg:col-span-4">
                    <div className='flex gap-1 items-center'></div>
                    <p className="text-gray-600 mb-6 md:w-3/4">The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>

                    <div className='flex gap-4'>
                        <a href='#' className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"><FaFacebookF/></a>
                        <a href='#' className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"><FaTwitter className="w-5 h-5" /></a>
                        <a href='#' className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"><FaLinkedinIn className="w-5 h-5" /></a> 
                    </div>

                </div>

                {/*navigation */}
                <div  className="lg:col-span-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                            <div key={category}>
                                <h3 className="text-lg font-medium mb-4">{category}</h3>
                                <ul className="space-y-3">
                                    {links.map((link,index)=>(
                                        <li key={index}>
                                            <a href='#' className='text-gray-600 hover:text-gray-900'>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                

            </div>


            {/*footer bottom section*/}
            <div className='border-t border-gray-200 mt-12 pt-8'>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">Copyright © {new Date().getFullYear()} codetutorbd.com</p>
                    <p className="text-gray-600 text-sm">Created by Muhammad Shaheer</p>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default FooterSection