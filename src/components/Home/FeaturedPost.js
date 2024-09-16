import React from 'react'
import { sortBlogs } from '@/src/utils'
import BlogLayoutOne from '../Blog/BlogLayoutOne'
import BlogoLayoutTwo from '../Blog/BlogoLayoutTwo'

const FeaturedPost = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs)
  return (
      <section className='w-full mt-32 flex flex-col items-center justify-center'>
          <h2 className='w-full inline-block font-bold capitalize text-4xl'>Featured Posts</h2>

          <div className='grid grid-cols-2 grid-rows-2 gap-8 mt-10'>
              <article className='col-span-1 row-span-2 relative'>
                  <BlogLayoutOne blog={sortedBlogs[2]} />
              </article>
              <article className='col-span-1 row-span-1 relative'>
                  <BlogoLayoutTwo blog={sortedBlogs[3]} />
              </article>
              <article className='col-span-1 row-span-1 relative'>
                  <BlogoLayoutTwo blog={sortedBlogs[4]}/>
              </article>
          </div>
    </section>
  )
}

export default FeaturedPost