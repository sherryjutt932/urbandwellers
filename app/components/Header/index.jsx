'use client';
import React, { useState } from 'react';
import Navitems from '@/app/constants/NavItems';
import Link from 'next/link';
import { VscMenu } from 'react-icons/vsc';
import { RiSearchLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { usePathname } from 'next/navigation' 
import Image from 'next/image';
import Menu from './Menu';

export default function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()      

  const handleSearchFocus = () => {
    setIsSearchActive(true);
  };

  const handleSearchBlur = () => {
    setIsSearchActive(false);
  };
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`h-[70px] sm:h-[90px] container_center border-b border-borderClr text-lg relative`}>
      <div className='container_center px-4 sm:px-8 border-r  border-borderClr h-full'>
        <Link href='/' className='w-full py-2 h-full cursor-pointer'>
          <Image className='w-auto h-full object-cover' src="/urbanlogo.png" width={300}  height={300} alt="logo image"/>
        </Link>
      </div>
      <ul
        className={`${isSearchActive ? 'w-0 p-0' : 'w-fit px-4 sm:px-8'} transition_theme overflow-hidden hidden sm:flex h-full border-r border-borderClr`}
      >
          {Navitems.map((item, index) => (
        <li key={index} >
            <Link href={item.url}  className={` ${isSearchActive ? 'opacity-0' : 'opacity-100'} border-[#faaf4a] h-full transition-all flex items-center hover:opacity-80 px-4 sm:px-8 whitespace-nowrap ${
                  pathname === item.url ? 'text-[#faaf4a] border-t-4 ' : 'text-white'
                }`}>
              {item.title}
            </Link>
        </li>
          ))}
      </ul>
      <div className='flex-grow flex items-center px-4 sm:px-8 border-r h-full border-borderClr'>
        <span className={` ${isSearchActive ? 'sm:opacity-100' : 'sm:opacity-0'} transition_theme sm:ml-6 text-2xl`}>
        <RiSearchLine />

        </span>
        <input
          type='text'
          className='h-[90px] w-full px-4 sm:px-8 bg-transparent outline-none text-white placeholder-placeholderClr'
          placeholder='Search'
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
      </div>
      <div className='container_center px-4 sm:px-8 h-full text-2xl'>
        <button  
        onClick={handleMenuToggle}
        className='cursor-pointer'>
          {isMenuOpen? <IoClose />: <VscMenu /> }
        </button>
      </div>
      {isMenuOpen && <Menu handleMenuToggle={handleMenuToggle}/>}
    </div>
  );
}
