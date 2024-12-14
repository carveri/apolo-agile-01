'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavbarStore = () => {

    const handleClickLogOut =()=>{
        signOut()
    }

  return (
    <nav className='w-full h-full  grid justify-items-end '>
    <ul className='w-52  h-full  grid grid-cols-4 place-items-center pr-16 text-colorTextoNavbar font-medium '>
        <li >
            <Link href={'/dashboard/store'}>
                <Image
                    src={store}
                    width={25}
                    height={25}
                    alt='campanita'
                    
                    />
            </Link> 
        </li>
        <li >
            <Link href={'/dashboard/perfil'}>
                <Image 
                    src={campana}
                    width={25}
                    height={25}
                    alt='campanita'
                    
                    />
            </Link> 
        </li>
        <li>
            <Link href={'/dashboard/perfil'}>
                <Image 
                    src={perfil}
                    width={25}
                    height={25}
                    alt='campanita'
                    
                    />
            </Link>
        </li>
        <div>
            <button className=' hover:underline py-2 px-1 font-semibold text-sm' onClick={handleClickLogOut}>
                Salir
            </button>
        </div>
    </ul>
</nav>
  )
}

export default NavbarStore