import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { faqs, resources } from '@/data'
import Link from 'next/link'
import React from 'react'

const patientresources = () => {
  return (
    <div className="flex flex-col items-center  bg-slate-50">
        <Navbar />
        <div className="mt-36 lg:mt-60 px-6 lg:px-20 flex flex-col items-start gap-4 w-full">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold">Patient Resources</h1>
            <p className="text-base lg:text-lg">Find helpful guides, forms, and health information to make your visit easy and stress-free—all in one place.</p>
        </div>

        <section className="flex flex-col justify-start gap-4 mt-24 lg:mt-32 lg:px-20 px-6 w-full">
            {resources.slice(0,2).map((resource) => (
                <a href={resource.link} key={resource.id} target="_blank" className="p-2 hover:underline delay-200 transition-all">{resource.title}</a>
            ))}
        </section>

        <Footer />
    </div>
  )
}

export default patientresources