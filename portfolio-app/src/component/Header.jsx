import React from 'react'
import logo from "../assets/images/logo.jpg"

const Header = () => {

    const list = ["Home","about","contact","projects"]

  return (
    <div className='inline uppercase'>
    <div className='text-xl bg-white-100 text-black-500 border-slate-950 font-serif flex justify-between items-center px-5 py-3 md:px-10 md:py-5'>
        <div className='flex items-center hover:cursor-pointer'>
            <img className='h-10 rounded-full m-2 ' src={logo} alt="logo" />Ashutosh Mahale
        </div>  
        <ul className='hidden md:flex'>
            {list.map((item,index)=>(
            <li key={index} className='mx-6 hover:cursor-pointer'>{item}</li>
            ))}
        </ul>
        <button className='md:hidden'>Menu</button>
    </div>
</div>

  )
}

export default Header