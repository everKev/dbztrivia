"use client"

import Link from 'next/link';
import Image from 'next/image'
import { useState, useEffect} from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className='flex gap-2 flex-center' >
        <Image 
          src="/assets/images/logo.svg"
          width={40}
          height={40}
          alt='DBZ FACTS'
          className='object-contain'
          />
          <p className='logo_text' > DBZ Facts </p>
      </Link>
      {/* Mobile Navigaton */}
      <div className='sm:flex hidden' >
        {isUserLoggedIn ? (
          <div></div>
        ) : (
          <></>
        )}
         </div>
    </nav>
  )
}

export default Nav