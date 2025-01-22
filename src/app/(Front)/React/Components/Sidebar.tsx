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
  //nombreEmpresa: string
}

const Sidebar = ({links}:ILinks) => {


    const pathname = usePathname()

   // console.log('nombreEMpre;', nombreEmpresa);
    
    
  return (
    <aside className='w-full h-full rounded '>
        <header className='h-12 bg-gray-200 grid place-content-center rounded text-tamañoLetra'>
             <p className='pr-1 text-gray-800'>Dashboard</p> 
        </header>
        <ul className={`w-full h-[40%] grid grid-rows-6`}>
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
                  <div className='text-tamañoLetra'>
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
            {/* <div className=' w-full h-[490px] grid items-end justify-center text-colorTextoNavbar font-semibold text-tamañoLetra'>
              {nombreEmpresa}
            </div> */}
        </ul>
        
            
    </aside>
  )
}

export default Sidebar