import React from 'react'
import Button from './button/Button'

function AboutSection() {
    return (
        <div className='px-5 md:px-20 flex flex-col-reverse md:flex-row items-center gap-1'>
            <div className='flex-col  md:w-[50%] items-center justify-center'>
                <img className='w-[100%]' src="/images/about_section.png" alt="" />
            </div>
            <div className='flex flex-col md:items-start  justify-center items-center  md:w-[50%] '>
                <h1 className='text-4xl my-4 font-bold text-blue-800 border-bottom'>About Me</h1>
                <p className='text-xl text-slate-600 text-justify'>
                    I am Ankit,<br></br>
                    From Radaur, Yamuna Nagar, Haryana, India.
                    <br></br>
                     A versatile creative professional. My journey in the digital realm began with a fascination for design, which has now evolved into a passion for crafting visually stunning and user-centric experiences.
                </p>
                <div className='flex items-center  gap-3 my-5'>
                    <Button name={"Hire Me"} link={"#"}/>
                </div>
            </div>
        </div>
    )
}

export default AboutSection