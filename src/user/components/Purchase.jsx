import React from 'react'

function Purchase() {
  return (
        <div className='p-10 my-20 shadow rounded'>
        {/* duplicate book with status updation */}
        <div className="p-5 rounded mt-4 bg-gray-100">
            <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                    <h1 className="text-2xl">Title</h1>
                    <h2 className='text-xl'>Author</h2>
                    <h3 className="text-lg text-blue-600">$ price</h3>
                    <p className="text-justify">abstract</p>
                    <div className="mt-3 flex">
                        <img width={'150px'} src="https://static.vecteezy.com/system/resources/previews/023/629/827/original/web-button-icon-purchase-button-free-png.png" alt="pending" />
                    </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                    <img className='w-full' src="https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg" alt="Book" />
                    <div className="mt-4 flex justify-end">
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Purchase