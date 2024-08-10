import { navItems } from '@/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import '../styles/global.scss';



const Navbar = () => {
  return (
    <div className="flex w-[74%] justify-between items-center h-[80px] rounded-3xl p-6 mt-10 backdrop-blur-md navbar self-center scroll-smooth z-10 fixed mb-20 bg-slate-50">
        <div className="flex gap-6">
          <Link href='/' className={cn(
                "relative dark:text-slate-50 items-center flex space-x-1 text-slate-800 dark:hover:text-slate-300 hover:text-slate-500"
              )}><span className=" text-sm !cursor-pointer">Home</span>
          </Link>

          {/* <Link href='/'><span className="text-l font-bold">Argus Doctors</span>
          </Link> */}
         

          {navItems.map((navItem: any, idx: number) => (
            <Link 
              key={idx} 
              href={navItem.link}
              className={cn(
                "relative dark:text-slate-50 items-center flex space-x-1 text-slate-800 dark:hover:text-slate-300 hover:text-slate-500"
              )}
            >
              <span className=" text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>

        <Link href="https://ocean.cognisantmd.com/intake/patients.html?linkRef=68a0f1d3-63f4-4d2e-a713-f448a57556c9#/online-booking">
        <Button className="w-[150px]">Book Now</Button>
        </Link>

   
    </div>
  )
}

export default Navbar