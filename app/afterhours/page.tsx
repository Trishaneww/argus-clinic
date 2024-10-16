import React from 'react'
import '../../styles/global.scss';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Image from 'next/image';
import logo from '../../public/assets/images/background14.jpeg';

const AfterHours = () => {
  return (
    <div className="flex flex-col bg-slate-50">
       {/* <section className="flex flex-col afterHours">
        <Navbar />
        <div className="relative flex flex-col gap-4 mt-52 items-center justify-center text-center">
          <h1 className="text-6xl text-black">After Hours</h1>
        </div>
      </section> */}

        <Navbar />

        <section className="flex flex-col xl:flex-row gap-12 px-5 lg:px-20 mt-40 md:mt-64">
          <div className="flex flex-col text-center xl:text-left gap-6 lg:w-[90%] text-base lg:text-lg">
            <h1 className="text-3xl lg:text-6xl font-semibold">After Hours Clinic</h1>
            <div className="flex gap-4 font-bold text-base md:text-xl lg:text-2xl">
              <p>FHO: 905-815-9177</p>
              <p>Telehealth: 1-866-797-0000</p>
            </div>
            <p>As you probably know, the office is part of a large group of Family Physicians called the South Oakville FHO (Family Health Organization).
            There is a FHO doctor, one of our colleagues, on call every evening from Monday to Friday from 5 pm to 8 pm and Saturdays and Sundays.</p>

            <p>This is only for URGENT appointments and is not meant for routine visits. In case of a same-day URGENT problem, please call our office first to request an appointment and we will try to fit you in the same or the next day. Otherwise, if it is after 5 pm, please call the FHO phone line at 905-815-9177 and you will be informed of the location and phone number of the FHO Clinic for that night or the Saturday or Sunday. We will receive a note regarding your encounter so that we can follow up with you. The results of any tests the After Hours doctor ordered will be sent to your family doctor. You may also call Telehealth at 1-866-797-0000 to speak to an RN.</p>

            <p>Please note that if you choose to use walk-in clinics outside our FHO, the medical information for that visit is NOT sent to us,  and this makes it unsafe as there is no continuity of care and they do not have your medical history. As a result, repeated visits to walk-in clinics outside of our FHO could result in the request to find another doctor.</p>

            <p>Part of the agreed-upon terms of the FHO in which you enrolled includes using our After Hours Clinics and avoiding other walk-in clinics.</p>

            <p>In the event of an emergency, call 911 or go to the nearest hospital Emergency Room.</p>
          </div>

          <Image 
            width={600}
            height={600}
            src="/assets/images/background14.jpeg"
            alt="after hours"
          />

          {/* <img src={logo} /> */}
        </section>

        <Footer />
       
        
    </div>
  )
}

export default AfterHours