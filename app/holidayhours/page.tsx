import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { holidayHours } from '@/data'
import Image from 'next/image'
import React from 'react'
import { IoMdPrint } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineMail, MdPhone } from 'react-icons/md'

const HolidayHours = () => {
  return (
    <div className="flex flex-col">
        <section className="flex flex-col holidayHours px-10">
          <Navbar />
          <div className="relative flex flex-col gap-4 mt-52 xl:ml-40 items-start xl:w-2/4">
            <h1 className="text-4xl md:text-6xl font-semibold">Holiday Hours 2024</h1>
            <p className="xl:w-3/4">Get care from a board-certified doctor or specialist on your terms, it's covered by many Medicaid plans.</p>
            <Button className="w-[200px]">Contact</Button>
          </div>
        </section>
        {/* <Navbar /> */}

         <section className="flex flex-col  justify-center items-center gap-6 px-6 md:px-20 mt-20">
            <div className="flex flex-col lg:flex-row justify-center gap-6 xl:gap-20 items-start text-center md:text-left">
              <div className="w-full lg:w-3/4">
                <h1 className="text-xl md:text-3xl font-semibold mb-6">Argus Doctors Clinic Holiday Hours</h1>
                <div className="text-sm md:text-base flex flex-col w-full xl:w-[650px] rounded-2xl bg-zinc-50">
                  <div className="flex items-center h-[60px] p-4">
                    <p className="w-1/3 xl:w-[200px]">Holiday</p>
                    <p className="w-1/3 xl:w-[300px]">Date</p>
                    <p className="w-1/3 xl:w-[180px]">Hours</p>
                  </div>
                  {holidayHours.map((holiday) => (
                    <div className={`text-sm md:text-base flex items-center h-[60px] p-4 ${holiday.id % 2 === 0 && 'bg-zinc-100'}`}>
                      <p className="w-1/3 xl:w-[200px]">{holiday.holiday}</p>
                      <p className="w-1/3 xl:w-[300px]">{holiday.date}</p>
                      <p className="w-1/3 xl:w-[180px]">{holiday.hours}</p>
                    </div>
                  ))}
              </div>
            </div>

              

              <Card className="w-full md:w-[380px]">
                    <CardHeader>
                        <CardTitle>Contact Us</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex justify-start items-center gap-4 w-full">
                            <MdPhone size={32}/>
                             <p className="text-sm">905-842-2410</p>
                        </div>
                        <div className="flex justify-start items-center gap-4 w-full">
                            <IoMdPrint size={36}/>
                            <p className="text-sm">905-842-7376</p>
                        </div>

                        <div className="flex justify-start items-center gap-4 w-full">
                            <MdOutlineMail size={34}/>
                            <p className="text-sm">argusclinic@gmail.com</p>
                        </div>

                        <p className="text-left text-sm md:text-base">Telephones answered Mon-Thurs 9:15 am - 12:00 pm and 1:15pm - 4:00 pm, Fri 9:15 am - 12:00 pm</p>
                   

                        <div className="flex justify-start items-center gap-4 w-full">
                            <IoLocationOutline size={44}/>
                            <p className="text-sm text-left">Suite 101, 586 Argus Road, Oakville, ON L6J 313</p>
                        </div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.1654527972723!2d-79.6904917082211!3d43.45714289061273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5ce7be055a59%3A0x754258adbb819e55!2s586%20Argus%20Rd%2C%20Oakville%2C%20ON%20L6J%203J3!5e0!3m2!1sen!2sca!4v1723251218472!5m2!1sen!2sca"  loading="lazy"  className="w-full h-[18rem]"></iframe>
                    </CardContent>
                </Card>
            </div>
         </section>

        <Footer />

    </div>
  )
}

export default HolidayHours