'use client';
import React, { useState } from 'react'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import HeadingTag from './HeadingTag';
import Image from "next/image";

export default function Gallery({data}) {
  const [currentGallery, setCurrentGallery] = useState(0);

  const handlePrevGallery = () => {
    setCurrentGallery((prevGallery) => Math.max(prevGallery - 1, 0));
  };

  const handleNextGallery = () => {
    setCurrentGallery((prevGallery) =>
      Math.min(prevGallery + 1, data.length - 1)
    );
  };


  return (
    <div className="w-[100vw] sm:w-[60vw] sm:min-w-[500px] h-[320px] sm:h-full relative border-r border-borderClr">

        <HeadingTag tag= {"gallery"}/>

        

        {data.map((galleryItem, index) => (
          <Image
            className={` pl-7 sm:pl-0 w-full h-full absolute left-0 top-0 object-cover block transition_theme pb-16 sm:pb-0 ${
              index === currentGallery ? "opacity-100" : "opacity-0"
            }`}
            src={galleryItem.product}
            width={1000}
            height={1000}
            key={index}
            alt="image"
          />
        ))}

        <div className="pl-7 sm:pl-0 items-center absolute bottom-0 left-0 flex z-20 w-full">
          <button
            onClick={handlePrevGallery}
            className="text-black h-16 px-6 flex justify-between uppercase items-center bg-[#fff] hover:bg-[#888] transition_theme border-r border-black"
          >
            <span className={`text-base`}>
              <FaArrowLeftLong />
            </span>
          </button>
          <button
            onClick={handleNextGallery}
            className="text-black h-16 px-6 flex justify-between uppercase items-center bg-[#fff] hover:bg-[#888] transition_theme border-r border-black"
          >
            <span className={`text-base`}>
              <FaArrowRightLong />
            </span>
          </button>
          <div className="text-black h-16 px-10 flex-grow sm:flex-grow-0 flex gap-4 justify-center items-center bg-[#fff]">
            <span>0{currentGallery + 1}</span>
            <span>/</span>
            <span>0{data.length}</span>
          </div>
        </div>
      </div>
  )
}
