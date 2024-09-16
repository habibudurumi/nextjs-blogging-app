import React from 'react'
import { sortBlogs } from '@/src/utils'
import Link from 'next/link'
import BlogLayoutThree from '../Blog/BlogLayoutThree'

const RecentPosts = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs)
  return (
      <section className='w-full mt-32 flex flex-col items-center justify-center'>
          <div className='w-full flex justify-between items-center'>
              <h2 className=' font-bold capitalize text-4xl'>Recent Posts</h2>
              <Link href={'/categories/all'} className=' font-medium py-1 px-4 text-lg rounded-full border border-dark text-dark hover:bg-dark hover:text-light transition-all ease duration-500'>view all</Link>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-16 mt-16">
              {
                  sortedBlogs.slice(5, 11).map((blog, index) => {
                      return (
                          <article key={index} className='col-span-1 row-span-1'>
                            <BlogLayoutThree blog={blog}/>
                          </article>
                      );
                  })
              }
          </div>

          {/* <div className='grid grid-cols-2 grid-rows-2 gap-8 mt-10'>
              <article className='col-span-1 row-span-2'>
                  <BlogLayoutOne blog={sortedBlogs[2]} />
              </article>
              <article className='col-span-1 row-span-1 relative'>
                  <BlogoLayoutTwo blog={sortedBlogs[3]} />
              </article>
              <article className='col-span-1 row-span-1 relative'>
                  <BlogoLayoutTwo blog={sortedBlogs[4]}/>
              </article>
          </div> */}
    </section>
  )
}

export default RecentPosts