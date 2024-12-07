'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from "next/image";
//import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IOLinks {
    id: number
    href: string
    nombre: string
    icono?: string | any
    coso?: string
}
interface ILinks {
  links: IOLinks[]
}

const Sidebar = ({links}:ILinks) => {


    const pathname = usePathname()
    
  return (
    <aside className='w-full h-full rounded'>
        <header className='h-12 bg-blue-100 grid place-content-center rounded text-sm'>
             <p className='pr-1'>Dashboard</p> 
        </header>
        <ul className='w-full h-[43%] grid grid-rows-6 '>
            {links.map((element)=>{
                const {id, nombre, href, icono, coso} = element
                return <li key={id} className={`rounded  font-medium border-1 border-gray-100 grid items-center pl-4  hover:bg-hoverColorSidebar
                }
                ${pathname===href? `border-1 bg-colorSidebar duration-75  text-white`: ``}
                `}>
                <Link className=' hover:text-gray-100   py-4 flex' href={href}>
                  <Image
                    src={icono}
                    alt='d'
                    width={40}
                    height={40}
                    className='pr-5 '
                  />
                  <div className='text-sm'>
                    {nombre}
                  </div>
                  {coso &&
                    <div className='ml-9  pt-[2px]  w-5 h-5 bg-red-500 rounded-full text-center font-extrabold text-xs text-white'>
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