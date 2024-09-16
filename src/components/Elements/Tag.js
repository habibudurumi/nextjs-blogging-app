import React from 'react'
import { cx } from '@/src/utils';
import Link from 'next/link'

const Tag = ({link='#', name, ...props}) => {
    return <Link href={link} className={cx('inline-block py-2 px-5 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-500', props.className)}>{name}</Link>;
  
}

export default Tag