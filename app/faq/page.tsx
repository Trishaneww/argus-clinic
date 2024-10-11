import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { faqs } from '@/data'
import React from 'react'

const faq = () => {
  return (
    <div className="flex flex-col items-center  bg-slate-50">
        <Navbar />
        <div className="mt-44 lg:mt-60 px-6 lg:px-20 flex flex-col items-start gap-4 w-full">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold">Frequently asked questions</h1>
            <p className="text-base lg:text-lg">Find quick answers to common questions about appointments and patient care.</p>
        </div>

        <section className="flex flex-col items-start gap-16 mt-24 lg:mt-32 px-6 lg:px-20">
            {faqs.slice(0,2).map((faq) => (
                <div className="flex flex-col items-start lg:w-[50%] gap-6">
                    <p className="text-2xl lg:text-5xl text-gray-700 font-thin">{faq.item}</p>
                    <p className="lg:text-lg text-gray-500">{faq.content}</p>
                </div>
            ))}
             <div className="flex flex-col items-start lg:w-[50%] gap-6">
                    <p className="text-2xl lg:text-5xl text-gray-700 font-thin">How do I book an appointment?</p>
                    <p className="lg:text-lg text-gray-500">To book an appointment online, simply click <a href="https://ocean.cognisantmd.com/online-booking/cddcbae7-4cba-4ebd-9e93-7b5aceb285e5" className="text-blue-400">here</a>. You'll be directed to our secure online booking form.</p>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default faq