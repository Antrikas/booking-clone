import  Link  from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="bg-[#013894]">
        <nav
        className="mx-auto flex max-w-7xl items-center justify-between
         p-6 lg:px-8" aria-label="Global"
         >
         <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img
            className='h-12 w-auto'
            src='/booking+logo+white.png' />
        
        </Link>
         </nav>
    </header>
  )
}

export default Header