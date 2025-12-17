import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify'
import { addBookAPI } from '../../services/allAPI';


function SellBook() {
    const [bookDetails,setBookDetails] = useState({
        title:"",author:"",pages:"",imageURL:"",price:"",discountPrice:"",abstract:"",publisher:"",language:"",isbn:"",category:"",uploadImg:[]
    })
    const [preview,setPreview] = useState("")
    const [previewList,setPreviewList] = useState([])

    console.log(bookDetails);
    
    const handleBookImageUpload = (e)=>{
        // console.log(e.target.files[0]);
        const file = e.target.files[0]
        const uploadImageArray = bookDetails.uploadImg
        uploadImageArray.push(file)
        setBookDetails({...bookDetails,uploadImg:uploadImageArray})
        const url = URL.createObjectURL(file)
        setPreview(url)
        const demoPreviewList = previewList
        demoPreviewList.push(url)
        setPreviewList(demoPreviewList)
    }

    const handleResetForm = ()=>{
        setBookDetails({
        title:"",author:"",pages:"",imageURL:"",price:"",discountPrice:"",abstract:"",publisher:"",language:"",isbn:"",category:"",uploadImg:[]
        })
        setPreview("")
        setPreviewList([])
    }

    const handleUploadBookFrom = async ()=>{
        // check all fields have values 
        const{title,author,pages,imageURL,price,discountPrice,abstract,publisher,language,isbn,category,uploadImg}=bookDetails
        if(!title || !author || !pages || !imageURL || !price || !discountPrice || !abstract || !publisher || !language || !isbn || !category || uploadImg.length==0){
            toast.info("Please fill the form completely!!!")
        }else{
            const token = sessionStorage.getItem("token")
            if(token){
                const reqHeader = {
                    "Authorization":`Bearer ${token}`
                }
                const reqBody = new FormData()
                for(let key in bookDetails){
                    if(key !="uploadImg"){
                        reqBody.append(key,bookDetails[key])
                    }else{
                        uploadImg.forEach(item=>{
                            reqBody.append("uploadImg",item)
                        })
                    }
                }
                const result = await addBookAPI(reqBody,reqHeader)
                if(result.status==200){
                    toast.success("Book added Successfully!!!")
                }else if(result.status==409){
                    toast.warning(result.response.data)
                }else{
                    toast.error("SomeThing went Wrong")
                    console.log(result);
                }
                handleResetForm()
            }
        }
    }

  return (
    <div className='p-10 my-20 bg-gray-200 mx-5'>
        <h1 className='font-medium text-3xl text-center'>Upload Book Details</h1>
        <div className="md:grid grid-cols-2 mt-10 w-full">
            <div className="px-3">
                <div className="mb-3">
                    <input value={bookDetails.title} onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
                </div>
                 <div className="mb-3">
                    <input value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})}  type="text" placeholder='Author' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input value={bookDetails.pages} onChange={e=>setBookDetails({...bookDetails,pages:e.target.value})}  type="text" placeholder='No.of pages' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input value={bookDetails.imageURL} onChange={e=>setBookDetails({...bookDetails,imageURL:e.target.value})}  type="text" placeholder='Book Image URL' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})}  type="text" placeholder='Original Price' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})}  type="text" placeholder='Discount Price' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <textarea value={bookDetails.abstract} onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})}  type="text" placeholder='Abstract' className='w-full h-50 p-2 rounded bg-white'/>
                </div> 
            </div>
            <div className="px-3">
                <div className="mb-3">
                    <input value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})}  type="text" placeholder='Publisher' className='w-full p-2 rounded bg-white'/>
                </div>
                 <div className="mb-3">
                    <input value={bookDetails.language} onChange={e=>setBookDetails({...bookDetails,language:e.target.value})}  type="text" placeholder='Language' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})}  type="text" placeholder='isbn' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className="mb-3">
                    <input value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})}  type="text" placeholder='Category' className='w-full p-2 rounded bg-white'/>
                </div> 
                <div className='mb-3 flex justify-center items-center'>
                    <label htmlFor='uploadProfile'>
                        <input onChange={e=>handleBookImageUpload(e)} type="file" id="uploadProfile" hidden/>
                        <img className='w-80 p-5' src={preview?preview:"https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"} alt="upload" />
                    </label>
                </div>
                {
                  preview &&  
                <div className="flex items-center justify-center">
                    {
                        previewList?.map((bookImgURL,index)=>(
                            <img key={index} width={'70px'} height={'70px'} className='mx-2' src={bookImgURL} alt="book image" />
                        ))
                    }
                    {
                     previewList.length<3 &&   
                    <label htmlFor="bookUpload">
                        <input onChange={e=>handleBookImageUpload(e)} type="file" id="bookUpload" hidden/>
                        <FaPlus className='text-3xl ms-2'/>
                    </label>
                    }
                </div>}
            </div>

        </div>
        <div className="p-3 w-full flex md:justify-end justify-center mt-8">
            <button onClick={handleResetForm} className='py-2 px-3 rounded bg-gray-600 text-white hover:bg-white hover:text-gray-600'>RESET</button>
            <button onClick={handleUploadBookFrom} className='py-2 px-3 rounded bg-blue-600 text-white hover:bg-white hover:text-blue-600 ms-5'>ADD BOOK</button>
        </div>
        <ToastContainer position='top-center' autoClose={3000} theme='colored'/>
    </div>
  )
}

export default SellBook