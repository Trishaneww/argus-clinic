"use client"

import Footer from '@/components/Footer'
import Navbar3 from '@/components/Navbar3'
import { faqs } from '@/data'
import React from 'react'
import { useState } from 'react'

const faq = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const images: string[] = [
    "/assets/images/blockfee1.png", // Replace with your image URLs
    "/assets/images/blockfee2.png",
    "/assets/images/blockfee3.png",
  ];

  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center  bg-slate-50">
        <Navbar3 />
        <div className="mt-32 lg:mt-52 px-6 lg:px-20 flex flex-col items-start gap-4 w-full">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold">Frequently asked questions</h1>
            <p className="text-base lg:text-lg">Find quick answers to common questions about appointments and patient care.</p>
        </div>

        <section className="flex flex-col items-start gap-16 mt-24 lg:mt-32 px-6 lg:px-20">
            {faqs.map((faq) => (
                <div className="flex flex-col items-start lg:w-[50%] gap-6" key={faq.id}>
                    <p className="text-2xl lg:text-5xl text-gray-700 font-thin">{faq.item}</p>
                    <p className="lg:text-lg text-gray-500">{faq.content}</p>
                </div>
            ))}


            <div className="flex flex-col items-start lg:w-[50%] gap-6">
                <p className="text-2xl lg:text-5xl text-gray-700 font-thin">Uninsured services & block fees</p>
                <div className="flex gap-4 justify-center items-center">
                {images.map((image, index) => (
                    <img
                    key={index}
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-32 h-32 object-cover cursor-pointer rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
                    onClick={() => openModal(image)}
                    />
                ))}

                {isModalOpen && (
                    <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={closeModal}
                    >
                    <img
                        src={currentImage || ""}
                        alt="Full Screen"
                        className="max-w-full max-h-full rounded-lg"
                    />
                    <button
                        className="absolute top-4 right-4 text-white text-xl"
                        onClick={closeModal}
                    >
                        ✕
                    </button>
                    </div>
                )}
            </div>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default faq