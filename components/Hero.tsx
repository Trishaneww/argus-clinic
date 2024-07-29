import Image from "next/image";
import Link from "next/link";
import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import '../styles/global.scss';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex flex-col h-screen max-h-screen hero">
      <Navbar />

      <section className="flex flex-col gap-4 ml-16 mt-20">
        <h1 className="text-6xl font-bold mb-12">ARGUS MEDICAL CLINIC</h1>
        <p className="w-[400px]">As users complete quizzes, their scores are calculated and displayed immediately, providing instant feedback on their performance.</p>
        <Button className="w-[200px]">Explore More</Button>
      </section>

    </div>
  );
};

export default Hero;