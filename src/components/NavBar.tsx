import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  // { name: 'about', href: 'about' },
  // { name: 'technologies', href: 'technologies' },
  // { name: 'projects', href: 'projects' },
  // { name: 'contact', href: 'contact' },
]

export default function NavBar() {
  return (
    <div className="relative  bg-gray-900">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="relative z-10 bg-gray-900 justify-between pb-4 sm:pb-4 md:pb-4 md:w-full lg:w-full lg:pb-4 xl:pb-4">

          <Popover as="header" className="relative">
            <div className="relative pt-6">
              <nav 
                className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" 
                aria-label="Global"
              >
                <div className="flex flex-1 items-center">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="https://www.tracychang.io/">
                      <span className="sr-only"></span>
                      <img
                        alt=""
                        className="h-8 w-auto sm:h-10 hover:shadow-gray-800] ease-out hover:translate-y-1 transition-all rounded"
                        src="https://i.postimg.cc/4dnpYBn6/3329-pink-sparkles.png"
                      />
                    </a>
                    <div className="mr-2 flex items-center md:hidden">
                      <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FE8A95]">
                        <span className="sr-only">open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  <a href="https://tracychang.io/" className="font-medium text-white hover:text-[#FE8A95]">
                    Home
                  </a>                  
                  <a href="https://linkedin.com/in/tracycchang/" className="font-medium text-white hover:text-[#FE8A95]">
                    LinkedIn
                  </a>
                  <a href="https://github.com/tracycchang/" className="font-medium text-white hover:text-[#FE8A95]">
                    GitHub
                  </a>  
                  {/* {navigation.map((item) => (
                    <Link 
                    key={item.name} 
                    to={item.href} 
                    className="font-medium text-white hover:text-[#FE8A95]">
                      {item.name}
                    </Link>
                  ))} */}
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
              <a href="https://www.tracychang.io/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-[#FE8A95]">
                  Home
                </a>
              </div>
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
                {/* <div className="pb-1 px-5">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-[#FE8A95]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div> */}
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
        </div>
      </div>
    </div>
  )
}
