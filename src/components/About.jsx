import React from 'react'
import {Typewriter} from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import profileImage from '/AK.png'

function About() {
  return (
    <section id='about' className='py-4 px-[5vw] md:px-[5vw] lg:px-[14vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-8'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-2'>
            Hi, I am 
          </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Anand Kumar
          </h2>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#6884f5] leading-tight'>
            <span className='text-white'>
              I am a  
            </span>
            {" "}
            <span className='text-[#6884f5]'>
            <Typewriter 
            words={['Frontend Developer', 'Coder']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
            />
            </span>
          </h3>
          <p className='text-base sm:text-lg md:text-lg mb-10 mt-8 text-gray-400 leading-relaxed'>
            I'm a passionate Frontend Developer focused on creating responsive, user-friendly interfaces. Currently, I'm expanding my skillset by learning Backend Development and strengthening my problem-solving abilities through Data Structures and Algorithms (DSA).
          </p>
          <a 
          href="/CV.pdf"
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block text-white py-3 px-8 rounded-full mt-5 font-bold text-lg transition duration-300 hover:scale-105'
          style={
            { 
              background: 'linear-gradient(90deg, #6884f5, #60a5fa)',
              boxShadow: '0 0 2px #6884f5, 0 0 4px #6884f5, 0 0 6px #6884f5'
            }
          }
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
          className='w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-blue-600 rounded-full'
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          >
          <img
            draggable={false}
            src={profileImage}
            alt="Anand Kumar"
            className="w-full h-full rounded-full object-top object-cover bg-white drop-shadow-[0_10px_20px_rgba(59,130,246,0.5)]"
          />
          </Tilt>
        </div>


      </div>
    </section>
  )
}

export default About
