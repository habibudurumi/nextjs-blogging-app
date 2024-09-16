import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImage from '@/public/profile-img.png'

const Logo = () => {
  return (
        <Link href='/' className='flex items-center'>
          <div className='w-14 rounded-full overflow-hidden border border-solid border-dark mr-4'>
              <Image src={profileImage} alt='blogging-website' className='w-full h-auto rounded-full' />
          </div>
          <span className='font-bold text-xl '>Blogging Site</span>
        </Link>
  )
}

export default Logo