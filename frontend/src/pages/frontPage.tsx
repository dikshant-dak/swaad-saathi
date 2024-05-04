import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FrontPage() {
  return (
    <>
      <div className="flex">
        <div
          id="default-carousel"
          className="relative w-full h-screen "
          data-carousel="slide"
        >
          <div className="relative h-screen overflow-hidden rounded-lg md:h-96">
            <div
              className="hidden duration-700 ease-in-out bg-black"
              data-carousel-item
            >
              <Image
                height={500}
                width={500}
                src="/images/1.jpg"
                className=" -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Image1"
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                height={500}
                width={500}
                src="/images/1.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                height={500}
                width={500}
                src="/images/1.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                height={500}
                width={500}
                src="/images/1.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                height={800}
                width={500}
                src="/images/1.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        <div className="w-2/4 grid bg-black overflow-hidden  items-center justify-center">
          <div className="animate-slide-text text-white p-6">
            <span className="font-serif text-justify text-3xl mb-5 block">
              Welcome To
            </span>
            <span className="text-orange-500 font-serif text-8xl block">
              Swaad{' '}
            </span>
            <span className="text-orange-500 font-serif text-8xl block ml-20">
              {' '}
              Saathi
            </span>
          </div>

          <div className="bg-black p-4 rounded-lg flex justify-between">
            <Link href="/login">
              <button className="bg-orange-500 w-32 text-white px-8 py-3 rounded-md">
                Login{' '}
              </button>
            </Link>
            <Link href="/registration">
              <button className="bg-red-500 w-32 text-white px-8 py-3 rounded-md">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
