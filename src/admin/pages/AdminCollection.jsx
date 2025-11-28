import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'



function AdminCollection() {
  const [tab, setTab] = useState(1)
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4">
          <h1 className="text-center my-5 font-bold text-3xl">All Resources</h1>
          <div className="flex justify-center mb-5 text-xl font-semibold">
            <p onClick={() => setTab(1)} className={tab == 1 ? 'text-blue-600 border-gray-300 p-2 border-t border-l border-r' : 'border-gray-300 p-2 border-b '}>Books</p>
            <p onClick={() => setTab(2)} className={tab == 2 ? 'text-blue-600 border-gray-300 p-2 border-t border-l border-r' : 'border-gray-300 p-2 border-b '} >Users</p>
          </div>
          {
            tab == 1 &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* duplicate book card */}
              <div className='shadow rounded p-3 m-4 md:my-0'>
                <img width={'100%'} height={'300px'} src="https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg" alt="book" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h3 className='text-blue-700 font-bold text-xl'>Author</h3>
                  <p>title</p>
                  <p>$ 34</p>
                  <button className='bg-green-600 rounded text-white p-2 mt-2 w-full'>Approve</button>
                </div>
              </div>
            </div>
          }

          {
            tab == 2 &&
          <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate user card */}
              <div className='bg-gray-200 rounded p-2 m-2'>
                <p className='text-red-600 font-bold text-md'>ID-386868-6328688-9</p>
                <div className="flex items-center mt-3">
                  <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="user" />
                  <div className="flex flex-col ml-3 w-full">
                    <h1 className="text-blue-600 font-bold text-lg">Username</h1>
                    <p>Email</p>
                  </div>
                </div>
                </div>
          </div>

          }

        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminCollection