import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { DribbbleIcon, GithubIcon, LinkedinIcon, SunIcon, TwitterIcon } from '../Icon'

const Header = () => {
  return (
    <header className='w-full py-4 flex items-center justify-between'>
          <Logo />
          <nav className='w-max py-3 px-8 border border-solid border-dark rounded-lg font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm  z-50'>
              <Link href='/home' className='mr-2 hover:text-accent transition-all ease duration-200'>Home</Link>
              <Link href='/about' className='mx-2 hover:text-accent transition-all ease duration-200'>About</Link>
              <Link href='/contact' className='mr-2 hover:text-accent transition-all ease duration-200'>Contact</Link>
              <button className='ml-3 hover:text-accent transition-all ease duration-200'>
                 <SunIcon/>
              </button>
          </nav>
          <div>
              <a href="#" className='inline-block w-6 h-6 mr-4'><LinkedinIcon className="hover:scale-125 transition-all ease duration-200"/></a>
              <a href="#" className='inline-block w-6 h-6 mr-4'><TwitterIcon className="hover:scale-125 transition-all ease duration-200"/></a>
              <a href="#" className='inline-block w-6 h-6'><GithubIcon className="hover:scale-125 transition-all ease duration-200"/></a>
          </div>
    </header>
  )
}

export default Header