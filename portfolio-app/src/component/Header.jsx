import React from 'react'
import logo from "../assets/images/logo.jpg"
import navigate from 'navigate'

const Header = () => {

    const list = ["Home","about","contact","projects"]

  return (
    <div className='inline uppercase'>
    <div className='text-xl bg-white-100 text-black-500 border-slate-950 font-serif flex justify-between items-center px-5 py-3 md:px-10 md:py-5'>
        <div className='flex items-center hover:cursor-pointer'>
            <img className='h-10 rounded-full m-2' src={logo} alt="logo" />
            <h1 className='hover:text-blue-600'>Ashutosh Mahale</h1>
        </div>  
        <ul className='hidden md:flex'>
            {list.map((item,index)=>(
            <li key={index} className='mx-6 hover:cursor-pointer hover:text-blue-600' onClick={navigate(`/${item}`)}>{item}</li>
            ))}
        </ul>
        <button className='md:hidden'>Menu</button>
    </div>
</div>

  )
}

export default Header