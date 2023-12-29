"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Card({ item }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Link href={item.url}>
    <div className="w-[90vw] sm:w-[30vw] sm:min-w-[500px] hover:bg-[#181514] transition-all h-full border-r border-borderClr flex flex-col">
      {/* Heading */}
      <p className="uppercase border-b border-light bg-light text-dark px-2 h-7 flex items-center flex-shrink-0 leading-none text-xs font-bold">
        {item.category}
      </p>

      <div className="px-6 pb-6 sm:px-10 sm:pb-10 gap-4 flex-grow justify-end flex flex-col overflow-hidden">
        {/* Divider */}
        <hr className="border-t border-borderClr w-full" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, i) => {
            return (
              <span
                key={i}
                className="py-1 px-2 uppercase text-xs font-semibold text-[#878080] border border-[#878080]"
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* Detail */}
        <h1 className="text-3xl sm:text-5xl  font-medium leading-tight">{item.title}</h1>
        <p className="text-[#878080]">{item.detail}</p>

        {/* Link */}

        <div className="flex gap-3 items-center font-semibold">
          <span className="text-xl bg-light text-dark block">
            <GoArrowUpRight />
          </span>
          <p className="array">{item.urlLabel}</p>
        </div>

        {/* Image */}
        {/* <div className="overflow-hidden w-full">
          <Image className="aspect-video w-full object-cover" src={item.img} width={1000} height={1000}></Image>
        </div> */}

          <div className="relative overflow-hidden w-full max-h-80 rounded-sm">
            <Image
              onLoad={() => setIsLoading(false)}
              className="w-full object-cover"
              src={item.img}
              width={1000}
              height={1000}
              alt="event image"
            />
            {isLoading && (
            <div className="absolute top-0 left-0 h-full w-full skeleton"></div>)}
          </div>
      </div>
    </div>
    </Link>
  );
}
