import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
      <>
        <div  className='bg-indigo-950 md:grid grid-cols-3 gap-10 p-10'>
            <div className='justify-right text-white column md:mt-0 mt-5'>
              <h1 className='font-black pb-5'>ABOUT US</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel atque assumenda corrupti, quam fugiat ducimus eveniet maiores dolores ab fuga officiis quas repellat quibusdam necessitatibus enim,  dolores ab fuga officiis quas repellat quibusdam necessitatibus enim, sint laboriosam deleniti.</p>
            </div>        
            <div className='justify-right text-white md:mt-0 mt-5'>
              <h1 className='font-black  pb-5'>NEWS LETTERS</h1>
              <p className='mb-5'>Stay updated with our latest trends</p>
              <div className='flex flex-inline'><input className='bg-white p-2 text-black' type="email" placeholder='Email ID'/><IoIosArrowRoundForward className='text-white border h-10 w-10 bg-amber-400 text-xs'/></div>
            </div>
            <div className='justify-right text-white md:mt-0 mt-5'>
              <h1 className='font-black  pb-5'>FOLLOW US</h1>
              <p className='mb-5'>Let us be social</p>
              <div className='md:flex justify-start items-center '>
                  <FaInstagram className='me-1'/>
                  <FaXTwitter className='me-1'/>
                  <FaFacebookF className='me-1'/>
                  <FaLinkedin/>
              </div>
            </div>
        </div>
        <p className='text-white bg-black text-center p-3' >Copyright &copy; 2023 All rights reserved | This website is made with 🤍 By Luminar Technolab</p>
      </>
  )
}

export default Footer