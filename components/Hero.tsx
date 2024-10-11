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

        <div className="absolute w-full flex flex-col gap-2 mt-40 lg:mt-52 items-center justify-center text-center">
          <h1 className=" text-5xl lg:text-8xl font-bold mb-4 lg:mb-12 text-slate-900">Argus Doctors</h1>
          <div className="flex justify-center gap-2 lg:gap-8 w-full flex-wrap mb-4 lg:mb-12">
            <p className="text-xl lg:text-4xl font-bold  text-slate-900">Dr. Sherine Soliman </p>
            <p className="text-xl lg:text-4xl font-bold  text-slate-900">Dr. Grace Lun </p>
            <p className="text-xl lg:text-4xl font-bold  text-slate-900">Dr. Christy MacAulay</p>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2 p-2">
            <p className="xl:w-2/5 text-slate-900 lg:text-2xl">Suite 101, 586 Argus Road, Oakville, ON L6J 3J3</p>
            <p className=" text-slate-900 text-md lg:text-2xl">Mon - Fri 9:00 am to 5:00 pm</p>
            <p className=" text-slate-900 text-md lg:text-2xl">Telephones answered Mon - Thurs 9:15 am - 12:00 pm and 1:15 pm - 4:00 pm, Fri 9:15 am - 12:00 pm</p>
          </div>

          <Link href="https://ocean.cognisantmd.com/online-booking/cddcbae7-4cba-4ebd-9e93-7b5aceb285e5">
            <Button className="w-[280px] h-[60px] mt-12 lg:mt-6 text-lg">Online appointment booking</Button>
          </Link>

        </div>
      </section>

      <section className="flex flex-col md:w-4/5 lg:w-3/5 self-center text-center gap-4 my-14  p-4 text-base lg:text-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Your Appointment</h1>
        <p>Appointments are always pre-booked for the doctors and the nurse. You can do this by phone or the online booking portal. The office does not operate on a walk-in basis at any time. It is helpful if you have your schedule before calling to make an appointment.</p>

        <p>To ensure the right amount of time is booked for your appointment please share with us the nature of your visit. In the case of a same day URGENT problem, please call the office and we will try to fit you in the same or next day.</p>

        <p>Wearing a mask is now optional but we do ask that if you have any type of respiratory symptoms that you do wear a mask.</p>

        <p>If you have COVID symptoms we request that you do a test before coming to the office. In case of a positive test let us know and your appointment will be virtual or by telephone instead of in office. COVID test kits are available in the office and at locations listed on the<a href="https://www.halton.ca/For-Residents/Public-Health" target="_blank" className="text-sky-600"> Halton Region Public Health website.</a></p>

        <p>Please ensure you have a valid health card and let us know if it has recently been renewed. This is also a good time to provide any updates to your address, telephone number or email address. On arrival at the office we ask COVID screening questions and request you sanitize your hands. Please wear a mask if you have any type of respiratory symptoms.</p>

        <p>Bring a list of your medications or all the bottles/packets. Your pharmacy can provide you with a list of your medications. Check if any medications are due for renewal in the next 1-3 months and discuss with your doctor.</p>

        <p>If you cannot keep your appointment, please notify the office at least 24 hours before to avoid the cancellation fee of $50 or in the case of annual physical $100. Missed appointment charges are not covered by the annual block fee for uninsured services.</p>

      </section>
    </div>
  );
};

export default Hero;