import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(true)

    function handleNav() {
        setNav(!nav);
    }

    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <div className='flex items-center hover:cursor-pointer'>
                <h1 className='text-3xl font-bold text-[#00df9a]'>CHAI PAANI</h1>
                <img src="https://img.icons8.com/plasticine/100/null/matcha-tea.png"/>
            </div>
            <ul className='hidden md:flex '>
                <li className='p-4 font-medium hover:cursor-pointer hover:text-[#00df9a]'>Home</li>
                <li className='p-4 font-medium hover:cursor-pointer hover:text-[#00df9a]'>Company</li>
                <li className='p-4 font-medium hover:cursor-pointer hover:text-[#00df9a]'>About</li>
                <li className='p-4 font-medium hover:cursor-pointer hover:text-[#00df9a]'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 h-full w-[50%] border-r border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <ul className='pt-24 p-4'>
                    <li className='p-4 border-b border-b-gray-700'>Home</li>
                    <li className='p-4 border-b border-b-gray-700'>Company</li>
                    <li className='p-4 border-b border-b-gray-700'>About</li>
                    <li className='p-4 border-b border-b-gray-700'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar