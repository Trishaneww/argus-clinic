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
            <p className="xl:w-3/4">Get care from a board-certified doctor or specialist on your terms, it's covered by many Medicaid plans.</p>
            <Button className="w-[200px]">Get Directions <MdArrowOutward className="ml-2"/> </Button>
          </div>
        </section>

        <section className="flex flex-col gap-6 px-4 xl:px-20 mt-24">
            {/* <h1 className="text-6xl font-semibold">Contact Us</h1> */}
            <div className="flex md:flex-row flex-col gap-14">
                <div className="flex flex-col gap-6 md:w-3/4 w-full mt-8 text-center md:text-left">
                    <p>The office is located at 586 Argus Road, Suite 101 Oakville. ON L61 313 on the main floor of the building with street entrance doors.The nearest intersection is Trafalgar Road and Cross Avenue near the Oakville GO station.</p>
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

                    <p>The busiest period tends to be from 9:15 am - 11 am daily and we suggest that you wait until after this time unless your call is urgent. We have high demand so please be patient.</p>
 
                    <p>Please de let us know your preterence for first point of contact. If you are not available when we call, a voice mail is left asking you to call the office. If you have previously agreed to receiving routine test results by email we will use this method of contact first. Please do keep the office informed if you change your email address. If a specialist office has not contacted you with appointment details we will send you the information in an email if you have provided one to the office. If the appointment is quite soon we will also contact you by telephone. Please let us know if we can leave test results on voicemail or email, otherwise make an appointment to review with you doctor
                    </p>

                    <p>Appointments at hospitals for diagnostic imaging are nearly always taxed to the office and we will call you with details. If you are awaiting such an appointment and we have to leave a voice mail, we will mention that we need to give you appointment details.
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
                            <p className="text-sm">Suite 101, 586 Argus Road, Oakville, ON L6J 313</p>
                        </div>

                        <div className="flex justify-start items-center gap-4 w-full">
                            <IoMdPrint size={36}/>
                            <p className="text-sm">905-842-7376</p>
                        </div>

                        <div className="flex justify-start items-center gap-4 w-full">
                            <MdOutlineMail size={34}/>
                            <p className="text-sm">argusclinic@gmail.com</p>
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