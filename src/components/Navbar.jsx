import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const[isActive, setIsActive] = useState("");
  const [isScroll, setIsScroll] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return ()=>window.removeEventListener("scroll", handleScroll);
  }, [])

  // Smooth scroll function
  const handleMenuItems = (sectionId) => {
    setIsActive(sectionId);
    setIsOpen(false); // for mobile view, if I click any item in navbar then navbar get close automatically.

    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const menuItems = [
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    {id: "experience", label: "Experience"},
    {id: "work", label: "Work"},
    {id: "education", label: "Education"},
    {id: "contact", label: "Contact"},
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[5vw] md:px-[5vw] lg:px-[14vw] ${isScroll ? "bg-[#000435] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className='text-white py-5 flex justify-between items-center'>
        <div className='text-xl font-semibold cursor-pointer'>
          <span className='text-[#6884f5]'>&lt;</span>
          <span className='text-[#fff]'>Anand</span>
          <span className='text-[#6884f5]'>/</span>
          <span className='text-[#fff]'>Kumar</span>
          <span className='text-[#6884f5]'>&gt;</span>
        </div>
        <ul className='hidden md:flex space-x-8 text-gray-300 text-lg'>
        {menuItems.map((item)=>(
          <li key={item.id} className={`cursor-pointer hover:text-[#6884f5] ${isActive === item.id ? "text-[#6884f5]" : ""}`}>
            <button onClick={()=>handleMenuItems(item.id)}>{item.label}</button>
          </li>
        ))}
        </ul>

        <div className='hidden md:flex space-x-4'>
          <a href="https://github.com/Anand-9677" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#6884f5]'><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/anand-kumar96775464/" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#6884f5]'><FaLinkedin size={26} /></a>
        </div>
        <div className='md:hidden'>
          {
            isOpen ? (
              <FiX className='text-3xl text-[#6884f5] cursor-pointer' onClick={()=>setIsOpen(false)} />
            ) : (<FiMenu className='text-3xl text-[#6884f5] cursor-pointer' onClick={()=>setIsOpen(true)} />)
          }
        </div>
      </div>
      {/* Mobile view */}
      {isOpen && 
      <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050f1d] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg'>
        <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
          {
            menuItems.map((item)=>(
              <li key={item.id} className={`cursor-pointer hover:text-white ${isActive === item.id ? "text-[#6884f5]" : ""}`}>
                <button onClick={()=>handleMenuItems(item.id)}>
                  {item.label}
                </button>
              </li>
            ))
          }
          <div className='flex space-x-4'>
            <a href="https://github.com/Anand-9677" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#6884f5]'><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/anand-kumar96775464/" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#6884f5]'><FaLinkedin size={26} /></a>
          </div>
        </ul>
      </div>
      }
    </nav>
  )
}

export default Navbar
