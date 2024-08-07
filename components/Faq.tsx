import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { accordion } from '@/data'
import Image from 'next/image'


const Faq = () => {
  return (
    <div className="mt-40 scroll-smooth" id="faq">
        <section className="flex flex-col gap-6 items-center mb-10 text-center">
            <h1 className="text-slate-800 text-5xl font-semibold">Frequently Asked Questions</h1>
            <p className="text-slate-500 w-2/3">Find the answers to your questions here</p>
        </section>

        <div className="flex justify-center gap-6 w-full p-4">
            {/* <Image 
                src="/assets/images/doctors.png"
                height={400}
                width={400}
                alt="doctors"
            /> */}

            <Accordion type="single" collapsible className="flex flex-col gap-4 w-3/5">
                {accordion.map((accordion:any, idx:number) => (
                    <AccordionItem value={`item-${idx}`} className="border-none p-4 bg-white rounded-2xl">
                    <AccordionTrigger>{accordion.item}</AccordionTrigger>
                        <AccordionContent>
                            {accordion.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>

 

   

      {/* <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem> */}

    </div>
  )
}

export default Faq