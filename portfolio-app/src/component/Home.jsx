import React from 'react';
import backgroundImg2 from "../assets/images/backgroundimg2.jpg";
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Project from './Project';
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[680px] bg-cover bg-center bg-slate-200'>
                <div className='text-center'>
                    <h1 className='text-5xl lg:text-6xl mb-10 uppercase font-bold tracking-wider'> Hey, I'm Ashutosh Mahale </h1>
                    <p className='text-xl lg:text-2xl w-10/12 lg:w-7/12 mx-auto leading-loose'>
                        A Result-Oriented Web Developer building and
                        managing Websites and Web Applications that
                        leads to the success of the overall product.
                    </p>
                    <button className='bg-blue-700 py-5 px-12 lg:px-28 rounded-lg m-10 uppercase font-serif text-white font-semibold hover:bg-blue-800'> Projects </button>
                </div>
            </div>
            <About /> 
            <Project/>
            <Contact /> 
            <Footer />
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Home;
