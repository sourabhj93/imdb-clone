import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
            <MenuItem title="Home" address="/" Icon={AiFillHome}/>
            <MenuItem title="About" address="/about" Icon={BsCircleFill}/>
        </div>
        <div className='flex gap-3 items-center'>
        <ThemeSwitcher />
        <Link href={'/'} className='flex gap-3 items-center'>
          <div className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-xl'>imDB</div>
          <div className='text-xl hidden sm:inline'>clone</div>
        </Link>
        </div>
    </div>
  )
}
