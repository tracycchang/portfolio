import { ChartBarIcon, CalculatorIcon, CogIcon, CloudIcon } from '@heroicons/react/24/outline'
import { Transition } from '@headlessui/react'
import Footer from './Footer'
import NavBar from './NavBar'


const projects = [
  {
    name: 'ghost',
    image: 'https://i.postimg.cc/4NsFyx1W/Screen-Shot.png',
    description: 
      'Create custom graphs for your AWS Lambda functions',
    built: 
      'React, TypeScript, Electron, Chart.JS, Material-UI',
  },
  {
    name: 'ghost-metrics.io',
    image: 'https://i.postimg.cc/3JZr0WQN/Screenshot-2022-11-28-at-4-55-04-PM.png',
    description: 
      'Website for the ghost application',
    built: 
      'React, TypeScript, Tailwind CSS, Tailwind UI',
    href:
      'https://www.ghost-metrics.io/',
  },
  {
    name: 'Welcome Home Friend 2.0',
    image: 'https://i.postimg.cc/vTsx7B8B/welcomehomefriend.png',
    description:
      'Post and find information about lost pets',
    built: 
      'React, Node.JS, Express.JS, Tailwind CSS',
  },
  {
    name: 'SoundBoard',
    image: 'https://i.postimg.cc/6QDxm4v9/soundboard.png',
    description:
      'Follow your DJ dreams and create your own music mixer',
    built: 
      'React, Node.JS, Express.JS, Tailwind CSS',
  },
  {
    name: 'YOUR COLORWAY',
    image: 'https://i.postimg.cc/rmfhdvNK/your-colorway.png',
    description:
      'Create custom color palettes and combinations',
    built: 
      'React, Redux, Node.JS, Express.JS',
  },
]


export default function Projects() {
  return (
    <div id="projects" className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="lg:col-span-1">
            <h2 className="flex justify-center text-5xl mb-6 font-black tracking-tight text-gray-900 sm:text-5xl">projects</h2>
          </div>
        <div className="relative lg:grid lg:gap-x-8 mb-10">
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {projects.map((projects) => (
              <div className="grid justify-items-center font-bold text-2xl bg-gray-900 rounded-3xl" key={projects.name}>
                <dt>
                  <p className="mt-5 mb-3 text-lg font-black leading-6 text-[#FE8A95]"><a href={projects.href}>{projects.name}</a></p>
                </dt>
                <div className = "object-scale-down w-96">
                <img src={projects.image} />
                </div>
                <dd className="mt-2 text-base text-gray-300">{projects.description}</dd>
                <dd className="mt-0 mb-4 text-base text-gray-300"><i>{projects.built}</i></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </div>
  )
}
