import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function AdminSidebar() {
  return (
    <div className='bg-blue-200 md:min-h-screen h-fit py-10'>
      {/* image */}
      <div className="flex justify-center">
        <img style={{borderRadius:"50%",width:"100px",height:"100px"}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="profile" />
      </div>
      {/* name */}
      <h1 className='text-xl font-bold my-5 text-center'>Name</h1>
      {/* nav link */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="mt-3">
          <Link to={'/admin/home'} className='flex items-center'><FaChartSimple className='me-1'/>Dashbord</Link>
        </div>
        <div className="mt-3">
          <Link to={'/admin/collections'} className='flex items-center'><FaDatabase className='me-1'/>Collections</Link>
        </div>
        <div className="mt-3">
          <Link to={'/admin/profile'} className='flex items-center'><FaGear className='me-1'/>Settings</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar

