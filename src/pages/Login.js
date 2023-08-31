import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, logIn } = UserAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await logIn(email, password);
        navigate('/home')
      } catch (error) {
        console.log(error);
        setError(error.message)

      }
    };


  return (
    <>
    <div className='w-full h-screen '>
      <img className=' sm:block absolute w-full h-full object-cover' src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jaWFsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
       <div className='fixed w-full px-4 py-24 z-50'>
         <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>

               <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign In</h1>
                      {error ? <p className='p-3 bg-blue-600 my-2'>{'error'} </p>:null} 
                      
                       <form onSubmit={handleSubmit}
                       className='w-full flex flex-col '>
                        <input onChange={(e) => setEmail(e.target.value)}
                         className='p-3 my-2 bg-gray-600 rounded' type='email number'  placeholder='Email or phone number' autoComplete='email'/>
                        <input onChange={(e) => setPassword(e.target.value)}
                         className='p-3 my-2 bg-gray-600 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                             
                             <button className='bg-blue-600 py-3 my-6 rounded font-bold ' >Sign In</button>
                       
                       <div className='flex justify-between items-center text-sm text-gray-600'>
                        <p>
                            <input className='mr-2' type="checkbox"/> Remember me
                        </p>
                        <p>Need Help?</p>
                       </div>
                       <p className='py-4'><span className='mr-2'>New?
                        </span>
                        {''} <Link to ='/signup'>Sign Up now
                            </Link>
                        </p>
                       
                       </form>
               </div>

         </div>
       </div>
    </div>
    </>
  )
}

export default Login