import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {

const [toggle,setToggle] = useState(false)

  return (
    <>
    <Header/>
    <>
    <div className='flex flex-col justify-center items-center my-5'>
      <h1 className='text-3xl font-bold my-5'>Collections</h1>
      <div className='flex my-5'>
        <input placeholder='Search By Books Title' type="text" className='p-2 border border-gray-200 text-black w-100 placeholder-gray-600'/>
        <button className='p-2 bg-blue-900 text-white'>Search</button>
      </div>
    </div>
    {/* books card & filter */}
    <div className='md:grid grid-cols-4 p-5 md:px-20 mb-10'>
      {/* filter */}
      <div className='col-span-1'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-2xl'>Filter</h1>
          <button onClick={()=>setToggle(!toggle)} className='font-bold text-2xl md:hidden'><FaBars/></button>
        </div>
      {/* list of filter */}
       <div className={toggle?"block":"md:block hidden"}>
        {/* duplicate fiter items */}
        <div className="mt-3">
          <input type="radio" id="key1" name='filter'/>
          <label className='ms-3' htmlFor="key1" >category-name</label>
        </div>
        <div className="mt-3">
          <input type="radio" id="nofilter" name='filter'/>
          <label className='ms-3' htmlFor="nofilter" >No-filter</label>
        </div>
       </div>
      </div>
      {/* books card */}
      <div className='col-span-3'>
        <div className='md:grid grid-cols-4 mt-5 md:mt-0'>
            {/* duplicate book */}
            <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg" alt="book" />
              <div className='flex flex-col justify-center items-center mt-4'>
              <h3 className='text-blue-700 font-bold text-xl'>Author</h3>
              <p>title</p>
              <Link to={'/books/:id/view'} className='bg-blue-800 p-2 text-white mt-2'>View Book</Link>
              </div>
            </div>
             {/* duplicate book */}
            <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg" alt="book" />
              <div className='flex flex-col justify-center items-center mt-4'>
              <h3 className='text-blue-700 font-bold text-xl'>Author</h3>
              <p>title</p>
              <Link to={'/books/:id/view'} className='bg-blue-800 p-2 text-white mt-2'>View Book</Link>
              </div>
            </div>
             {/* duplicate book */}
            <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg" alt="book" />
              <div className='flex flex-col justify-center items-center mt-4'>
              <h3 className='text-blue-700 font-bold text-xl'>Author</h3>
              <p>title</p>
              <Link to={'/books/:id/view'} className='bg-blue-800 p-2 text-white mt-2'>View Book</Link>
              </div>
            </div> 
            {/* duplicate book */}
            <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg" alt="book" />
              <div className='flex flex-col justify-center items-center mt-4'>
              <h3 className='text-blue-700 font-bold text-xl'>Author</h3>
              <p>title</p>
              <Link to={'/books/:id/view'} className='bg-blue-800 p-2 text-white mt-2'>View Book</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
    <Footer/>
    </>
  )
}

export default Books