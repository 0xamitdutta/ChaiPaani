import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { useState } from 'react';

function Membership() {
    const [amount, setAmount] = useState(0);

    const handlePayment = async (e) => {
        console.log(e);
        const response = await fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: 1000,
                currency: 'INR'
            })
        });
        const data = await response.json();
        console.log(data);

        const options = {
            "key": "rzp_test_vajRHXyTaNhoaN", // Enter the Key ID generated from the Dashboard
            "amount": "1000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Amit Corp", //your business name
            "description": "Test Transaction",
            "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response) {
                alert("Payment Done");
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Amit Dutta", //your customer's name
                "email": "amit.dutta@example.com",
                "contact": "8210849873", //Provide the customer's phone number for better conversion rates 
                "method": "upi"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#00df9a"
            }
        };

        let rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
    }

    return (
        <div className='text-black bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 mt-20 px-4 py-[10rem]'>
                <div className='w-full shadow-xl flex flex-col py-4 rounded-md hover:scale-105 duration-300'>
                    <img src={Single} alt="" className='w-20 mx-auto bg-white mt-[-3rem]' />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center font-bold text-3xl'>$14.99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>5 Free Cups</p>
                        <p className='py-2 border-b mx-8'>5 cities</p>
                        <p className='py-2 border-b mx-8'>Small Cups</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md px-6 py-3 text-black font-bold uppercase mt-6 mx-6' onClick={handlePayment}>Get Now</button>
                </div>

                <div className='w-full shadow-xl flex flex-col py-4 rounded-md hover:scale-110 duration-300'>
                    <img src={Double} alt="" className='w-20 mx-auto bg-white mt-[-3rem]' />
                    <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                    <p className='text-center font-bold text-3xl'>$27.50</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>10 Free Cups</p>
                        <p className='py-2 border-b mx-8'>8 cities</p>
                        <p className='py-2 border-b mx-8'>Small and Medium Cups</p>
                    </div>
                    <button className='bg-black rounded-md px-6 py-3 text-[#00df9a] font-bold uppercase mt-6 mx-6' onClick={handlePayment}>Get Now</button>
                </div>

                <div className='w-full shadow-xl flex flex-col py-4 rounded-md hover:scale-105 duration-300'>
                    <img src={Triple} alt="" className='w-20 mx-auto bg-white mt-[-3rem]' />
                    <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                    <p className='text-center font-bold text-3xl'>$39.99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>15 Free Cups</p>
                        <p className='py-2 border-b mx-8'>10 cities</p>
                        <p className='py-2 border-b mx-8'>All Cups</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md px-6 py-3 text-black font-bold uppercase mt-6 mx-6' onClick={handlePayment}>Get Now</button>
                </div>
            </div>
        </div>
    )
}

export default Membership