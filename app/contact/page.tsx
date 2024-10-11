import Footer from '@/components/Footer'
import Location from '@/components/Location'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { IoMdPrint } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineMail, MdPhone } from 'react-icons/md'
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-col">

        <section className="flex flex-col contact px-10">
          <Navbar />
          <div className="relative flex flex-col gap-4 mt-52 xl:ml-40 items-start xl:w-2/4">
            <h1 className="text-4xl md:text-6xl font-semibold">Contact</h1>
            <p className="xl:w-3/4">For any questions or to get in touch, please contact us by phone or email.</p>
            <a href="https://www.google.com/maps/dir//586+Argus+Rd+Oakville,+ON+L6J+3J3/@43.4571391,-79.6856208,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x882b5ce7be055a59:0x754258adbb819e55" target="_blank"><Button className="w-[200px]">Get Directions <MdArrowOutward className="ml-2"/> </Button></a>
          </div>
        </section>

        <section className="flex flex-col gap-6 px-4 xl:px-20 mt-24">
            {/* <h1 className="text-6xl font-semibold">Contact Us</h1> */}
            <div className="flex justify-center md:flex-row flex-col gap-14">
                <div className="flex flex-col gap-6 md:w-1/3 w-full mt-8 text-center md:text-left text-base lg:text-lg">
                    {/* <div className="flex justify-start items-center gap-4 w-full">
                        <MdPhone size={22}/>
                        <p className="text-sm">905-842-2410</p>
                    </div>

                    <div className="flex justify-start items-center gap-4 w-full">
                        <MdPhone size={22}/>
                        <p className="text-sm">905-842-2410</p>
                    </div>

                    <p>Mon-Thurs 9:15 am - 12:00 pm and 1:15pm - 4:00 pm</p>
                    <p>Fri 9:15 am - 12:00 pm</p> */}

                    <p>The phone lines tend to be very busy between 9:15 am and 11:00 am. If the appointment is quite soon we will also contact you by telephone. Please let us know if we can leave test results on voicemail or email, otherwise make an appointment to review with your doctor.
                    </p>

                    <p>Appointments at hospitals for diagnostic imaging are nearly always faxed to the office and we will call you with details. If you are awaiting such an appointment and we have to leave a voice mail, we will mention that we need to give you appointment details.
                    </p>
                </div>
                <Card className="md:w-[350px] md:mt-8">
                    <CardHeader>
                        <CardTitle>Details</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex justify-start items-center gap-4 w-full">
                            <IoLocationOutline size={44}/>
                            <p className="text-sm">Suite 101, 586 Argus Road, Oakville, ON L6J 3J3</p>
                        </div>

                        <div className="flex justify-start items-center gap-4 w-full">
                            <IoMdPrint size={36}/>
                            <p className="text-sm">905-842-7376</p>
                        </div>

                        <div className="flex justify-start items-center gap-4 w-full">
                            <MdPhone size={32}/>
                             <p className="text-sm">905-842-2410</p>
                        </div>

                        <p>Mon-Thurs 9:15 am - 12:00 pm and 1:15pm - 4:00 pm</p>
                        <p>Fri 9:15 am - 12:00 pm</p>
                    </CardContent>
                </Card>
            </div>
        </section>


        <section className="px-4 xl:px-20 mt-24 my-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.1654527972723!2d-79.6904917082211!3d43.45714289061273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5ce7be055a59%3A0x754258adbb819e55!2s586%20Argus%20Rd%2C%20Oakville%2C%20ON%20L6J%203J3!5e0!3m2!1sen!2sca!4v1723251218472!5m2!1sen!2sca"  loading="lazy"  className="w-full h-[28rem] rounded-l"></iframe>
        </section>
       
        <Footer />
    </div>
  )
}

export default Contact