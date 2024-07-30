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
        <h1 className="text-slate-800 text-4xl font-semibold">Our Psychiatrists</h1>
        <p className="text-slate-500 w-2/3">As users complete quizzes, their scores are calculated and displayed immediately, providing instant feedback on their performance.</p>
      </section>
      
      <div className="flex gap-10 justify-center">
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
          {/* <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form> */}
        </CardContent>
        {/* <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter> */}
      </Card>
      ))}
    </div>

    </div>
    
  )
}

export default Doctors