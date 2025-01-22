'use client'

import Link from 'next/link'
import React from 'react'
import { signOut } from "next-auth/react";
import Image from 'next/image';

import campana from "./../Assets/Icons/campana8.png";
import perfil from "./../Assets/Icons/perfil2.png";
import store from "./../Assets/Icons/store.png";
import iconoLupa from "./../Assets/Icons/iconoLupa.png";

const Navbar = () => {

    const handleClickLogOut =()=>{
        signOut()
    }

  return (
    <nav className='w-full h-full  grid justify-items-end '>
        {/* <div className='grid items-center'>
        <Image 
            src={iconoLupa}
            width={20}
            height={20}
            alt='as'
        />
        </div> */}
        {/* <div className=' grid items-center '>
            <input className='w-  h-7 border border-gray-200 pl-2 text-tamañoLetraChica rounded' placeholder=' Search' type="text" />
        </div> */}
        <ul className='w-64  h-full  grid grid-cols-5 place-items-center pr-16 text-colorTextoNavbar font-medium '>
            {/* <div className='grid items-center'>
            <Image 
                src={iconoLupa}
                width={20}
                height={20}
                alt='as'
            />
            </div> */}
            <div className=' flex items-center mr-48'>
                <Image src={iconoLupa} width={15} height={15} alt='as' /><input className='w-56 ml-1 h-7 border border-gray-200 pl-2 text-tamañoLetraChica rounded' placeholder=' Search' type="text" />
            </div>
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
                <button className=' hover:underline py-2 px-1 font-semibold text-tamañoLetraChica' onClick={handleClickLogOut}>
                    Salir
                </button>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar