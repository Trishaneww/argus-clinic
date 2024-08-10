import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import React from 'react'

const NurseHours = () => {
  return (
    <div className="flex flex-col">

        <section className="flex flex-col nurse px-10">
          <Navbar />
          <div className="relative flex flex-col gap-4 mt-52 ml-40 items-start w-2/4">
            <h1 className="text-6xl font-semibold">Nurse Hours</h1>
            <p className="w-3/4">Get care from a board-certified doctor or specialist on your terms, 24 hours a day, 7 days a week—by phone, video or app. Plus, it's covered by many Medicaid plans.</p>
            <Button className="w-[200px]">Book Appointment</Button>
          </div>
        </section>

        <Navbar />

        <section className="flex flex-col gap-6 px-20 mt-24">
            <div>
                <p>Monday: 1:00pm - 5:00pm</p>
                <p>Tuesday: 9:00am - 12:30pm</p>
                <p>Thursday: 9:30am - 12:30pm</p>
                <p>Friday: 9:00am - 12:30pm</p>
            </div>

            <p>Please book an appointment with Paulina if the sole reason for your visit is for injections (including allergy and contraceptive shots), vaccinations, ear syringing suture removal, if you have regular shots, for example, b12 every month, Paulina can book your next appointment while you are in the office.</p>

            <p>If you need information about your vaccination status Paulina will be able to help you.</p>

            <p>Paulina will also be giving flu shots which are usually available from mid-October. Information about timing of flu shots will be added to the website when available.
            </p>

            <p>The office doesn't give COVID shots. The Halton Region Public Health website has information about covid vaccine clinnics they may be running along with lists of pharmecies that give COVID shots.
            </p>
        </section>
        <Footer />
    </div>
  )
}

export default NurseHours