import { footerCompany } from '@/data'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-between  items-center w-full h-[24rem] bg-slate-900 rounded-t-[2rem]">
        <section className="w-2/4">
            <h1 className="text-slate-50">Contact Us</h1>
        </section>

        <section className="flex gap-2 justify-center items-center w-2/4">
            <div className="flex flex-col gap-2">
                <p className="text-slate-50">Company</p>
                {footerCompany.map((link) => (
                    <Link href='/' className="text-slate-300">
                        <p>{link.name}</p>
                    </Link>
                ))}
            </div>
        </section>

    </div>
  )
}

export default Footer