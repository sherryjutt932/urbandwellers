"use client";
import { useParams } from "next/navigation";
import ArtistsList from "@/app/constants/Artists";
import { GoArrowUpRight } from "react-icons/go";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa6";
import HeadingTag from "../../../components/HeadingTag";
import Gallery from "../../../components/Gallery";

const ArtistPage = () => {
  const { id } = useParams();
  const item = ArtistsList.find((artist) => artist.id === id);
  const filteredItems = ArtistsList.filter((artist) => artist.id !== id).slice(
    0,
    4
  );

  const [isSpecList, setIsSpecList] = useState(false);

  const handleSpecList = () => {
    setIsSpecList(!isSpecList);
  };

  return (
    <div className="flex flex-nowrap flex-col sm:flex-row w-full h-fit sm:w-fit sm:h-full">


      <div className="w-[100vw] pl-7 sm:pl-0 sm:w-[50vw] sm:min-w-[500px] relative hover:bg-[#181514] transition-all h-full border-r border-b border-borderClr flex flex-col pb-8 sm:pb-0">
        <div className="sm:hidden">
              <HeadingTag tag={""} />
              </div>
        <div className=" gap-4 flex-grow justify-end flex flex-col-reverse sm:flex-col overflow-hidden ">

          <div className="flex gap-2 sm:gap-6 sm:ml-auto sm:mb-auto sm:p-10 px-4 flex-grow flex-col w-1/2">
            
            <a target="_blank" rel="noopener noreferrer" href={item.spotify}>
              <div className="flex gap-3 items-center font-semibold">
                <span className="text-xl bg-light text-dark block">
                  <GoArrowUpRight />
                </span>
                <p className="array">Spotify</p>
              </div>
            </a>
            {/* Link */}
            <a target="_blank" rel="noopener noreferrer" href={item.appleMusic}>
              <div className="flex gap-3 items-center font-semibold">
                <span className="text-xl bg-light text-dark block">
                  <GoArrowUpRight />
                </span>
                <p className="array">Apple Music</p>
              </div>
            </a>
          </div>

          <div className="block sm:hidden sm:w-[60%] px-4 sm:p-10 text-[#878080]">
              {item.bio}
            </div>

          {/* Detail */}
          <h1 className="mx-4 sm:mx-10 text-3xl sm:text-8xl font-medium leading-tight">
            {item.title}
          </h1>
          

          <div className="sm:mt-4 flex flex-col sm:flex-row items-end">
            <button className="text-black px-6 py-3 flex justify-between uppercase items-center bg-[#FAAF4A] hover:bg-[#F7A434] transition_theme w-full sm:w-[40%]">
              <span>Buy Today</span>
              <span className={`ml-4 text-base`}>
                <FaArrowRightLong />
              </span>
            </button>

            <div className="sm:block hidden sm:w-[60%] p-4 sm:p-10 text-[#878080]">
              {item.bio}
            </div>
          </div>
        </div>
      </div>

      {item.gallery && <Gallery data={item.gallery} />}
      {item.gallery &&
        item.gallery.map((galleryItem, index) => {
          return (
            <div
              key={index}
              className="w-fit min-w-[90vw] pl-7 sm:pl-0 h-full border-r border-borderClr flex flex-nowrap flex-col  sm:flex-row overflow-hidden relative"
            >
              
              {galleryItem.label ? <HeadingTag tag={galleryItem.label} /> : <div className="sm:hidden">
              <HeadingTag tag={""} />
              </div>
              }

              <div className="sm:w-[30vw] max-w-[20ch] m-4 sm:m-10 sm:text-3xl text-2xl font-medium leading-tight pb-12">
                {galleryItem.detail}
              </div>
              <Image
                className={`w-full h-full object-cover block border-y border-borderClr p-4 sm:p-0`}
                src={galleryItem.product}
                width={1000}
                height={1000}
                alt="image"
              />
            </div>
          );
        })}

      {item.blog && (
        <div className="w-full sm:w-[60vw] h-full relative border-r border-borderClr">
          {item.blogLabel && <HeadingTag tag={item.blogLabel} />}

          <div
            className="colText h-full w-full p-6 pl-12 sm:p-10 sm:pl-10 gap-6 no_scroller overflow-auto"
          >
            {item.blog.map((blogItem, index) => {
              return (
                <p className=" pb-6 text-base text-[#878080]" key={index}>
                  {blogItem}
                </p>
              );
            })}
          </div>
        </div>
      )}

      {item.video && (
        <div className="w-full sm:w-[90vw] pl-7 sm:pl-0 h-full flex flex-col sm:flex-row relative border-r border-b border-borderClr">
          <HeadingTag tag={"video"} />

          <video
            controls
            width="1200"
            height="600"
            className="sm:w-[70%] h-full border-r border-borderClr"
          >
            <source src={item.video.src} type="video/mp4" />
            {/* <source src="/video.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>

          <div className="h-full flex flex-col sm:w-[30%] p-6 sm:p-10 gap-6 no_scroller overflow-auto">
            <div className="text-3xl font-medium leading-tight">
              {item.video.title}
            </div>

            {item.video.detail.map((videoItem, index) => {
              return (
                <p className="pb-6 text-base text-[#878080]" key={index}>
                  {videoItem}
                </p>
              );
            })}
          </div>
        </div>
      )}

      {item.specs && (
        <div className="w-full sm:w-[600px] h-full flex relative border-r border-b border-borderClr pb-20 sm:pb-0">
          <HeadingTag tag={"Specs"} />

          <div className="flex flex-col sm:m-10 m-7 ml-12 sm:ml-10">
            {item.specs.slice(0, 7).map((spec, index) => {
              return (
                <div key={index} className="py-4 border-b border-borderClr">
                  <p className="text-base text-[#878080] uppercase">
                    {spec.title}
                  </p>
                  <p className="text-sm text-[#878080]">{spec.detail}</p>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleSpecList}
            className={`absolute right-0 bottom-0  py-4 px-6 gap-10 flex justify-between uppercase items-center transition_theme border-r border-black ${
              isSpecList
                ? "bg-[#252222] hover:bg-[#211E1E] text-white"
                : "bg-[#fff] hover:bg-[#888] text-black"
            }`}
          >
             {isSpecList ?
              <>
              <span>close</span>
              <span className={`text-base`}>
                <FaMinus />
              </span>
              </> : <>
              <span>full list</span>
              <span className={`text-base`}>
                <FaPlus />
              </span>
              </>}

           
          </button>
        </div>
      )}
      {item.specs && isSpecList && (
        <div className="w-full sm:min-w-fit sm:w-fit sm:h-full flex relative border-r border-borderClr overflow-hidden bg-[#252222]">
          <div className="flex flex-wrap flex-col sm:flex-shrink-0 mx-10">
            {item.specs.map((spec, index) => {
              return (
                <div
                  key={index}
                  className="w-auto sm:w-[400px] mr-10 h-fit py-4 border-b border-borderClr"
                >
                  <p className="text-base text-[#878080] uppercase">
                    {spec.title}
                  </p>
                  <p className="text-sm text-[#878080]">{spec.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {item.downloads && (
        <div className="sm:w-[30vw] sm:min-w-[300px] py-10 h-full relative border-r border-b border-borderClr">
          <HeadingTag tag={"downloads"} />

          <div className="w-[30vw] max-w-[20ch] mx-10  text-3xl font-medium leading-tight">
            Minimoog Model D Downloads
          </div>

          <div className="flex gap-6 p-10 flex-grow flex-col">
            {item.downloads.map((download, index) => {
              return (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={download.url}
                >
                  <div className="flex gap-3 items-center font-semibold">
                    <span className="text-xl bg-light text-dark block">
                      <GoArrowUpRight />
                    </span>
                    <p className="array">{download.title}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
      <div className="flex flex-nowrap flex-col sm:flex-row w-full h-fit sm:w-fit sm:h-full relative">
        <HeadingTag tag={"related items"} />
        {filteredItems.map((relatedItem, index) => {
          return (
            <Link
              key={index}
              href="/pages/Artists/[id]"
              as={`/pages/Artists/${relatedItem.id}`}
            >
              <div className="w-[100vw] sm:w-[400px]  hover:bg-[#181514] transition-all h-full border-r border-borderClr flex flex-col">
                <div className="pl-16 sm:pl-10 px-10 pb-10 gap-4 flex-grow justify-end flex flex-col overflow-hidden">
                  {/* Divider */}
                  <hr className="sm:border-t border-borderClr w-full" />

                  <div className="mt-4 border-borderClr"></div>

                  <div className="flex flex-wrap gap-2">
                    {relatedItem.tags.map((tag, i) => {
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
                  <h3 className="text-base sm:text-2xl font-medium leading-tight">
                    {relatedItem.latest}
                  </h3>

                  <div className="flex gap-3 items-center font-semibold">
                    <span className="text-xl bg-light text-dark block">
                      <GoArrowUpRight />
                    </span>
                    <p className="array">Learn more</p>
                  </div>

                  <div className="relative overflow-hidden w-full max-h-48 rounded-sm">
                    <Image
                      className="w-full block hover:scale-110 transition_theme"
                      src={relatedItem.latestimg}
                      width={1000}
                      height={1000}
                      alt="image"
                    ></Image>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistPage;
