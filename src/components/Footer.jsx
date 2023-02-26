import React from 'react'
import {FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

function Footer() {
    return (
        <div className='text-white'>
            <div className='max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-12'>
                <div>
                    <h1 className='text-3xl font-bold text-[#00df9a]'>CHAI PAANI</h1>
                    <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, totam? Perferendis quis corrupti eveniet necessitatibus tenetur vero quo omnis exercitationem</p>
                    <div className='flex justify-between md:width-[75%]'>
                        <FaFacebookSquare size={30} className='hover:cursor-pointer'/>
                        <FaGithubSquare size={30} className='hover:cursor-pointer'/>
                        <FaInstagramSquare size={30} className='hover:cursor-pointer'/>
                        <FaTwitterSquare size={30} className='hover:cursor-pointer'/>
                    </div>
                </div>

                <div className='lg:col-span-2 flex justify-between mt-4'>
                    <div>
                        <h6 className='font-medium text-gray-400'>About Us</h6>
                        <ul className='py-2 text-sm hover:cursor-pointer'>
                            <li className='py-2'>Heritage</li>
                            <li className='py-2'>Blog</li>
                            <li className='py-2'>Chai House</li>
                            <li className='py-2'>Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className='font-medium text-gray-400'>Responsibility</h6>
                        <ul className='py-2 text-sm hover:cursor-pointer'>
                            <li className='py-2'>Community</li>
                            <li className='py-2'>Ethical Sourcing</li>
                            <li className='py-2'>Environment</li>
                            <li className='py-2'>Diversity</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className='font-medium text-gray-400'>Services</h6>
                        <ul className='py-2 text-sm hover:cursor-pointer'>
                            <li className='py-2'>Delivery</li>
                            <li className='py-2'>Gifting</li>
                            <li className='py-2'>Customer Service</li>
                            <li className='py-2'>FAQs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer