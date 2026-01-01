import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'
FaBackward

function PaymentSuccess() {
  return (
    <>
    <Header/>
    <div className='container my-10 min-h-screen flex justify-center items-center m-20'>
        <div className="md:grid grid-cols-2 px-10 my-10 justify-center items-center">
        <div>
            <h1 className='md:text-4xl text-blue-500'>Congrulations!!!</h1>
            <p className='text-2xl my-10'>Thankyou for purchasing with BOOKSTORE.Hope you have a god time with us.</p>
            <Link to={'/books'} className='flex bg-blue-600 items-center w-60 p-2 text-white font-bold'><FaBackward className='me-2'/>Explore More Books!!!</Link>
        </div>
        <div className='flex justify-center items-center'>
            <img width={'100%'} src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="payment-success" />
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaymentSuccess