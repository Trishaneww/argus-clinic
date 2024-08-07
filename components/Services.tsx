import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
import { MdArrowOutward } from "react-icons/md";
import { GiDna1 } from "react-icons/gi";

const Services = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col  bg-slate-800 min-h-[85vh] rounded-[2rem] px-12 py-20">
        <section className="lg:w-1/5 sm:w-full">
            <h1 className="text-4xl text-slate-50 font-semibold mb-2">Our Services</h1>
            <p className="text-slate-50 w-4/5">Explore our various services. We have doctors speceliazing in many areas.</p>
        </section>

        <section className="flex flex-wrap gap-8 lg:w-4/5 sm:w-full">
        <Card className="w-[400px] max-h-[370px] h-2/4 bg-zinc-800 border-none rounded-2xl">
            <CardHeader>
                <CardTitle className="flex items-center justify-center rounded-full bg-zinc-700 h-[60px] w-[60px] text-slate-50 mb-2"><GiDna1 /></CardTitle>
                <CardDescription className="text-slate-50"></CardDescription>
            </CardHeader>
            <CardContent>
                <h2 className="text-slate-50 text-2xl font-semibold mb-2">Covid Vaccinne</h2>
                <p className="text-slate-50">Yes. It adheres to the WAI-ARIA design pattern. PrimeTort Leads, the marketing arm of YA Solutions Inc, specializes in Mass Tort Case Acquisition.</p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button className="bg-lime-200 text-zinc-950"> <MdArrowOutward size={20}/> </Button>
            </CardFooter>
        </Card>

        <Card className="w-[400px] max-h-[370px] h-2/4 bg-zinc-800 border-none rounded-2xl">
            <CardHeader>
                <CardTitle className="flex items-center justify-center rounded-full bg-zinc-700 h-[60px] w-[60px] text-slate-50 mb-2"><GiDna1 /></CardTitle>
                <CardDescription className="text-slate-50"></CardDescription>
            </CardHeader>
            <CardContent>
                <h2 className="text-slate-50 text-2xl font-semibold mb-2">Covid Vaccinne</h2>
                <p className="text-slate-50">Yes. It adheres to the WAI-ARIA design pattern. PrimeTort Leads, the marketing arm of YA Solutions Inc, specializes in Mass Tort Case Acquisition.</p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button className="bg-lime-200 text-zinc-950"> <MdArrowOutward size={20}/> </Button>
            </CardFooter>
        </Card>

        <Card className="w-[400px] max-h-[370px] h-2/4 bg-zinc-800 border-none rounded-2xl">
            <CardHeader>
                <CardTitle className="flex items-center justify-center rounded-full bg-zinc-700 h-[60px] w-[60px] text-slate-50 mb-2"><GiDna1 /></CardTitle>
                <CardDescription className="text-slate-50"></CardDescription>
            </CardHeader>
            <CardContent>
                <h2 className="text-slate-50 text-2xl font-semibold mb-2">Covid Vaccinne</h2>
                <p className="text-slate-50">Yes. It adheres to the WAI-ARIA design pattern. PrimeTort Leads, the marketing arm of YA Solutions Inc, specializes in Mass Tort Case Acquisition.</p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button className="bg-lime-200 text-zinc-950"> <MdArrowOutward size={20}/> </Button>
            </CardFooter>
        </Card>

        <Card className="w-[400px] max-h-[370px] h-2/4 bg-zinc-800 border-none rounded-2xl">
            <CardHeader>
                <CardTitle className="flex items-center justify-center rounded-full bg-zinc-700 h-[60px] w-[60px] text-slate-50 mb-2"><GiDna1 /></CardTitle>
                <CardDescription className="text-slate-50"></CardDescription>
            </CardHeader>
            <CardContent>
                <h2 className="text-slate-50 text-2xl font-semibold mb-2">Covid Vaccinne</h2>
                <p className="text-slate-50">Yes. It adheres to the WAI-ARIA design pattern. PrimeTort Leads, the marketing arm of YA Solutions Inc, specializes in Mass Tort Case Acquisition.</p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button className="bg-lime-200 text-zinc-950"> <MdArrowOutward size={20}/> </Button>
            </CardFooter>
        </Card>
        </section>
    </div>
  )
}

export default Services