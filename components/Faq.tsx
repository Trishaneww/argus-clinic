import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import Image from 'next/image'


const Faq = () => {
  return (
    <div className="mt-40 scroll-smooth">
        <section className="flex flex-col gap-6 items-center mb-10 text-center p-2">
            <h1 className="text-slate-800  text-3xl md:text-5xl font-semibold">Frequently Asked Questions</h1>
            <p className="w-[92%]">*Please note that Dr. MacAulay will be with us until the end of December while Dr. Lun is on leave*</p>
        </section>

        <div className="flex flex-col items-center justify-center gap-6 w-full p-4">
            {/* <Image 
                src="/assets/images/doctors.png"
                height={400}
                width={400}
                alt="doctors"
            /> */}

            <Accordion type="single" collapsible className="flex flex-col gap-4 md:w-3/5">
                {accordion.slice(0,2).map((accordion:any, idx:number) => (
                    <AccordionItem value={`item-${idx}`} className="border-none p-4 rounded-2xl text-base lg:text-lg">
                    <AccordionTrigger className="text-left">{accordion.item}</AccordionTrigger>
                        <AccordionContent className="text-base lg:text-lg mt-4">
                            {accordion.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
                 <AccordionItem value={"question3 "} className="border-none p-4 rounded-2xl text-base lg:text-lg">
                    <AccordionTrigger>How do I book an appointment?</AccordionTrigger>
                        <AccordionContent className="text-base lg:text-lg mt-4">
                            <p>To book an appointment online, simply click <a href="/" className="text-blue-400">here</a>. You'll be directed to our secure online booking form.</p>
                        </AccordionContent>
                    </AccordionItem>
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