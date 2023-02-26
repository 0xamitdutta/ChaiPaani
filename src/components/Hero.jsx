import React from 'react';
import Typed from 'react-typed'

function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w-[800] mt-10 mx-auto text-center flex flex-col justify-center items-center'>
                <img src="https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='max-w-[800px] mb-10'/>
                <p className='text-[#00df9a] text-2xl font-bold p-2'>The comforting warmth and diverse flavors of tea</p>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold p-2'>The perfect hug in a cup</h1>
                <div className='flex items-center gap-4 text-xl md:text-3xl lg:text-4xl font-bold p-2'>
                    <p>The right antioxidants to reduce</p>
                    <Typed strings={['Heart, Cancer, and Alzheimers']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                    />
                </div>
                <p className='text-xl font-bold text-gray-500 p-1'>Chai is not just a drink, it's a drink to reawaken your soul placed in a cup</p>
                <button className='bg-[#00df9a] rounded-md px-6 py-3 text-black font-bold uppercase mt-6'>Buy Now</button>
            </div>
        </div>
    )
}

export default Hero