import React from 'react'

export default function HeadingTag({tag}) {
  return (
    <p className="absolute left-0 top-0 z-20 vText uppercase border-b border-light bg-light text-dark py-6 sm:py-0 sm:px-2 h-full sm:h-7 w-7 sm:w-fit flex items-center flex-shrink-0 leading-none text-xs font-bold">
          {tag}
        </p>
  )
}
