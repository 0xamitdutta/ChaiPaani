import React from 'react'

function Benefits() {
    return (
        <div className='bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 mt-10'>
                <img src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='mx-auto'/>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[#00df9a] font-bold font-lg uppercase py-1'>The Taste You've Been Missing</p>
                    <h1 className='text-3xl md:text-4xl font-bold py-2'>Best Tea In Town Is Here</h1>
                    <p className='px-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur maxime asperiores quia porro ratione pariatur voluptates ullam quisquam. Enim repudiandae perspiciatis aspernatur sunt molestias ullam distinctio illo soluta earum at!</p>
                    <button className='bg-black rounded-md px-6 py-3 text-white font-bold uppercase mt-6'>ORDER Now</button>
                </div>
            </div>
        </div>
    )
}

export default Benefits