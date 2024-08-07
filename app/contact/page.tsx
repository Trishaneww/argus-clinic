import Footer from '@/components/Footer'
import Location from '@/components/Location'
import Navbar from '@/components/Navbar'
import React from 'react'
import { MdPhone } from 'react-icons/md'

const Contact = () => {
  return (
    <div className="flex flex-col">
        <Navbar />

        <section className="flex flex-col gap-6 px-20 mt-10">
            <h1 className="text-6xl">Contact Us</h1>
            <p>The office is located at 586 Argus Road, Suite 101 Oakville. ON L61 313 on the main floor of the building with street entrance doors. The nearest intersection is Trafalgar Road and Cross Avenue near the Oakville GO station.</p>

            <div>
                <div className="flex justify-start items-center gap-4 w-full">
                    <MdPhone size={22}/>
                    <p className="text-sm">905-842-2410</p>
                </div>

                <div className="flex justify-start items-center gap-4 w-full">
                    <MdPhone size={22}/>
                    <p className="text-sm">905-842-2410</p>
                </div>

                <p>Mon-Thurs 9:15 am - 12:00 pm and 1:15pm - 4:00 pm</p>
                <p>Fri 9:15 am - 12:00 pm</p>

                <p>The busiest period tends to be from 9:15 am - 11 am daily and we suggest that you wait until after this time unless your call is urgent. We have high demand so please be patient.</p>

            </div>

            <p>Please de let us know your preterence for first point of contact. If you are not available when we call, a voice mail is left asking you to call the office. If you have previously agreed to receiving routine test results by email we will use this method of contact first. Please do keep the office informed if you change your email address. If a specialist office has not contacted you with appointment details we will send you the information in an email if you have provided one to the office. If the appointment is quite soon we will also contact you by telephone. Please let us know if we can leave test results on voicemail or email, otherwise make an appointment to review with you doctor
            </p>

            <p>Appointments at hospitals for diagnostic imaging are nearly always taxed to the office and we will call you with details. If you are awaiting such an appointment and we have to leave a voice mail, we will mention that we need to give you appointment details.
            </p>
        </section>

    

        <Location />
        <Footer />
    </div>
  )
}

export default Contact