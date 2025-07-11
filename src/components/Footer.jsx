import React from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

function Footer() {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <footer className='text-white py-8 px-[6vw] md:px-[6vw] lg:px-[14vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-blue-500'>Anand Kumar</h2>
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            {name: "About", id:"about"},
            {name: "Skills", id:"skills"},
            {name: "Experience", id:"experience"},
            {name: "Work", id:"work"},
            {name: "Education", id:"education"},
          ].map((item, index)=>(
            <button
            key={index}
            onClick={()=>handleScroll(item.id)}
            className='hover:text-blue-500 text-sm sm:text-base my-1'
            >
              {item.name}
            </button>
          ))}
        </nav>
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            {icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anand-kumar96775464/"},
            {icon: <FaGithub />, link: "https://github.com/Anand-9677"}
          ].map((item, index)=>(
            <a 
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl hover:text-blue-500 transition-transform transform hover:scale-110'
            >{item.icon}</a>
          ))}
        </div>
        <p className='text-sm mt-6 text-gray-400'>© 2025 Anand Kumar. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
