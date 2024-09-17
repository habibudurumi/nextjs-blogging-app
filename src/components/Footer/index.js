import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaFacebookSquare, FaGithubSquare, FaLinkedin, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa'




const Footer = () => {
  
  return (
    <footer className=' bg-dark rounded-lg text-light mb-10 p-10'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 items-center'>
        <div className='self-start'>
          <h3 className='font-semibold mb-3'>Blogging Site</h3>
          <p className='text-light/50'>Learn about new technology and updates. Stay up to date with latest news.</p>
      </div>
      <div className='self-start'>
        <h3 className='font-semibold mb-3'>Quick Links</h3>
        <nav className='flex flex-col text-light/50'>
          <Link href='/home' className=''>Home</Link>
          <Link href='/about' className='my-2'>About</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
      </div>
      <div className='self-start'>
        <h3 className='font-semibold mb-3'>Categories</h3>
        <nav className='flex flex-col text-light/50'>
          <Link href='/home' className=''>Productivity</Link>
          <Link href='/about' className='my-2'>Web Development</Link>
          <Link href='/contact'>Code Quality</Link>
        </nav>
      </div>
      <div className='self-start'>
        <h3 className='font-semibold mb-3'>Contact</h3>
        <span className='inline-block text-light/50'>
          Email:  <a href="mailto:info@bloggingsite.com" className='text-light/70'>info@bloggingsite.com</a>
        </span>
        <span className='block mt-2 text-light/50'>
          Phone:  <a href="tel:+2348051773540" className='text-light/70'>+2348051773540</a>
        </span>
        <div className='flex items-center text-2xl mt-2 text-light/50'>
          <a href="">
            <FaFacebookSquare className='hover:scale-125 transition-all ease duration-500' />
          </a>
          <a href="">
            <FaGithubSquare className='mx-4 hover:scale-125 transition-all ease duration-500' />
          </a>
          <a href="">
            <FaTwitterSquare className='hover:scale-125 transition-all ease duration-500' />
          </a>
          <a href="">
            <FaLinkedin className='hover:scale-125 transition-all ease duration-500 ml-4' />
          </a>
        </div>
      </div>

      </div>
      
      <hr className='w-full mt-10 text-light/30' />
      <div className='flex items-center justify-between'>
        <p className=' text-light/30 mt-5'>&copy; {new Date().getFullYear()} All Rights Reserved
        </p>
        <Link href='/sitemap.xml' className='text-light/30 mt-5 underline'>
          sitemap.xml
        </Link>
        <p className='text-light/30 mt-5'>Made by <a href="mailto:habibuharunadurumi@gmail.com" className='text-white/40 underline'>Habibu Haruna</a></p>
      </div>
    </footer>
  )
}

export default Footer