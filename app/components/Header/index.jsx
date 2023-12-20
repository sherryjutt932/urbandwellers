'use client';
import React, { useState } from 'react';
import Navitems from '@/app/constants/NavItems';
import Link from 'next/link';
import { VscMenu } from 'react-icons/vsc';
import { RiSearchLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import Image from 'next/image';
import Menu from './Menu';

export default function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className={`h-[90px] container_center border border-borderClr text-lg relative`}>
      <div className='container_center px-8 border-r  border-borderClr h-full'>
        <Link href='/' className='w-full py-2 h-full cursor-pointer'>
          <Image className='w-auto h-full' src="/urbanlogo.png" width={300}  height={300}></Image>
        </Link>
      </div>
      <ul
        className={`${isSearchActive ? 'w-0 p-0' : 'w-fit px-8'} transition_theme overflow-hidden container_center h-full border-r border-borderClr`}
      >
          {Navitems.map((item, index) => (
        <li key={index}>
            <Link href={item.url}  className={` ${isSearchActive ? 'opacity-0' : 'opacity-100'} transition_theme hover:opacity-80 px-8 whitespace-nowrap`}>
              {item.title}
            </Link>
        </li>
          ))}
      </ul>
      <div className='flex-grow flex items-center px-8 border-r h-full border-borderClr'>
        <span className={` ${isSearchActive ? 'opacity-100' : 'opacity-0'} transition_theme ml-6 text-2xl`}>
        <RiSearchLine />

        </span>
        <input
          type='text'
          className='h-[90px] w-full px-8 bg-transparent outline-none text-white placeholder-placeholderClr'
          placeholder='Search'
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
      </div>
      <div className='container_center px-8 h-full text-2xl'>
        <button  
        onClick={handleMenuToggle}
        className='cursor-pointer'>
          {isMenuOpen? <IoClose />: <VscMenu /> }
        </button>
      </div>
      {isMenuOpen && <Menu/>}
    </div>
  );
}
