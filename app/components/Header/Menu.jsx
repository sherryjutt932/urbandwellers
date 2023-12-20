import Link from "next/link";
import React from "react";
import { Navigationitems, Connectitems } from "@/app/constants/NavItems";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Menu() {
  return (
    <div className="bg-light text-dark w-full h-[460px] absolute top-[90px] left-0 flex z-50">
      <div className="border-r border-borderClrL flex-1 flex flex-col">
        <p className="uppercase  border-b border-borderClrL p-2 leading-none text-xs font-bold">
          navigation
        </p>
        <ul className="flex-grow flex flex-col">
          {Navigationitems.map((item, index) => (
            <li
              key={index}
              className={`group hover:bg-[#00000010] hover:text-[#878080] ${
                index === 0 ? "flex-grow flex items-end" : ""
              }`}
            >
              <Link
                href={item.url}
                className={`flex items-center w-full px-6 text-2xl capitalize font-medium ${
                  index === Navigationitems.length - 1 ? "pb-4 pt-1" : " py-1"
                }`}
              >
                <span>{item.title}</span>
                <span
                  className={`ml-4 text-base opacity-0 group-hover:opacity-100`}
                >
                  <FaArrowRightLong />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-r border-borderClrL flex-1 flex flex-col">
        <p className="uppercase border-b border-borderClrL p-2 leading-none text-xs font-bold">
          Connect
        </p>
        <ul className="flex-grow flex flex-col">
          {Connectitems.map((item, index) => (
            <li
              key={index}
              className={`hover:opacity-80 text-[#878080] ${
                index === 0 ? "flex-grow flex items-end" : ""
              }`}
            >
              <Link
                href={item.url}
                className={`flex items-center w-full px-6 text-xl leading-tight capitalize font-medium `}
              >
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="`w-full p-6 text-sm leading-tight capitalize font-normal underline text-[#878080]">
          <Link href="/pages/terms" className={` hover:opacity-80`}>
            terms & privacy
          </Link>
        </div>
      </div>
      <div className="border-r border-borderClrL flex-1 flex flex-col font-medium leading-snug">
        <p className="uppercase border-b border-borderClrL p-2 leading-none text-xs font-bold">
          NEWSLETTER
        </p>
        <p className="p-6 mb-5">
        Sign up for the Moog newsletter to be the first to hear about new Moog synthesizers, synth tutorials and events in your area.
        </p>

        <div className="p-6 gap-6 flex-grow flex flex-col justify-end">
            <hr className="border-t border-borderClrL w-full"/>
            <div>
            <input type="email" placeholder="Email" className="w-full bg-transparent outline-none text-dark placeholder-placeholderClrL" />
            </div>
        </div>

        <button className="px-6 py-3 flex justify-between uppercase items-center bg-[#FAAF4A] hover:bg-[#F7A434] transition_theme w-full">
          <span>subscribe</span>
          <span className={`ml-4 text-base`}>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
      <div className="flex-1 flex flex-col font-medium leading-snug">
        <p className="uppercase border-b border-borderClrL p-2 leading-none text-xs font-bold">
          LOGIN / REGISTER
        </p>

        <div className="`w-full p-6 flex flex-col gap-2 font-normal underline text-[#878080]">
          <Link href="/pages/terms" className={` hover:opacity-80`}>
            Create an account
          </Link>
          <Link href="/pages/terms" className={` hover:opacity-80`}>
            Forgot your password?
          </Link>
        </div>
        
        <div className="p-6 gap-6 flex-grow flex flex-col justify-end">
            <hr className="border-t border-borderClrL w-full"/>
            <div>
            <input type="text" placeholder="Username or Email" className="w-full bg-transparent outline-none text-dark placeholder-placeholderClrL" />
            </div>
            <hr className="border-t border-borderClrL w-full"/>
            <div>
            <input type="password" placeholder="Password" className="w-full bg-transparent outline-none text-dark placeholder-placeholderClrL" />
            </div>
        </div>


        <button className="px-6 py-3 flex justify-between uppercase items-center bg-[#FAAF4A] hover:bg-[#F7A434] transition_theme w-full">
          <span>sign in</span>
          <span className={`ml-4 text-base`}>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
}
