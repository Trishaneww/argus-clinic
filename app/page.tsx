import Image from "next/image";
import Link from "next/link";
import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import '../styles/global.scss';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Doctors from "@/components/Doctors";

const Home = ({ searchParams }: SearchParamProps) => {
  // const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex flex-col h-screen max-h-screen homepage">
      <Hero />
      <Doctors />
    </div>
  );
};

export default Home;
