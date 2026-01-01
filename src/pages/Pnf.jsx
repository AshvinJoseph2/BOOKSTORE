// import { useContext } from "react";
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routeGuardContext } from '../contextAPI/AuthContext'

function Pnf() {

  const {role,authorisedUser,setAuthorisedUser} = useContext(routeGuardContext)
  const navigate = useNavigate()

  const backHome = ()=>{
    if(role=="user"){
      navigate('/')
    }else{
      navigate('/admin/home')
    }
  }
  
  return (
    <div className='flex justify-center items-center pt-10'>
      <div style={{width:"700px",height:"600px"}}>
       <div className='flex flex-col justify-center items-center w-full p-10'> 
        <img width={'400px'} height={'200px'} src="../public/pnf.gif" alt="pnf" />
        <p>Oh No !</p>
        <h1 className='text-5xl font-bold m-3'>Look Like You're Lost</h1>
        <h4>The page you are looking for is not available</h4>
        <button onClick={backHome} className='font-bold m-10 p-4 bg-blue-400 text-white rounded'>HOME</button>
       </div>
      </div>
    </div>
  )
}

export default Pnf