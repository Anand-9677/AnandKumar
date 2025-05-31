import React, { useState } from 'react'
import {projects} from '../Constants'

function Work() {

  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  }
  const handleCloseModal = (project) => {
    setSelectedProject(null);
  }

  return (
    <section id='work' className='py-24 pb-24 px-[6vw] md:px-[6vw] lg:px-[14vw] font-sans bg-skills-gradient relative'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl sm:text-4xl text-white font-bold'>PROJECTS</h2>
        <div className='w-36 h-1 bg-[#6884f5] mx-auto mt-2'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
      </div>

      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project)=>(
          <div
          key={project.id}
          onClick={()=>handleOpenModal(project)}
          className='border border-white bg-gray-900 backdrop-blur-md  rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-blue-500/50 hover:-translate-y-2 transition-transform duration-300'
          >
            <div className='p-4'>
              <img src={project.image} alt={project.title} draggable={false} className='w-full h-48 rounded-xl' />
            </div>
            <div className='p-4'>
              <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
              <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>
                {project.description}
              </p>
              <div className='mb-4'>
                {project.tags.map((tag, index)=>(
                  <span
                  key={index}
                  className='inline-block bg-[#1e293b] text-xs font-semibold text-blue-500 rounded-full px-2 py-1 mr-2 mb-2'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {
        selectedProject && 
        (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 '>
            <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-4xl relative'>
              <div className='flex justify-end p-2'>
                <button
                onClick={handleCloseModal}
                className='text-white text-2xl font-bold hover:text-blue-500'
                >
                  &times;
                </button>
              </div>
              <div className='flex flex-col'>
                <div className='flex items-center justify-center bg-gray-900 px-4'>
                  <img className='lg:w-[60%]' src={selectedProject.image} alt={selectedProject.title} draggable={false} />
                </div>
                <div className='lg:px-8 lg:py-4 p-6'>
                  <h3 className='lg:text-2xl font-bold text-white mb-4 text-md'>{selectedProject.title}</h3>
                  <p className='text-gray-400 mb-2 lg:text-base text-xs'>{selectedProject.description}</p>
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {selectedProject.tags.map((tag, index)=>(
                      <span
                      key={index}
                      className='bg-[#1e293b] text-xs font-semibold text-blue-500 rounded-full px-2 py-1 '
                      >
                      {tag}
                      </span>
                    ))}
                  </div>
                  <div className='flex flex-col lg:flex-row md:flex-row gap-4'>
                    <a href={selectedProject.github} target='_blank' rel='noopener noreferrer' className='w-full lg:w-1/2 md:w-1/2 bg-gray-800 hover:bg-blue-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                    View Code
                    </a>
                    <a href={selectedProject.webapp} target='_blank' rel='noopener noreferrer' className='w-full lg:w-1/2 md:w-1/2 bg-blue-600 hover:bg-blue-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                    View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </section>
  )
}

export default Work
