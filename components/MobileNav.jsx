"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {CiMenuFries} from 'react-icons/ci'

const links =[
    {
        name : "home",
        path : "/",
    },
    {
        name : "services",
        path : "/Services",
    },
    {
        name : "resume",
        path : "/Resume",
    },
    {
        name : "work",
        path : "/Work",
    },
    {
        name : "contact",
        path : "/Contact",
    },
]
const MobileNav = () => {
    const pathname=usePathname();
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent-default'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-32 mb-40 text-center text-2xl '>
                <h1 className='font-semibold'>SSG<span className='text-accent-default'>.</span></h1>
            </div>
            <nav className='flex flex-col justify-center items-center capitalize gap-8'>
                {links.map((link , index)=>{
                    return <Link href={link.path} key={index} className={`${link.path===pathname && "text-accent-default border-b-2 border-accent-default"} text-xl hover:text-accent-default transition-all` }>{link.name}</Link>
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav