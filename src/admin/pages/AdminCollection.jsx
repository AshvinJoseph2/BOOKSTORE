import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { getAllAdminBooksAPI, getAllUsersAPI, updateBookStatusAPI } from '../../services/allAPI'
import serverURl from '../../services/serverURL'
import { toast, ToastContainer } from 'react-toastify'



function AdminCollection() {
  const [tab, setTab] = useState(1)
  const [allBooks,setAllBooks] = useState([])
  const [allUsers,setAllUsers] = useState([])
  console.log(allBooks);
  
  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      if(tab==1){
        getAllBooks(token)
      }else{
        getAllUsers(token)
      }
    }
  },[tab])

  const getAllBooks=async(token)=>{
    const reqHeader = {
      "Authorization":`Bearer ${token}`
    }
    const result= await getAllAdminBooksAPI(reqHeader)
    if(result.status==200){
      setAllBooks(result.data)
    }else{
      console.log(result);
    }
  }

    const getAllUsers=async(token)=>{
    const reqHeader = {
      "Authorization":`Bearer ${token}`
    }
    const result= await getAllUsersAPI(reqHeader)
    if(result.status==200){
      setAllUsers(result.data)
    }else{
      console.log(result);
    }
  }

  const updateBookStatus = async(bookId)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      const result = await updateBookStatusAPI(bookId,reqHeader)
      if(result.status==200){
      toast.success("Book Approved!!!")
      getAllBooks(token)
    }else{
      console.log(result);
    }
    }
  }
  
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
              {
                allBooks?.length>0 ?
                allBooks?.map(book=>(
                  <div key={book?._id} className='shadow rounded p-3 m-4 md:my-0'>
                <img width={'100%'} height={'300px'} src={book?.imageURL} alt="book" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h3 className='text-blue-700 font-bold text-xl'>{book?.author}</h3>
                  <p>{book?.title}</p>
                  <p>$ {book?.discountPrice}</p>
                  {
                    book?.status!="approved"?
                    <button onClick={()=>updateBookStatus(book?._id)} className='bg-green-600 rounded text-white p-2 mt-2 w-full'>Approve</button>
                  :
                  <img className='mt-2' width={'50px'} src="https://static.vecteezy.com/system/resources/previews/010/152/436/original/tick-check-mark-icon-sign-symbol-design-free-png.png" alt="approved" />
                  }
                </div>
              </div>
                ))
                :
                <p>Loading...</p>
              }
            </div>
          }

          {
            tab == 2 &&
          <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate user card */}
              {
                allUsers?.length>0?
                allUsers?.map(user=>(
                  <div key={user?._id} className='bg-gray-200 rounded p-2 m-2'>
                <p className='text-red-600 font-bold text-md'>ID : {user?._id}</p>
                <div className="flex items-center mt-3">
                 {user?.picture?
                    <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src={user?.picture.startsWith("https://lh3.googleusercontent.com/")?user?.picture:`${serverURl}/uploads/${user?.picture}`} alt="user" />
                   :
                    <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="user" />

                  }
                  <div className="flex flex-col ml-3 w-full">
                    <h1 className="text-blue-600 font-bold text-lg">{user?.username}</h1>
                    <p>{user?.email}</p>
                  </div>
                </div>
              </div>
                ))
                :
                <p>Loading...</p>
              }
          </div>

          }

        </div>
        <ToastContainer position='top-center' autoClose={3000} theme='colored'/>
      </div>
      <Footer />
    </>
  )
}

export default AdminCollection