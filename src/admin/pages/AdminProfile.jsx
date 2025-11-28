import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaPen } from 'react-icons/fa'


function AdminProfile() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">

          <h1 className="text-center mb-10 font-bold text-3xl">Settings</h1>
          <div className="md:grid grid-cols-2 items-center">
            <div>
              <p className='text-xl'>Welcome Admin</p>
              <p className='text-justify'>Welcome to the Admin Profile Settings section of the Book Management System.
                This panel allows administrators to manage their personal account information and customize their workspace for a secure and efficient management experience.
                Administrators can easily update key personal details such as their full name, username, email address, and contact number. This ensures that the system always reflects up-to-date information for communication and administrative coordination.</p>
              <p className='text-lg my-5'>What can you manage in these Section :</p>
              <ul>
                <li>Personal Information Management</li>
                <li>Security & Password Controls</li>
                <li>Profile Image Upload</li>
                <li>Notification & Preference Settings</li>
                <li>Activity Log Overview</li>
              </ul>
              <p className='text-justify my-5'>The Admin Profile Settings module is designed not only to support personalization but also to enhance security and efficiency across the entire Book Management System. By giving administrators full visibility and control over their account, the system ensures:Improved accountability and transparency,Higher security through routine credential updates,A personalized and seamless admin experience,Better communication through accurate contact information</p>
            </div>
            <div className="flex justify-center items-center flex-col m-5 bg-blue-100 p-10 rounded">
              <label htmlFor="userProfile">
                <input type="file" id='userProfile' hidden />
                <img className='z-52' style={{ width: "150px", height: "150px", borderRadius: "50%" }} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="profile" />
                <button className='bg-blue-300 z-53 text-white py-2 px-3 rounded' style={{ marginLeft: "75px", marginTop: "-20px" }}><FaPen /></button>
              </label>
              <div className='mt-10 mb-3 w-full px-5'>
                <input type="text" placeholder='Username' className='w-full rounded bg-white p-2' />
              </div>
              <div className='mb-3 w-full px-5'>
                <input type="text" placeholder='New Password' className='w-full rounded bg-white p-2' />
              </div>
              <div className='mb-3 w-full px-5'>
                <input type="text" placeholder='Conform Password' className='w-full rounded bg-white p-2' />
              </div>
              <div className='flex w-full justify-end px-5 mt-5'>
                <button className='bg-yellow-600 text-white px-3 py-2 rounded'>RESET</button>
                <button className='bg-green-600 ms-5 text-white px-3 py-2 rounded'>UPDATE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminProfile