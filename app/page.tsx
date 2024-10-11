import Image from "next/image";
import Link from "next/link";
import { PatientForm } from "@/components/forms/PatientForm";
import { navItems } from "@/data";
import '../styles/global.scss';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import Services from "@/components/Services";

const Home = () => {
  // const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex flex-col bg-slate-50 scroll-smooth">
      <Navbar />
      <Hero />
      {/* <Services /> */}
      {/* <Doctors /> */}
      {/* <div id="faq"></div>
      <Faq /> */}
      <div id="contact"className="mb-10"></div>
      <Location />
      <Footer />

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5792.316625405153!2d-79.68726802323347!3d43.457291965078724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5ce7e5fbf4ef%3A0xa5f35a5f8774c679!2sArgus%20Medical%20Centre!5e0!3m2!1sen!2sca!4v1722286047432!5m2!1sen!2sca" width="800" height="600" style="border:0;"  loading="lazy"></iframe> */}

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5792.316625405153!2d-79.68726802323347!3d43.457291965078724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5ce7e5fbf4ef%3A0xa5f35a5f8774c679!2sArgus%20Medical%20Centre!5e0!3m2!1sen!2sca!4v1722286047432!5m2!1sen!2sca" width="800" height="600" loading="lazy"></iframe> */}
    </div>
  );
};

export default Home;
