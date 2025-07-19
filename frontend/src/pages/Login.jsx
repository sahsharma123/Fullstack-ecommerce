import React, { useState } from 'react'

const Login = () => {
  const [currentState,setCurrentState]=useState('Sign Up');

  const onSubmitHandler =async (event)=>{
event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 mt-2'/>
      </div>
     {currentState ==='Login' ?'' :<input type="text" className='border w-full px-3 py-2 border-gray-800' placeholder='Name' required/>}

       <input type="email" className='border w-full px-3 py-2 border-gray-800' placeholder='Email' required />
        <input type="password" className='border w-full px-3 py-2 border-gray-800' placeholder='Password ' required />

        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot password ?</p>
          {
            currentState === 'Login' ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p> : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login here
            </p>
          }
        </div>
        <button className='bg-black text-white px-3 py-2 mt-4 cursor-pointer'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>

    </form>
  )
}

export default Login
