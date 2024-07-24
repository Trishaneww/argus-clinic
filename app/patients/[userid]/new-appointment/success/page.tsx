import { Doctors } from '@/constants';
import { getAppointment } from '@/lib/actions/appontment.actions';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = async ({ params: { userId}, searchParams }: SearchParamProps) => {
    const appointmentId = (searchParams?.appointmentId as string) || "";
    const appointment = await getAppointment(appointmentId);

    const doctor = Doctors.find((doc) => doc.name === appointment.primaryPhysician)

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
        <div className="success-img">
            <Link href='/'>
                <Image
                    src="/assets/icons/logo-full.svg"
                    height={1000}
                    width={1000}
                    alt="logo"
                    className="h-10 w-fit"
                />
            </Link>

            <section className="flex flex-col items-center">
                <Image 
                    src="/assets/gifs/success.gif"
                    height={300}
                    width={280}
                    alt="success"

                />
            </section>

            <h2 className="header mb-6 max-w-[600px] text-center">
                Your <span className="text-green-500">appointment request </span> has been succesfully submitted!
            </h2>
            <p>We'll be in touch shortly to confirm.</p>

            <section className="request-details">
                <p>Requested appointment details:</p>
                <div className="flex items-center gap-3">
                    <Image 
                        src={doctor?.image!}
                        alt="doctor"
                        width={100}
                        height={100}
                        className="size-6"
                    />
                    <p className="whitespace-nowrap">Dr. {doctor?.name}</p>           
                </div>
                
            </section>
        </div>
    </div>
  )
}

export default Success