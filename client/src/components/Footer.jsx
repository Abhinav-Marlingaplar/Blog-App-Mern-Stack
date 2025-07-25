import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
    return (
        <div className='px-6 py-10 md:px-16 lg:px-24 xl:px-32 bg-[#E8FFF8] border border-[#A6ABA9]'>
            <div className="flex justify-between w-full">
                <div>
                    <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
                    <p className='max-w-[410px] mt-6'>
                    AI-powered blogging app to create and publish content in 
                    <br/> finance, health, technology, and education effortlessly.
                    </p>
                </div>
                <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                    {
                        footer_data.map((section, index) => (
                            <div key={index}>
                                <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                                <ul className='text-sm space-y-1'>
                                    {
                                        section.links.map((link, i) => (
                                            <li key={i}>
                                                <a href="#" className='hover:underline transition'>
                                                    {link}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>

            <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
                Copyright 2025 © QuickBlog - All Right Reserved.<br/>
                Application built by Abhinav Marlingaplar.
            </p>
        </div>
    )
}

export default Footer
