import React from 'react'
import backgroundImg2 from "../assets/images/backgroundimg2.jpg"
import About from './About'
const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[680px]' style={{ backgroundImage: `url(${backgroundImg2})` }}>
                <div className='text-center'>
                    <h1 className='text-5xl my-10 uppercase font-bold'> Hey,I'm Ashutosh Mahale </h1>
                    <p className='text-3xl w-9/12 mx-auto'>
                        A Result-Oriented Web Developer building and
                        managing Websites and Web Applications that
                        leads to the success of the overall product.
                    </p>
                    <button className='bg-blue-500 py-5 px-28 rounded-lg m-10 uppercase font-serif'> Projects </button>
                </div>
            </div>
            <About />   
        </div>
    )
}

export default Home