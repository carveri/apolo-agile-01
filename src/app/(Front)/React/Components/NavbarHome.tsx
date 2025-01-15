import Link from 'next/link'
import React from 'react'
import { dataNavHome } from '../Utils/dataNavbars/dataNavHome'
import Image from 'next/image'

import logoPrincipal from "../../React/Assets/Icons/logoPricipal2.png";
import iconoLupa from "./../Assets/Icons/iconoLupa.png";

const NavbarHome = () => {
  return (
    <div className='flex h-full w-full  px-2 border-b bg-colorNavbar group pr-14 '>
        <header className='w-4/5 h-full ml-10 grid items-center pl-4 text-lg   hover:drop-shadow-2xl '>
            <div className='w-[15%] h-[70%]  grid place-content-center   hover:shadow-lg cursor-pointer duration-300'>
                <Link className='flex text-colorTextoNavbar hover:text-colorTexto text-sm font-semibold' href={'/'}><header className='pr-2'>
              <Image
                  src={logoPrincipal}
                  width={20}
                  height={20}
                  alt="Picture of the author"
              />
              
            </header>  
                <div>
                    Apolo Agile
                </div>
                
            </Link>
            </div>
        </header>
        <div className='grid items-center pr-1'>
        <Image 
            src={iconoLupa}
            width={20}
            height={20}
            alt='as'
        />
        </div>
        <div className=' grid items-center'>
            <input className='w-44 h-7 border border-gray-200 pl-3 text-tamañoLetraChica rounded' placeholder=' Search' type="text" />
        </div>
        <ul className={`mr-9 w-[23%] h-full grid grid-cols-${dataNavHome.length}  font-light gap-x-1 text-center group-has-[&>li]:text-colorTextoNavbar group-has-[&>li]:justify-items-center group-has-[&>li]:text-base`}>
            {dataNavHome.map((el)=>{
                const {id, href, texto} = el
                return (
                    <Link className=' h-full text-colorTextoNavbar  grid content-center text-tamañoLetraChica font-semibold'  href={href} key={id}>
                        {texto}
                    </Link>
                )
            })}
        </ul>
    </div>
  )
}

export default NavbarHome