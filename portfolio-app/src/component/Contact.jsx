import axios from 'axios'
import React, { useState } from 'react'

const Contact = () => {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[subject,setSubject] = useState("");
    const[message,setMessage] = useState("");


    const data = {
        name:name,
        email:email,
        subject:subject,
        message:message
    }

    const SendData = async()=>{
        const Response = await axios.post("http://localhost:8080/contact",data);
        console.log(Response.data);
        setName="";
        setEmail="";
        setSubject="";
        setMessage="";
    }

  return (
    <div className='my-10 text-center'>
        <div className='leading-loose'>
            <h1 className='text-3xl text-center font-extrabold tracking-widest uppercase font-serif py-5 border-spacing-2'>Contact</h1>
            <p className=' text-lg lg:text-xl text-center mx-auto text-gray-700 mb-8 lg:w-3/4 xl:w-2/3 '>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>
        <form action="" className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
    <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e)=>setName(e.target.value)}
        />
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email:</label>
        <input type="text" id="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e)=>setEmail(e.target.value)}
        />  
    </div>
    <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject:</label>
        <input type="text" id="subject" placeholder="Enter your subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e)=>setSubject(e.target.value)}
        />
    </div>
    <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message:</label>
        <textarea id="message" placeholder="Enter your message" className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
                onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
    </div>
    <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md uppercase tracking-wider hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out"
        onClick={SendData}
    >Submit</button>
</form>

    </div>
  )
}

export default Contact