import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { format } from 'date-fns'

const BlogLayoutThree = ({blog}) => {
 return (
      <div className='group flex flex-col items-center gap-6 ml-2 text-dark'>
          <Link href={blog.url} className='h-full rounded-lg overflow-hidden'>
              <Image
                src={blog.image.filePath.replace('../public', "")}
                alt={blog.title}
                placeholder='blur'
                blurDataURL={blog.image.blurhashDataUrl}
                width={blog.image.width}
                height={blog.image.height}
                className='aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-500'
              />
          </Link>

           <div className='flex flex-col mt-2 w-full'>
              <span className='uppercase text-accent font-semibold text-sm'>
                  {blog.tags[0]}
              </span>
                <Link href={blog.url} className='inline-block my-1'>
                    <h3 className='mt-1 font-semibold capitalize text-lg text-dark'>
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

export default BlogLayoutThree