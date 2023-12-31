'use client'
import React, { useEffect, useState } from 'react';

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div className="fixed w-screen h-screen bg-black top-0 left-0 z-[100] container_center">
      <img src="/SVKl.gif" alt="loading" className='w-24' />
    </div>
  ) : null;
}
