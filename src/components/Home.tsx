import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import cabo from '../public/cabo.jpg';
import chicago from '../public/chicago.jpeg';
// import disneyland from '../public/disneyland.jpg';
import miso from '../public/miso.jpeg';
import krillin from '../public/krillin.jpeg';
import pujol from '../public/pujol.jpg';
import yosemite from '../public/yosemite.jpeg';


const navigation = [
  { name: 'Email', href: 'about' },
  // { name: 'technologies', href: '#technologies' },
  // { name: 'projects', href: '#projects' },
  // { name: 'contact', href: 'contact' },
]

const imagesPathsArray = [chicago, miso, krillin, cabo, pujol, yosemite]

const CarouselImg = ({ imagesPaths }: any) => {
  // Map an array of photos 
  let arrayOfImages = imagesPaths.map((el: any, i: any) => {
      return (
          <div>
              <img key={i} src={el} width={'50px'} height={'50px'}/>
              <p className="legend"></p>
          </div>
      )
  });
  console.log(arrayOfImages);
  return (
      <Carousel>
          {arrayOfImages}
      </Carousel>
  );
}

export default function Example() {
  return (
    <div className="relative overflow-hidden ">
      <Popover as="header" className="relative">
        <div className="bg-gray-900 pt-6">
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="http://tracychang.io/">
                  <span className="sr-only">tracychang</span>
                  <img
                    className="h-8 w-auto sm:h-10 hover:shadow-gray-800] ease-out hover:translate-y-1 transition-all rounded"
                    src="https://i.postimg.cc/4dnpYBn6/3329-pink-sparkles.png"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:ml-10 md:flex">
                <a href="https://www.linkedin.com/in/tracycchang/" className="font-medium text-white hover:text-[#FEAD98]">
                  LinkedIn
                </a>
                <a href="https://www.github.com/tracycchang/" className="font-medium text-white hover:text-[#FEAD98]">
                  GitHub
                </a>
                {navigation.map((item) => (
                  <Link key={item.name} to={item.href} className="text-base font-medium text-white hover:text-[#FEAD98]">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="https://drive.google.com/file/d/1mANmoks8Quvfn5z0fVNVLvaYFqAlTRIb/view?usp=sharing"
                className="inline-flex items-center rounded-md border border-transparent bg-[#FE8A95] px-4 py-2 text-base font-medium text-white hover:bg-[#FEAD98]"
              >
                download resume
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden">
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://i.postimg.cc/4dnpYBn6/3329-pink-sparkles.png"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FE8A95]">
                    <span className="sr-only">close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div>
              <div className="pt-1 pb-1 px-5">
              <a href="https://www.linkedin.com/in/tracycchang/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-[#FE8A95]">
                  LinkedIn
                </a>
              </div>
                <div className="pb-1 px-5">

                <a href="https://www.github.com/tracycchang/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-[#FE8A95]">
                  GitHub
                </a>
                </div>
                <div className="pb-1 px-5">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-[#FE8A95]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-1 mb-2 px-5">
                  <a
                    href="https://drive.google.com/file/d/1mANmoks8Quvfn5z0fVNVLvaYFqAlTRIb/view?usp=sharing"
                    className="block w-full rounded-md bg-[#FE8A95] py-3 px-4 text-center font-medium text-white shadow hover:bg-[#FEAD98]"
                  >
                    download resume
                  </a>
                </div>

              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  {/* <a
                    href="#"
                    className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                  >
                    <span className="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      We're hiring
                    </span>
                    <span className="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                  </a> */}
                  <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">hello, my name is </span>
                    <span className="block text-[#FE8A95]">tracy chang.</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    I am a full-stack software engineer from Los Angeles, CA. Ever since I was in middle school, 
                    I enjoyed making Myspace & Xanga layouts using HTML. This sparked my passion for optimizing the user experience.
                    <br></br>
                    <br></br>
                    When I am not coding, I enjoy playing video games (poorly) such as Fortnite, Maplestory, and Minecraft.
                    When I am away from my desk, I am probably entertaining my three-legged cat, Miso, or out trying 
                    a new boba shop or restaurant. I also rejoice in doodling on my iPad (including Gartic Phone!) and I take 
                    every chance I can to travel. 
                  </p>
                  {/* <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          />
                        </div> */}
                        {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          >
                            Start free trial
                          </button>
                        </div>
                      </div> */}
                      {/* <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary. By providing your email, you agree to
                        our{' '}
                        <a href="#" className="font-medium text-white">
                          terms of service
                        </a>
                        .
                      </p>
                    </form>
                  </div> */}
                </div>
              </div>
              <div className="justify-items-center mt-12 mb-16 sm:-mb-48 lg:relative lg:m-0">
                <div className="grid justify-items-center mr-10 mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-[500px] lg:min-w-[500px] lg:px-0 justify-center">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  {/* <img
                    className="flex justify-center w-full lg:w-auto lg:max-w-none lg:h-auto"
                    src="https://i.postimg.cc/Ls2KjFLT/chicago.jpg"
                    alt="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                  /> */}

                  <CarouselImg imagesPaths={imagesPathsArray} />


                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}
