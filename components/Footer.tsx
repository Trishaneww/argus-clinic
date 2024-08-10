import { contactInfo, footerCompany } from '@/data'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-between  items-center w-full h-[24rem] bg-slate-900  mt-20">
        <section className="w-1/4 flex flex-col gap-4 justify-start">
            <h1 className="text-slate-50 font-bold text-5xl ml-20">Argus Doctors</h1>
            <p className="text-slate-50 ml-20">@2024 Argus Doctors. All rights reserved</p>
        </section>

        <section className="flex gap-12 justify-center items-start w-3/4">
            <div className="flex flex-col gap-2">
                <p className="text-slate-50 font-semibold">Company</p>
                {footerCompany.map((link) => (
                    <Link href='/' className="text-slate-300">
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
                {contactInfo.map((link) => (
                    <Link href='/' className="text-slate-300">
                        <p>{link.name}</p>
                    </Link>
                ))}
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