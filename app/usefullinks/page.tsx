import Footer from '@/components/Footer'
import Navbar3 from '@/components/Navbar3'
import { resources } from '@/data'
import React from 'react'


const usefullinks = () => {
  return (
    <div className="flex flex-col items-center  bg-slate-50">
        <Navbar3 />
        <div className="mt-32 lg:mt-52 px-6 lg:px-20 flex flex-col items-start gap-4 w-full">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold">Useful Links</h1>
            <p className="text-base lg:text-lg">Explore a curated list of links to trusted health resources, services, and tools to support your well-being.</p>
        </div>

        <section className="flex flex-col justify-start gap-4 mt-24 lg:mt-32 lg:px-20 px-6 w-full">
            {resources.slice(2,11).map((resource) => (
                <a href={resource.link} key={resource.id} target="_blank" className="p-2 hover:underline delay-200 transition-all">{resource.title}</a>
            ))}
        </section>

        <Footer />
    </div>
  )
}

export default usefullinks