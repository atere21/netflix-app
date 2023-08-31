import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='text-white py-28'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-blue-600 font-bold p-2'>Welcome to ABC Financial Services</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold'>At our Organization</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-xl sm:text-4xl text-xl font-bold py-4'>We are dedicated to providing you with exceptional financial services tailored to your needs. Whether you're looking to manage your savings, plan for the future, or invest wisely, our team of experts is here to guide you every step of the way.</p>
           
        </div>
        <p className='md:text-2xl text-xl font-bold text-white'>Monitor your financial transactions on our platforms</p>
      
        <Link to ='/landing'>
       <button className='bg-blue-600 w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black'>My Dashboard</button>
       </Link>
        </div>
    </div>
  )
}

export default Hero