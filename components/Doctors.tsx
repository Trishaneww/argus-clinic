import { doctors } from '@/data'
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'




const Doctors = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">

      <section className="flex flex-col gap-6 items-center mb-10 text-center">
        <h1 className="text-slate-800 text-4xl font-semibold">Our Doctors</h1>
        <p className="text-slate-500 w-2/3">As users complete quizzes, their scores are calculated and displayed immediately, providing instant feedback on their performance.</p>
      </section>
      
      <div className="flex flex-wrap gap-10 justify-center">
      {doctors.map((doctor: any, idx: number) => (
        <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{doctor.name}</CardTitle>
          <CardDescription>{doctor.desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={doctor.img}
            height={1000}
            width={1000}
            alt={doctor.name}
            className="rounded-md"
          />
        </CardContent>
        </Card>
      ))}
    </div>

    </div>
    
  )
}

export default Doctors