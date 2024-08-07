import { navItems } from '@/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import '../styles/global.scss';



const Navbar = () => {
  return (
    <div className="flex w-[74%] bg-transparent justify-between items-center h-[80px] rounded-3xl p-4 mt-10 backdrop-blur-md navbar self-center scroll-smooth">
        <div className="flex gap-6">
          <Image
            src='/assets/images/logo.png'
            alt='logo'
            width={54}
            height={54}
          />

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

        <Button>Book Now</Button>
    </div>
  )
}

export default Navbar