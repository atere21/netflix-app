import React from 'react';
import Landing from './Landing';

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jaWFsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'></h1>
        </div>
      </div>
      <Landing/>
    </>
  );
};

export default Account;