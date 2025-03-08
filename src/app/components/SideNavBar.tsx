'use client'
import React, { useState } from 'react';
import { Camera, Home, User, Image, Briefcase, BookOpen, Contact, Menu, X } from 'lucide-react';
import SocialLinks from './SocialLinks';

const navItems = [
  { name: 'HOME', icon: <Home className="w-5 h-5" /> },
  { name: 'ABOUT', icon: <User className="w-5 h-5" /> },
  { name: 'GALLERY', icon: <Image className="w-5 h-5" /> },
  { name: 'PORTFOLIO', icon: <Briefcase className="w-5 h-5" /> },
  { name: 'BLOG', icon: <BookOpen className="w-5 h-5" /> },
  { name: 'CONTACT', icon: <Contact className="w-5 h-5" /> },
];

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Nav Button */}
        {/* Logo Section */}
        <div className="pt-5 border-b border-gray-800 w-full bg-black text-white lg:hidden">
          <div className="flex items-center justify-center gap-2">
            <Camera className="w-8 h-8 text-cyan-400" />
            <h1 className="text-2xl font-bold">PORTRETO</h1>
          </div>
          <p className="text-center text-sm text-gray-400 my-4">PHOTOGRAPHY THEME</p>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-gray-800"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
          {/* Social Links */}
          <SocialLinks />
        </div>


      {/* Navigation Container */}
      <nav className={`
        fixed lg:static 
        ${isOpen ? 'top-0 left-0' : '-top-full lg:top-0'} 
        w-full lg:w-64 
        h-screen 
        bg-black
        text-white 
        transition-all 
        duration-300 
        z-40
      `}>
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-center gap-2">
            <Camera className="w-8 h-8 text-cyan-400" />
            <h1 className="text-2xl font-bold">PORTRETO</h1>
          </div>
          <p className="text-center text-sm text-gray-400 mt-2">PHOTOGRAPHY THEME</p>
        </div>

        {/* Navigation Links */}
        <div className="h-[80%] flex flex-col justify-between">
          <div className=''>
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-4 px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors border-b border-gray-800"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
              
            {/* Social Links */}
            <div className="flex flex-col">
              <p className="text-center text-xs  mb-4 text-white">FOLLOW US</p>
              <SocialLinks />
            </div>
        </div>

      </nav>
    </>
  );
};

export default SideNavBar;