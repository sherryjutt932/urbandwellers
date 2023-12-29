'use client'
import Image from 'next/image';
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
      <Image src="/loading.gif" alt="loading" width={2000}
              height={2000}> </Image>
    </div>
  ) : null;
}
