import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function PaymentError() {
  return (
    <> 
    <Header/>
    <div className='container my-10 min-h-screen flex justify-center items-center m-20'>
        <div className="md:grid grid-cols-2 px-10 my-10 justify-center items-center">
        <div>
            <h1 className='md:text-4xl text-blue-500'>Sorry!!! Payment is Unsuccessful...</h1>
            <p className='text-2xl my-10'>We Apologize for the inconvience caused and Appricate your visit to BOOKSTORE...</p>
            <Link to={'/books'} className='flex bg-red-500 items-center w-60 p-2 text-white font-bold'><FaBackward className='me-2'/>Explore More Books!!!</Link>
        </div>
        <div className='flex justify-center items-center'>
            <img width={'100%'} src="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1" alt="payment-success" />
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaymentError