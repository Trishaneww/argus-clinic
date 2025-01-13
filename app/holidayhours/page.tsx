import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { holidayHours } from '@/data'
import Image from 'next/image'
import React from 'react'
import clock from '../../public/assets/images/clock.png';

const HolidayHours = () => {
  return (
    <div className="flex flex-col">
        <Navbar />
        <section className="flex bg-gray-100 px-10 pb-12 lg:mt-20">
          <div className="relative flex flex-col gap-4 mt-52 xl:ml-40 items-start justify-center h-full xl:w-2/4">
            <h1 className="text-4xl md:text-6xl font-semibold">Holiday Hours 2025</h1>
            <p className="xl:w-3/4">Please note our adjusted hours during the holiday season to ensure you receive the care you need.</p>
          </div>

          <div className="w-1/4 hidden lg:flex mt-12">
            <Image
              src={clock}
              alt="christmas clock" 
            />
          </div>
        </section>

         <section className="flex flex-col  justify-start items-start gap-6 px-6 md:px-20 mt-20">
            <div className="flex flex-col lg:flex-row justify-center gap-6 xl:gap-20 items-start text-center md:text-left">
              <div className="w-full lg:w-[90%]">
                <h1 className="text-xl md:text-3xl font-semibold mb-6">Argus Doctors Clinic Holiday Hours 2025</h1>
                <div className="text-sm md:text-base flex flex-col w-full lg:w-[650px] xl:w-[680px] rounded-2xl bg-zinc-50 ">
                  <div className="flex items-center h-[60px] p-4">
                    <p className="w-1/3 lg:w-[200px] xl:w-[300px]">Holiday</p>
                    <p className="w-1/3 lg:w-[300px] xl:w-[300px]">Date</p>
                    <p className="w-1/3 lg:w-[180px] xl:w-[300px]">Hours</p>
                  </div>
                  {holidayHours.map((holiday) => (
                    <div className={`text-sm md:text-base flex items-center h-[60px] p-4 ${holiday.id % 2 === 0 && 'bg-zinc-100'}`} key={holiday.id}>
                      <p className="w-1/3 lg:w-[200px] xl:w-[300px]">{holiday.holiday}</p>
                      <p className="w-1/3 lg:w-[300px] xl:w-[300px]">{holiday.date}</p>
                      <p className="w-1/3 lg:w-[180px] xl:w-[300px]">{holiday.hours}</p>
                    </div>
                  ))}
              </div>
            </div>
            </div>
         </section>

        <Footer />

    </div>
  )
}

export default HolidayHours