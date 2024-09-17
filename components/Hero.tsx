import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data";
import '../styles/global.scss';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // const isAdmin = searchParams?.admin === "true";
  return (
    <div className="flex flex-col">
      <section className="flex flex-col hero">
        <Navbar />

        <div className="relative flex flex-col gap-2 mt-40 md:mt-72 items-center justify-center text-center">
          <h1 className=" text-5xl lg:text-9xl font-bold mb-4 lg:mb-12 text-slate-900">Argus Doctors</h1>
          <div className="flex justify-center gap-2 lg:gap-8 w-full flex-wrap mb-4 lg:mb-12">
            <p className="text-xl lg:text-4xl font-bold  text-slate-900">Dr. Katherine Slinger</p>
            <p className="text-xl lg:text-4xl font-bold  text-slate-900">Dr. Sherine Soliman</p>
            <p className="text-xl lg:text-4xl font-bold  text-slate-900">Dr. MacAulay</p>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2 p-2">
            <p className="lg:w-2/5 text-slate-900 lg:text-2xl">Suite 101, 586 Argus Road, Oakville, ON L6J 313</p>
            <p className=" text-slate-900 text-md lg:text-2xl">Office open Monday - Friday 9:00 am to 5:00 pm</p>
            <p className=" text-slate-900 text-md lg:text-2xl">Telephones answered Monday -Thursday 9:15 am - 12:00 pm and 1.15 pm-4pm, Friday 9:15 am - 12:00 pm</p>
          </div>

          <Link href="https://ocean.cognisantmd.com/intake/patients.html?linkRef=68a0f1d3-63f4-4d2e-a713-f448a57556c9#/online-booking">
            <Button className="w-[200px] h-[55px] lg:mt-6">Book Now</Button>
          </Link>

        </div>
      </section>

      <section className="flex flex-col md:w-4/5 lg:w-3/5 self-center text-center gap-4 my-14 mt-44 p-4">
        <h1 className="text-3xl md:text-5xl  font-semibold mb-6">Your Appointment</h1>
        <p>Appointments are always pre-booked for the doctors and the nurse, you can do this by phone or the online booking portal. The office does not operate on a walk-in basis at any time. It is helpful if you have your schedule before calling to make an appointment.</p>

        <p>To ensure the right amount of time is booked for your appointment please share with us the nature of your visit. In the case of a same day URGENT problem, please call the office and we will try to fit you in the same or next day.</p>

        <p>At present, wearing a mask is now optional but we do ask that if you have any type of respiratory symptoms that you do wear a mask.</p>

        <p>If you have COVID symptoms we request that vou try to do a test before coming to the office. In the case of a positive test let us know and your appointment will be virtual or by telephone instead of in the office. COVID test kits are available in the office and at locations listed on the<a href="https://www.halton.ca/For-Residents/Public-Health" target="_blank" className="text-sky-600"> Halton Region Public Health website.</a></p>

        <p>Please ensure vou have a valid health card and let us know if it has recently been renewed. This is also a good time to provide any updates to your address, telephone number or email address. On arrival at the office we ask COVID screening questions and request you sanitize your hands. Please wear a mask if you have any type of respiratory symptoms.</p>

        <p>Have available a list of your medications or all the bottles/packets. Your pharmacy can provide you with a list of yqur medications. Check if any medications are due for renewal in the next 1-3 months and discuss with your doctor.</p>

        <p>If you cannot keep your appointment, please notify the office at least 24 hours before to avoid the cancellation fee of $50 or in the case of annual physical $100. Missed appointment charges are not covered by the annual block fee for uninsured services.</p>

      </section>
    </div>
  );
};

export default Hero;