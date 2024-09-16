import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const BlogoLayoutTwo = ({blog}) => {
  return (
      <div className='group grid grid-cols-12 items-center gap-6 ml-2 text-dark'>
          <Link href={blog.url} className='col-span-4 h-full rounded-lg overflow-hidden'>
              <Image
                src={blog.image.filePath.replace('../public', "")}
                alt={blog.title}
                placeholder='blur'
                blurDataURL={blog.image.blurhashDataUrl}
                width={blog.image.width}
                height={blog.image.height}
                className='aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-500'
              />
          </Link>

           <div className='col-span-8 w-full'>
              <span className='uppercase text-accent font-semibold text-sm'>
                  {blog.tags[0]}
              </span>
                <Link href={blog.url} className='inline-block my-1'>
                    <h3 className='mt-2 font-semibold capitalize text-lg text-dark'>
                      <span
                          className='bg-gradient-to-r from-accent/50 to-accent bg-[length:0px_4px] group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                            {blog.title}
                        </span>
                    </h3>
              </Link>
              
              <span className='capitalize text-dark/50 font-semibold text-base'>
                  {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
              </span>
            </div>
      </div>
  )
}

export default BlogoLayoutTwo