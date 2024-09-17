import { contactInfo, footerCompany } from '@/data'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between  p-10 xl:items-center w-full xl:h-[24rem] bg-slate-900  mt-20">
        <section className="xl:w-1/4 flex flex-col gap-4 justify-start">
            <h1 className="text-slate-50 font-bold text-3xl xl:text-5xl xl:ml-20">Argus Doctors</h1>
            <p className="text-slate-50 xl:ml-20 mb-9 xl:mb-0">@2024 Argus Doctors. All rights reserved</p>
        </section>

        <section className="flex gap-12 xl:justify-center items-start xl:w-3/4 flex-wrap">
            <div className="flex flex-col gap-2">
                <p className="text-slate-50 font-semibold">Clinic</p>
                {footerCompany.map((link) => (
                    <Link href={link.link} className="text-slate-300">
                        <p>{link.name}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-50 font-semibold">Hours Of Operation</p>
                <div>
                    <p className="text-slate-300 font-semibold">Monday - Friday</p>
                    <p className="text-slate-300">9:00 AM to 5:00 PM</p>
                </div>
                <div>
                    <p className="text-slate-300 font-semibold">Saturday - Sunday</p>
                    <p className="text-slate-300">Closed</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-50 font-semibold">Contact Us</p>
                <p className="text-slate-300">905-842-2410</p>
                <a href="https://www.google.com/maps/dir//586+Argus+Rd+Oakville,+ON+L6J+3J3/@43.4571391,-79.6856208,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x882b5ce7be055a59:0x754258adbb819e55" target="_blank" className="text-slate-300">Suite 101, 586 Argus Road, Oakville, ON L6J 313
                </a>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-50 font-semibold">Legal</p>
                <p className="text-slate-300">Terms & Conditions</p>
                <p className="text-slate-300">Privacy Policy</p>
            </div>
        </section>

    </div>
  )
}

export default Footer