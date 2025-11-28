import React from 'react'

function SellBook() {
  return (
    <div className='p-10 my-20 bg-gray-200 mx-5'>
        <h1 className='font-medium text-3xl text-center'>Book Details</h1>
        <div className="md:grid grid-cols-2 mt-10 w-full">
            <div className="px-3">
                <div className="mb-3">
                    <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
                </div>
                 <div className="mb-3">
                    <input type="text" placeholder='Author' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input type="text" placeholder='No.of pages' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input type="text" placeholder='Book Image URL' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input type="text" placeholder='Original Price' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input type="text" placeholder='Discount Price' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <textarea type="text" placeholder='Abstract' className='w-full h-50 p-2 rounded bg-white'/>
                </div> 
            </div>
            <div className="px-3">
                <div className="mb-3">
                    <input type="text" placeholder='Publisher' className='w-full p-2 rounded bg-white'/>
                </div>
                 <div className="mb-3">
                    <input type="text" placeholder='Language' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input type="text" placeholder='ISBN' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input type="text" placeholder='Category' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className='mb-3 flex justify-center items-center'>
                    <label htmlFor='uploadProfile'>
                        <input type="file" id="uploadProfile" hidden/>
                        <img className='w-80 p-5' src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="upload" />
                    </label>
                </div>
            </div>

        </div>
        <div className="p-3 w-full flex md:justify-end justify-center mt-8">
            <button className='py-2 px-3 rounded bg-gray-600 text-white hover:bg-white hover:text-gray-600'>RESET</button>
            <button className='py-2 px-3 rounded bg-blue-600 text-white hover:bg-white hover:text-blue-600 ms-5'>SUBMIT</button>
        </div>
    </div>
  )
}

export default SellBook