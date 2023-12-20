import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Card({ item }) {
  return (
    <div className="w-[30vw] min-w-[500px] h-full border border-borderClr flex flex-col">
      {/* Heading */}
      <p className="uppercase border-b border-light bg-light text-dark p-2 leading-none text-xs font-bold">
        {item.category}
      </p>

      <div className="px-10 pb-10 gap-4 flex-grow justify-end flex flex-col">
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
        <h1 className="text-5xl font-medium leading-tight">{item.title}</h1>
        <p className="text-[#878080]">{item.detail}</p>

        {/* Link */}

        <div className="flex gap-3 items-center font-semibold">
          <span className="text-xl bg-light text-dark block">
            <GoArrowUpRight />
          </span>
          <p className="array">{item.urlLabel}</p>
        </div>

        {/* Image */}
        <div className="overflow-hidden w-full">
          <Image className="aspect-video w-full object-cover" src={item.img} width={1000} height={1000}></Image>
        </div>
      </div>
    </div>
  );
}
