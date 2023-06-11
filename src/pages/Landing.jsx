import React from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <>
      <div className='w-full text-white '>
        <img
          className='w-full h-screen object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen '></div>
        <div className='absolute top-[20%] p-4 md:p-8 my-10'>
          <h1 className='text-2xl md:text-4xl font-bold'>Recreating the magic of Netflix with our captivating and user-friendly streaming platform.</h1>
          
          <p className='my-4'> Experience the Ultimate Streaming Adventure with Our Netflix Clone, a Feature-rich Platform that Brings Joy, Variety, and Seamless Viewing to Your Fingertips.</p>
          <Link to='/home' >
            <button className='text-white bg-red-800 rounded-md p-2 my-8 hover:bg-red-600'>
                See Netflix-Clone
            </button>
            </Link>
        
        </div>
           
      </div>
      
    </>
  );
};

export default Landing
