import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({registerURL}) {
  const [viewPassword,setViewPassword] = useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(/landing.jpeg)] bg-cover bg-center text-white'>
      <div className='p-10'>
        <h1 className='text-center font-bold text-3xl'>BOOK STORE</h1>
        <div style={{width:"400px"}} className='bg-black text-white flex p-5 justify-center items-center flex-col my-5'>
          {/* userlogo */}
          <div style={{width:'100px',height:'100px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
            <FaUser className='text-3xl'/>
          </div>
          {/* form title */}
          <h1 className='text-2xl'> {registerURL?"Register":"Login"} </h1>
          {/* form */}
        <form className=" my-5 w-full">
          {/* username-register */}
          {
            registerURL &&
            <input type="text" placeholder='Username' className="bg-white p-2 w-full rounded mb-5 text-black" />
          }
          {/* email */}
          <input type='text' placeholder='EMail' className="bg-white p-2 w-full rounded mb-5 text-black" />
          {/* password */}
          <div className='flex text-center'>
          <input type={viewPassword?"text":"password"} placeholder='Password' className="bg-white p-2 w-full rounded mb-5 text-black" />
          {
            viewPassword ?
            <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)} className='text-gray-500' style={{marginLeft:'-30px',marginTop:'10px'}}/>
            :
            <FaEye onClick={()=>setViewPassword(!viewPassword)} className='text-gray-500' style={{marginLeft:'-30px',marginTop:'10px'}}/>}
          </div>
          {/* Forgot password */}
          {
            !registerURL &&
            <div className='flex justify-between mb-5'> 
            <p className='text-xs text-orange-300'>*Never share your passwrd with others</p>
            <button className='text-xs underline'>Forgot password</button>
          </div>}
          {/* btn register / login */}
          <div className='text-center'>
            {
              registerURL ?
              <button className='bg-green-700 p-2 w-full rounded'>Register</button>
              :
              <button className='bg-green-700 p-2 w-full rounded'>Login</button>
            }
          </div>
          {/* google authentication */}
          <div className='my-5 text-center'>
            {
              registerURL ?
              <p className='text-blue-500'>Already a user?<Link to={'/login'} className='underline ms-3'>Login</Link></p>
              :
              <p className='text-blue-500'>New user?<Link to={'/register'} className='underline ms-3'>Register</Link></p>
            }
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Auth