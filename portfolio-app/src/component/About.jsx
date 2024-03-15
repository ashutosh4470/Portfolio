import React from 'react';

const About = () => {

    const skills = ["C++", "Java", "SpringMVC", "SpringBoot", "Javascript", "ReactJs", "NodeJs", "ExpressJs", "MongoDB", "MySQL", "HTML", "CSS", "C#", "Shell Scripting", "Data Structure", "RESTfull API"];

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 py-6'>
            <div className='container mx-auto px-4 lg:px-8'>
                <h1 className=' text-3xl text-center font-extrabold tracking-widest uppercase font-serif py-5 border-spacing-2'>About Me</h1>
                <p className='text-lg lg:text-xl text-center mx-auto text-gray-700 mb-8 lg:w-3/4 xl:w-2/3'>
                    Here you will find more information about me,
                    what I do, and my current skills mostly in terms
                    of programming and technology.
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                        <div className='text-left'>
                            <h3 className='text-2xl lg:text-xl font-bold mb-5 tracking-wide'>Get to know me!</h3>
                            <p className='text-base lg:text-lg text-gray-700 leading-loose'>
                                I'm a <span className='font-semibold'>passionate aspiring web developer</span> eager to learn and contribute to the exciting world of web development. I'm enthusiastic about building and managing the frontend of websites and web applications to create engaging user experiences.
                                <br />
                                While I may not have extensive professional experience yet, I've dedicated myself to learning and honing my skills through projects and self-study. I'm eager to showcase my work and learn from the community to improve and grow.
                                <br />
                                I'm committed to sharing my journey and insights as I progress in my career. Through my experiences and challenges, I hope to contribute to the development community and inspire others on their own learning journeys.
                                <br />    I'm open to exploring job opportunities where I can apply my skills, learn from experienced professionals, and contribute to meaningful projects. If you have an opportunity that aligns with my skills and aspirations, I'd love to hear from you!
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='text-left'>
                            <h3 className='text-sm lg:text-xl font-bold mb-5 tracking-wide'>My Skills</h3>
                            <ul className='text-base lg:text-lg text-gray-700 flex flex-wrap'>
                                {skills.map((skill, index) => (
                                    <li key={index} className='mb-1 bg-slate-300 mx-2 px-3 py-2 rounded-md my-2 lg:my-4 tracking-wide'>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <button className='my-10 text-lg lg:text-xl font-bold font-mono bg-blue-600 text-white uppercase px-6 py-3 rounded-lg hover:-translate-y-1 transition-transform duration-100'>Contact</button>
            </div>
        </div>
    );
};

export default About;
