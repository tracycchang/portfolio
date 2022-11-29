import { HeartIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { Transition } from '@headlessui/react'


const technologies = [
  {
    name: 'React',
    description: 
      '',
    icon: HeartIcon,
  },
  {
    name: 'JavaScript',
    description:
      'ES6+',
    icon: HeartIcon,
  },
  {
    name: 'Redux',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'TypeScript',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'Node.js',
    description: 
      '',
    icon: SparklesIcon,
  },
  {
    name: 'Express.js',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'PostgreSQL',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'HTML',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'SASS',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'CSS',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'Material-UI',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'Tailwind CSS',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'Git/GitHub',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'MongoDB',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'Webpack',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'Authentication',
    description:
      'OAuth',
    icon: SparklesIcon,
  },
  {
    name: 'TDD',
    description:
      'Jest',
    icon: SparklesIcon,
  },
  {
    name: 'Electron',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'Docker',
    description:
      '',
    icon: SparklesIcon,
  },
  {
    name: 'AWS',
    description:
      '',
    icon: SparklesIcon,
  },
]


export default function Technologies() {
  return (
    // <div className="overflow-hidden bg-gray-50">
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">

        <div className="lg:col-span-1">
          <h2 className="flex justify-center text-5xl mb-6 font-black tracking-tight text-gray-900 sm:text-5xl">technologies</h2>
        </div>

        <div className="relative lg:grid lg:gap-x-8">
          <dl className="mt-10 space-y-2 sm:grid sm:grid-cols-4 sm:gap-x-1 sm:gap-y-2 sm:space-y-0 lg:col-span-2 lg:mt-0 justify-center ">
            {technologies.map((tech) => (
              <div>
                <dt>
              <div key={tech.name} className="grid justify-items-center">
                  <div className="flex justify-center h-20 w-20 items-center rounded-md bg-[#5861AB] text-white">
                    <tech.icon className="h-12 w-12" aria-hidden="true" />
                  </div>
              </div>
                  <p className="mt-1 text-xl font-medium leading-6 text-gray-900 text-center">{tech.name}</p>
                <dd className="flex mb-5 text-base text-gray-500 justify-center">{tech.description}</dd>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    // </div>
  )
}
