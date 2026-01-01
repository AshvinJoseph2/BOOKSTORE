import React,{useState,useEffect} from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaPen } from 'react-icons/fa'
import {  useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { editUserAPI } from '../../services/allAPI'
import serverURl from '../../services/serverURL'



function AdminProfile() {
    const [userDetails,setUserDetails] = useState({
    username:"",password:"",cpassword:"",picture:"",role:"",bio:"",id:""
  })
  const [existingUserImage,setExistingUserImage] = useState("")
  const [preview,setPreview] = useState("")
  const [pswdMatch,setPswdMatch] = useState(true)
  const navigate = useNavigate()

  // console.log(userDetails);
  
  useEffect(()=>{
    if(sessionStorage.getItem("user")){
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({...userDetails,username:user.username,role:user.role,bio:user.bio,id:user._id})
        setExistingUserImage(user.picture)
    }
  },[])

  const handlePictureUpdate = (e)=>{
    setUserDetails({...userDetails,picture:e.target.files[0]})
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
  }

  const handleResetForm = ()=>{
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({username:user.username,role:user.role,bio:user.bio,password:"",cpassword:"",id:user._id})
    setExistingUserImage(user.picture)
    setPreview("")
  }

  const checkPasswordMatch = (data)=>{
    setUserDetails({...userDetails,cpassword:data})
    userDetails.password == data ? setPswdMatch(true) : setPswdMatch(false)
  }

  const handleUpdateUser = async()=>{
    const {username,password,cpassword,bio,id,picture} = userDetails
    if(!username || !password || !cpassword ){
        toast.info("Please fill the form completely")
    }else if(pswdMatch){
        // api call
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Authorization":`Bearer ${token}`
            }
            const reqBody = new FormData()
            for(let key in userDetails){
                if(key != "picture"){
                    reqBody.append(key,userDetails[key])
                }else{
                    preview ? reqBody.append("picture",userDetails.picture) : reqBody.append("picture",existingUserImage)
                }
            }
            // api call 
            const result = await editUserAPI(id,reqBody,reqHeader)
            if(result.status==200){
                toast.success("Profile updated successfully...")
                setTimeout(()=>{
                    sessionStorage.clear()
                    navigate('/login')
                },2000);
            }else{
                console.log(result);
                toast.error("Something went wrong!!!")
            }
        }
    }else{
        toast.warning("Operation failed!!!")
    }
  }
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
                        <input onChange={e=>handlePictureUpdate(e)} type="file"  id='userProfile' hidden/>
                        {
                            existingUserImage==""?
                             <img className='z-52' style={{width:"150px",height:"150px",borderRadius:"50%"}} src={preview?preview:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"} alt="profile" />
                            :
                             existingUserImage.startsWith("https://lh3.googleusercontent.com/")?
                            <img className='z-52' style={{width:"150px",height:"150px",borderRadius:"50%"}} src={preview?preview:existingUserImage} alt="profile" />
                            :
                            <img className='z-52' style={{width:"150px",height:"150px",borderRadius:"50%"}} src={preview?preview:`${serverURl}/uploads/${existingUserImage}`} alt="profile" />

                        }
                        <button className='bg-blue-400 z-53 text-white py-2 px-3 rounded' style={{marginLeft:"75px",marginTop:"-10px"}}><FaPen/></button>
                    </label>
                    <div className='mt-10 mb-3 w-full px-5'>
                        <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className='w-full rounded border border-gray-300 p-2' />
                    </div>
                    <div className='mb-3 w-full px-5'>
                        <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})}  type="password" placeholder='New Password' className='w-full rounded border border-gray-300 p-2' />
                    </div>
                    <div className='mb-3 w-full px-5'>
                        <input value={userDetails.cpassword} onChange={e=>checkPasswordMatch(e.target.value)}  type="password" placeholder='Conform Password' className='w-full rounded border border-gray-300 p-2' />
                    </div>
                    {!pswdMatch &&
                    <div className="mb-3 w-full px-5 text-red-500 font-bold">Conform password must be match with new password</div>
                    }
                    <div className='flex w-full justify-end px-5 mt-10'>
                        <button onClick={handleResetForm} className='bg-yellow-600 text-white px-3 py-2 rounded'>RESET</button>
                        <button onClick={handleUpdateUser} className='bg-green-600 ms-5 text-white px-3 py-2 rounded'>UPDATE</button>
                    </div>

            </div>
          </div>
        </div>
              <ToastContainer position='top-center' autoClose={3000} theme='colored'/>
      </div>
      <Footer />
    </>
  )
}

export default AdminProfile