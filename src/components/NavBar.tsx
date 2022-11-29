import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'about', href: 'about' },
  { name: 'technologies', href: 'technologies' },
  { name: 'projects', href: 'projects' },
  { name: 'contact', href: 'contact' },
]

export default function NavBar() {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-gray-900 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span className="sr-only"></span>
                      <img
                        alt=""
                        className="h-8 w-auto sm:h-10 transition ease-in-out delay-50 hover:animate-[wiggle_1.5s_ease-in-out_infinite]"
                        src=""
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#cdcdcd]">
                        <span className="sr-only">open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.href} className="font-medium text-[#cdcdcd] hover:text-indigo-400">
                      {item.name}
                    </Link>
                  ))}
                  <a href="https://github.com/tracycchang/" className="font-medium text-[#cdcdcd] hover:text-indigo-400">
                    GitHub
                  </a>                  
                  <a href="https://linkedin.com/in/tracycchang/" className="font-medium text-[#cdcdcd] hover:text-indigo-400">
                    LinkedIn
                  </a>
                  <a href="https://drive.google.com/file/d/1mANmoks8Quvfn5z0fVNVLvaYFqAlTRIb/view?usp=sharing" className="font-medium text-indigo-400 hover:text-indigo-400">
                    resume
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
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src=""
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#cdcdcd]">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>

                  {/* MOBILE MENU CONTENTS */}
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Link key={item.name} to={item.href} className="block rounded-md px-3 py-2 text-center font-medium text-gray-900 hover:bg-gray-50 hover:text-[#9cb59d]">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <a
                    href="https://github.com/oslabs-beta/ghost"
                    className="block w-full px-5 py-3 text-center font-medium text-gray-900 hover:bg-gray-50 hover:text-[#9cb59d]"
                  >
                    GitHub
                  </a>
                  <a href="https://github.com/oslabs-beta/ghost/" className="font-medium text-[#cdcdcd] hover:text-[#9cb59d]">
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/oslabs-beta/ghost"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-[#9cb59d] hover:bg-gray-100"
                  >
                    Resume
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  )
}
