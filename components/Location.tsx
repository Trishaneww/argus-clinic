import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { IoMdPrint } from "react-icons/io";
import Image from 'next/image'

const Location = () => {
  return (
    <div className="md:flex gap-2 justify-center my-20 w-full h-[28rem]  mb-60 lg:mb-12">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5792.316625405153!2d-79.68726802323347!3d43.457291965078724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5ce7e5fbf4ef%3A0xa5f35a5f8774c679!2sArgus%20Medical%20Centre!5e0!3m2!1sen!2sca!4v1722286047432!5m2!1sen!2sca" loading="lazy"  className="w-full md:w-2/4 h-[18rem] md:h-full"></iframe> */}

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.1654527972723!2d-79.6904917082211!3d43.45714289061273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5ce7be055a59%3A0x754258adbb819e55!2s586%20Argus%20Rd%2C%20Oakville%2C%20ON%20L6J%203J3!5e0!3m2!1sen!2sca!4v1723251218472!5m2!1sen!2sca" loading="lazy"  className="w-full md:w-2/4 h-[18rem] md:h-full rounded-l"></iframe>
     

      <Card className="md:w-[350px]">
        <CardHeader>
          <CardTitle>Details</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="flex md:flex-col gap-4 flex-wrap">
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
        </CardContent>
      </Card>

    </div>
  )
}

export default Location