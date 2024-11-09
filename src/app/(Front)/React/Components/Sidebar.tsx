'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from "next/image";

const Sidebar = ({links}) => {

  
     
    //console.log(session);
    

    const pathname = usePathname()
    

    


  return (
    <aside className='w-full h-full rounded'>
        <header className='h-12 bg-blue-100 grid place-content-center rounded'>
             <p className='pr-1'>Dashboard</p> 
        </header>
        <ul className='w-full h-[43%] grid grid-rows-6 '>
            {links.map((element)=>{
                const {id, nombre, href, icono, coso} = element
                return <li key={id} className={`rounded border-1 border-gray-100 grid items-center pl-4  hover:bg-violet-200
                }
                ${pathname===href? `border-1 bg-violet-300 duration-75 text-cyan-900`: ``}
                `}>
                <Link className=' py-4 flex' href={href}>
                  <Image
                    src={icono}
                    alt='d'
                    width={45}
                    height={45}
                    className='pr-5'
                  />
                  <div>
                    {nombre}
                  </div>
                  {coso &&
                    <div className='ml-5 -mt-1 w-5 h-5 bg-colorVerdeClaro rounded-full text-center font-semibold text-sm text-cyan-700'>
                      {coso}
                    </div>
                  }
                </Link>
            </li>
            })}
        </ul>
        
            
    </aside>
  )
}

export default Sidebar