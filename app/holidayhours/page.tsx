import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const HolidayHours = () => {
  return (
    <div className="flex flex-col">
        <Navbar />

         <section className="flex flex-col gap-6 px-20 mt-10">
            <h1 className="text-6xl">Holiday Hours</h1>
            <p>January 1, Monday - New Year's Day</p>
            <p>February 19, Monday - Family Day</p>
            <p>March 29, Friday - Good Friday</p>
            <p>May 20, Monday - Victoria Day</p>
            <p>July 1, Monday - Canada Day</p>
            <p>August 5, Monday - Civic Holiday</p>
            <p>September 2. Monday - Labour Day</p>
            <p>October 14. Monday - Thanksgiving</p>
            <p>December 25, Wednesday - Christmas Day</p>
            <p>December 26. Thursday - Boxing Dav</p>
         </section>

        <Footer />

    </div>
  )
}

export default HolidayHours