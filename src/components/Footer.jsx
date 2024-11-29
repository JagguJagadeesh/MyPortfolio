import React from 'react'
import { FaGithub , FaLinkedin , FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



function Footer() {
  return (
    <div className='bg-black '>
        <div className=' bg-black flex  justify-center md:flex-col lg:flex-row sm:flex-col '>
            <div className='w-2/4  text-wrap text-left pt-10 px-20  text-white'>
                <h1 className='text-2xl font-semibold'>Jagadeesh</h1><br />
                <p className='text-sm font-mono'>A Full Stack focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
            </div>
            <div className='w-2/4 md:p-4 text-wrap text-white pt-10 pb-14 pl-6'>
                <h1 className='text-2xl font-semibold '>Social</h1><br />
                <div className='flex flex-wrap gap-8'>
                    <a href="https://github.com/JagguJagadeesh" target='_blank'><FaGithub className='text-3xl'/></a>
                    <a href='https://www.linkedin.com/in/jagadeesh15/' target='_blank'><FaLinkedin className='text-3xl'/></a>
                    <a href='https://x.com/JagguJagadieesh' target='_blank'><FaSquareXTwitter className='text-3xl'/></a>
                    <a href='https://www.instagram.com/j.a.g.a.d.e.e.s.h_15/' target='_blank'><FaInstagramSquare className='text-3xl'/></a>
                </div>
                <div className='text-balance'>
                    <p className='mt-4  mb-0'>Phone Number : +91 7396633113</p>
                    <p className='mt-4  mb-0'>Email : jaggujagadeesh447@gmail.com</p>
                </div>
            </div>
        </div><br />
        <div className='h-1 mx-12 rounded-lg bg-white'></div>
        <div className='text-white text-center text-xs pb-6 mt-2'>
            <p>©Copywright 2024 .Made by <span className='underline'>Jagadeesh Chakali</span></p>
        </div>
    </div>
  )
}

export default Footer