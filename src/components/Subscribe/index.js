"use client"


import React from 'react'
import { useForm } from 'react-hook-form'

const Subscribe = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data)

    console.log(errors);

  return (
      <section className='bg-black/60 backdrop-blur-md mb-10 rounded-md mt-16 p-10 flex flex-col justify-center items-center gap-6 '>
          
            <h3 className='font-bold capitalize text-3xl text-white'>Interesting Stories | Updates | Guides</h3>
            <p className='w-full md:w-[600px] text-center text-white/80'>Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.</p>

          <form onSubmit={handleSubmit(onSubmit)} className='flex bg-white p-2 rounded-md items-center'>
              <input
                  type="emai"
                  placeholder='Enter your Email'
                  {...register('email', { required: true, maxLength: 80 })}
                  className='w-full bg-white/80 text-dark focus:border-accent focus:ring-0 border-b-2 outline-none mr-2 p-2 min-w-[300px]'
              />
              <input type="submit" value="submit" className='py-2 text-white capitalize hover:cursor-pointer rounded-md hover:bg-black transition-colors duration-500 ease-in-out bg-dark px-6' />
          </form>
         
              
    </section>
  )
}

export default Subscribe