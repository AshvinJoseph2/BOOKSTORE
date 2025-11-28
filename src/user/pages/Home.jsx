import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <Header/>
    {/* landing */}
    <div style={{height:'500px'}} className='flex flex-col justify-center items-center bg-[url(/landing.jpeg)] bg-cover bg-center text-white'>
    <div  style={{height:'500px',backgroundColor:'rgba(0,0,0,0.4'}}  className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold'>Wonderful Gift</h1>
      <p>Gift your family and friends a book</p>
      <div className='mt-9'>
        <input placeholder='Search A Book' type="text" className='bg-white p-2 rounded-3xl w-100 text-black placeholder-grey-500' />
        <FaSearch className='text-gray-500' style={{marginLeft:'365px',marginTop:'-29px'}}/>
      </div>
    </div>
    </div>
    {/* new arrivials */}
    <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
      <h1 className='text-4xl my-2'>Explore Our Latest Collection</h1>
      <div className='md:grid grid-cols-4 w-full my-10'>
        {/* duplicate book card */}
        <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg" alt="book" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h3 className='text-blue-700 font-bold text-xl'>Author</h3>
              <p>title</p>
              <p>$ 34</p>
            </div>
        </div>
        {/* duplicate book card */}
        <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg" alt="book" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h3 className='text-blue-700 font-bold text-xl'>Author</h3>
              <p>title</p>
              <p>$ 34</p>
            </div>
        </div>
        {/* duplicate book card */}
        <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg" alt="book" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h3 className='text-blue-700 font-bold text-xl'>Author</h3>
              <p>title</p>
              <p>$ 34</p>
            </div>
        </div>
        {/* duplicate book card */}
        <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg" alt="book" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h3 className='text-blue-700 font-bold text-xl'>Author</h3>
              <p>title</p>
              <p>$ 34</p>
            </div>
        </div>
      </div>
        <div className='text-center my-10'>
          <Link to={'/books'} className='bg-black p-3 text-white font-black'>Explore More</Link>
        </div>
    </section>
    {/* author */}
    <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40'>
      <div className='text-center'>
        <h2 className='text-xl font-bold'>FEATURED AUTHORS</h2>
        <h3 className='text-xl'>Captivates with every word</h3>
        <p className="my-5 text-justify">
          Welcome to Author Spotlight of our bookstore website!
          This feature is designed to celebrate writers,showcase their creative journey, and help readers discover the minds behind their favorite books.
        </p>
        <p className='text-justify'>Our Author Features include:</p>
        <p className='text-justify my-3'>
          <span className='font-black'>✨ Author Profile : </span>
        Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.
        </p>
        <p className='text-justify my-3'>
          <span className='font-black'>⬜ Published Works : </span>
        Explore a curated list of books written by the author with quick access to book details,reviews, and purchase options.
        </p>
        <p className='text-justify my-3'>
          <span className='font-black'>🎤 Interview & Insights : </span>
          Exclusive interviews, behind-thee-scenes stories, and writing tips that offers a deeper look into the authors creative world.
        </p>
      </div>
      <div className="p-5 flex justify-center items-center">
        <img src="https://www.nysun.com/_next/image?url=https:%2F%2Fwp.nysun.com%2Fwp-content%2Fuploads%2F2023%2F04%2FRosen-Photo.jpeg&w=1200&q=75" alt="author" />
      </div>
    </section>
    {/* testimony */}
    <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
        <h2 className='text-xl font-bold'>TESTIMONIALS</h2>
        <h3 className='text-xl'>See What Others Are Saying</h3>
        <div className="my-5 flex flex-col items-center justify-center">
          <img width={'200px'} height={'200px'} style={{borderRadius:"50%"}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="user" />
          <h3 className="my-3">Luther King</h3>
          <p className='text-justify'>
            This Bookstore has completely changed the way I discover new books.The recommendations are always spot-on,and the delivery is super fast.I love the clean interface and the huge collections! The user experience is amazing!Easy navigation, great deals, and beautifully organized categories.I appreciate hoe quickly customers support responds too.
          </p>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Home