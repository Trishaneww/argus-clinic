import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { holidayHours } from '@/data'
import React from 'react'

const HolidayHours = () => {
  return (
    <div className="flex flex-col">
        <Navbar />

         <section className="flex flex-col gap-6 px-20 mt-20">
            <h1 className="text-6xl font-semibold">Holiday Hours 2024</h1>

            <div>
              <div className="flex flex-col w-[650px] p-4 rounded-2xl bg-zinc-50">
                <div className="flex items-center h-[60px]">
                  <p className="w-[300px]">Date</p>
                  <p className="w-[200px]">Holiday</p>
                  <p className="w-[150px]">Hours</p>
                </div>
                {holidayHours.map((holiday) => (
                  <div className="flex items-center h-[60px]">
                    <p className="w-[300px]">{holiday.date}</p>
                    <p className="w-[200px]">{holiday.holiday}</p>
                    <p className="w-[150px]">{holiday.hours}</p>
                  </div>
                ))}
              </div>

              <div>

              </div>

            </div>

         </section>

        <Footer />

    </div>
  )
}

export default HolidayHours