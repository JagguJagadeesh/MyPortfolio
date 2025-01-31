import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";


function ProjectCard({
    title='',
    img='',
    des='',
    gitlink='',
    view='',
}) {

  return (
    <div className='flex flex-col p-2 gap-2 border-2 rounded-lg shadow-xl'>
        <img src={img} alt="alt" className='w-full h-96 border-2 rounded-lg'/>
        <h1 className='text-center text-4xl font-f3 font-bold text-violet-700'>{title}</h1>
        <p className='text-wrap text-lg font-f3'>{des}</p>
        <div className='flex gap-10 my-4 mx-auto'>
        <button className='text-blue-500 w-full text-3xl text-center'><a href={gitlink}><FaGithub/></a></button>
        <button className=' text-blue-500 text-3xl'><a href={view}><FiExternalLink/></a></button>
        </div>
    </div>
  )
}

export default ProjectCard