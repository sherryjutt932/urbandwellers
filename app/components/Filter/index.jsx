"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { DropdownComponent } from "../Dropdown";
import Link from "next/link";

export default function Filter({ item, name }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-0 sm:w-[350px] transition-all h-0 sm:h-full border-r border-borderClr ">
      {/* Heading */}
      <p className="uppercase bg-light text-dark px-2 h-7 flex items-center flex-shrink-0 leading-none text-xs font-bold">
        {name}
      </p>

      <div className={`sm:m-3 top-[69px] sm:top-auto sm:h-[calc(100vh-3rem-91px-24px)] w-screen sm:w-[calc(350px-3rem)] flex flex-col transition_theme  fixed sm:left-3 z-40 ${!isOpen? 'h-0':'h-[calc(100vh-71px)]'}`}>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex-shrink-0 bg-[#0D0908] overflow-hidden h-10 sm:h-6 text-left flex justify-between items-center border-t border-x border-borderClr"
        >
          <span className="text-xs px-2 uppercase">filters</span>
          <span className="w-10 h-10 sm:w-6 sm:h-6 text-base leading-none grid place-content-center bg-light text-dark ">
            {isOpen ? <FaMinus /> : <FaPlus />}
          </span>
        </button>
        <div
          className={`text-[#878080] bg-[#0D0908] border-x border-t max-h-full overflow-y-auto custom_scroller text-left flex flex-col border-borderClr transition_theme  ${
            isOpen ? "h-full border-b" : "h-0"
          }`}
        >
          <div className="min-h-fit h-fit  flex flex-col">
          {item.map((link, i) => {
            return (
              <DropdownComponent
                key={i}
                title={link.title}
                url={link.url}
                droplist={link.dropdowns ? true : false}
              >
                {link.dropdowns &&
                  link.dropdowns.map((dropdown, ind) => {
                    return (
                      <Link onClick={() => {
                        setIsOpen(!isOpen);
                      }} key={ind} href={dropdown.url} className="pl-8 py-4 hover:bg-[#181514]">
                        {dropdown.title}
                      </Link>
                    );
                  })}
              </DropdownComponent>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
