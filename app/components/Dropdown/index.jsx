'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

function DropdownComponent ({ title , url , droplist = false, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={ `flex flex-col h-fit w-full`}>
            <div
                className="flex-shrink-0 overflow-hidden h-14 flex items-stretch border-b border-borderClr">
                 <Link href={url} className="px-4 hover:opacity-60 transition-all flex items-center flex-grow">{title}</Link>
                {
                    droplist && <button 
                    onClick={() => { setIsOpen(!isOpen) }}
                    className="px-4 text-[#f1f1f1] hover:opacity-60 transition-all text-base leading-none grid place-content-center">{isOpen ? <FaMinus /> : <FaPlus />}</button> 
                }
            </div>
            <div className={`overflow-hidden text-left flex flex-col ${isOpen?'h-full border-b border-borderClr':'h-0'}`}>
            {children}
            </div>
        </div>
    );
};

export { DropdownComponent };
