import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { IoLocationSharp } from "react-icons/io5";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import Iframe from 'react-iframe';

function Contact() {
  return (
    <>
    <Header/>
    <div className='p-10 lg:ps-40 md:ps-30 md:pe-40 md:pb-20 pb-60'>
      <h1 className='text-3xl text-center font-bold mb-2'>Contact</h1>
      <div className='md:grid gird-rows-3'>
        <div className='md:w-full row-span-1'>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum, maxime nobis quos corrupti delectus nihil saepe odit odio molestias! Ut, accusamus odit animi omnis quod eveniet sint sequi explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure temporibus, maxime porro, minima commodi aspernatur earum ipsum amet sequi architecto expedita enim ab voluptatibus ratione cumque facilis quisquam ad voluptates?</p>
        </div>
        <div  className='p-5 md:w-full row-span-1'>
          <div className='md:grid grid-cols-3 lg:gap-40 md:gap-10 gap-10'>
            <div className=' flex items-center'>
              <div style={{width:'50px',height:"50px"}} className='rounded-full bg-gray-300 m-2'><IoLocationSharp className='text-3xl p-1 m-2'/></div>
              <p>123 Main Street,Apt 4B,Anytown,CA 91234</p>
            </div>
            <div className=' flex items-center'>
              <div style={{width:'50px',height:"50px"}} className='rounded-full bg-gray-300 m-2'><FaPhoneAlt className='text-3xl p-1 m-2'/></div>
              <p> +91 9873462289</p>
            </div>
            <div className=' flex items-center'>
              <div style={{width:'50px',height:"50px"}} className='rounded-full bg-gray-300 m-2'><IoIosMailOpen className='text-3xl p-1 m-2'/></div>
              <p>Bookstore@gmail.com</p>
            </div>

          </div>
        </div>
        <div className=' md:w-full row-span-1'>
          <div className='md:grid grid-cols-2 lg:gap-10 gap-10 lg:ms-20 lg:me-20 h-75'>
            <div className='p-5 rounded m-5 bg-gray-300'>
              <h1 className='text-center font-bold mb-3'>Send me Message</h1>
              <input type="text" className='p-2 ps-5 bg-white w-full rounded mb-2'placeholder='Name'/>
              <input type="text" className='p-2 ps-5  bg-white w-full rounded mb-2'placeholder='Email ID'/>
              <textarea type="text" className='p-2 ps-5  bg-white w-full h-25 rounded mb-2'placeholder='message'/>
              <button className='w-full bg-blue-950 rounded flex text-white pt-2 pb-2 justify-center'>Send<FaPaperPlane   className='text-white ms-2 '/> </button>
            </div>
            <div className='p-5 rounded m-5'>
              <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832720463!2d76.30948095113635!3d10.008813464705796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1764229592344!5m2!1sen!2sin" width='100%' height='100%' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact