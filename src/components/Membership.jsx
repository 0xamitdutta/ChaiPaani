import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Membership() {
    return (
        <div className='text-black bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 mt-20 px-4 py-[10rem]'>
                <div className='w-full shadow-xl flex flex-col py-4 rounded-md hover:scale-105 duration-300'>
                    <img src={Single} alt="" className='w-20 mx-auto bg-white mt-[-3rem]'/>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center font-bold text-3xl'>$14.99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>5 Free Cups</p>
                        <p className='py-2 border-b mx-8'>5 cities</p>
                        <p className='py-2 border-b mx-8'>Small Cups</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md px-6 py-3 text-black font-bold uppercase mt-6 mx-6'>Get Now</button>
                </div>

                <div className='w-full shadow-xl flex flex-col py-4 rounded-md hover:scale-110 duration-300'>
                    <img src={Double} alt="" className='w-20 mx-auto bg-white mt-[-3rem]'/>
                    <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                    <p className='text-center font-bold text-3xl'>$27.50</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>10 Free Cups</p>
                        <p className='py-2 border-b mx-8'>8 cities</p>
                        <p className='py-2 border-b mx-8'>Small and Medium Cups</p>
                    </div>
                    <button className='bg-black rounded-md px-6 py-3 text-[#00df9a] font-bold uppercase mt-6 mx-6'>Get Now</button>
                </div>

                <div className='w-full shadow-xl flex flex-col py-4 rounded-md hover:scale-105 duration-300'>
                    <img src={Triple} alt="" className='w-20 mx-auto bg-white mt-[-3rem]'/>
                    <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                    <p className='text-center font-bold text-3xl'>$39.99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>15 Free Cups</p>
                        <p className='py-2 border-b mx-8'>10 cities</p>
                        <p className='py-2 border-b mx-8'>All Cups</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md px-6 py-3 text-black font-bold uppercase mt-6 mx-6'>Get Now</button>
                </div>
            </div>
        </div>
    )
}

export default Membership