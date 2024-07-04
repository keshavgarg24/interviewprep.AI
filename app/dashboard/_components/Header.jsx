"use client";

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

function Header() {

    const path=usePathname();
    useEffect(() => {
        console.log(path);
    },[])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md'>
        <Image src={"/logo.svg"} alt="logo" width={60} height={60}/>
        <ul className='hidden md:flex gap-7'>
            <Link href={'/dashboard'}>
            <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard'&&'text-blue-600 font-bold'}`
            }>Dashboard</li>
            </Link>

            <Link href={'/dashboard/upgrad'}>
            <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard/upgrad'&&'text-blue-600 font-bold'}`
            }>Upgrade</li>
            </Link>
            
            <Link href={'/dashboard/overview'}>
            <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard/overview'&&'text-blue-600 font-bold'}`
            }>Overview</li>
            </Link>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header
