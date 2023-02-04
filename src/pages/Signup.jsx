import React from 'react'

function Signup() {
  return (
    <>
    <div className='w-full h-screen '>
      <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/d9bb09ac-979e-4957-9dd2-6df5188291a8/NG-en-20230130-popsignuptwoweeks-perspective_alpha_website_medium.jpg'/>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
       <div className='fixed w-full px-4 py-24 z-50'>
         <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>

               <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                       <form className='w-full flex flex-col '>
                        <input className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email'/>
                        <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password' autoComplete='current-password' />
                             
                             <button className='bg-red-600 py-3 my-6 rounded font-bold ' >Sign Up</button>
                       </form>
               </div>

         </div>
       </div>
    </div>
    </>
  )
}

export default Signup