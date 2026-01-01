import React, { useEffect, useState } from 'react'
import { getAllUserProfileBooksAPI, removeBookAPI } from '../../services/allAPI';
import { all } from 'axios';

function BookStatus() {

    const [allBooks,setAllBooks] = useState([])
    console.log(allBooks);

    useEffect(()=>{
        getAllUserProfileBooks()
    },[])
    
    const getAllUserProfileBooks = async()=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Authorization":`Bearer ${token}`
            }
            const result = await getAllUserProfileBooksAPI(reqHeader)
            if(result.status==200){
                setAllBooks(result.data)
            }else{
                console.log(result);
            }
        }
    }

    const removeBook = async(id)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Authorization":`Bearer ${token}`
            }
            const result = await removeBookAPI(id,reqHeader)
            if(result.status==200){
                getAllUserProfileBooks()
            }else{
                console.log(result);
            }
        }
    }


  return (
    <div className='p-10 my-20 shadow rounded'>
        {/* duplicate book with status updation */}
        {
            allBooks?.length>0?
            allBooks?.map(books=>(
                        <div key={books?._id} className="p-5 rounded mt-4 bg-gray-100">
            <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                    <h1 className="text-2xl">{books?.title}</h1>
                    <h2 className='text-xl'>{books?.author}</h2>
                    <h3 className="text-lg text-blue-600">${books?.discountPrice} price</h3>
                    <p className="text-justify">{books?.abstract}</p>
                    <div className="mt-3 flex">
                        {
                            books?.status=="pending"?
                            <img width={'150px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" />
                            :books?.status=="approved"?
                            <img width={'120px'} src="http://www.pngall.com/wp-content/uploads/2/Approved-Stamp.png" alt="Approved" />
                            :
                            <img width={'120px'} src="https://pngimg.com/uploads/sold_out/sold_out_PNG14.png" alt="Sold" />

                        }
                    </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                    <img className='w-full' src={books?.imageURL} alt="Book" />
                    <div className="mt-4 flex justify-end">
                        <button onClick={()=>removeBook(books?._id)} className='p-2 text-white bg-red-600 rounded'>Delete</button>
                    </div>
                </div>
            </div>
        </div>

            ))
            :
            <p className="text-center font-bold">No Books Added Yet...</p>
        }
    </div>
  )
}

export default BookStatus