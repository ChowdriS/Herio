import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div
    className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light '>
        <nav>
            <Link href="/" className='mr-4'/>
            <Link href="/about" className='mx-4'/>
            <Link href="/projects"  className='mx-4'/>
            <Link href="/articles"  className='ml-4'/>
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>

        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <h1 className=' text-emerald-500  font-bold italic text-4xl'>Herio</h1>
        </div>
    </div>
  )
}

export default Navbar
