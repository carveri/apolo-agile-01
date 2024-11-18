import Link from 'next/link'
import React from 'react'
import { dataNavHome } from '../Utils/dataNavbars/dataNavHome'



const NavbarHome = () => {
  return (
    <div className='flex h-full w-full  px-2 border-b bg-colorNavbar group pr-14 '>
        <header className='w-4/5 h-full ml-10 grid items-center pl-4 text-lg   hover:drop-shadow-2xl '>
            <div className='w-[15%] h-[70%]  grid place-content-center   hover:shadow-lg cursor-pointer duration-300'>
                <Link className=' text-gray-800 hover:text-colorTexto' href={'/'}>Apolo Agile</Link>
            </div>
        </header>
        <ul className='mr-14 w-[27%] h-full grid grid-cols-4  font-medium gap-x-1 text-center group-has-[&>li]:text-colorTextoNavbar group-has-[&>li]:justify-items-center group-has-[&>li]:text-base'>
            {dataNavHome.map((el)=>{
                const {id, href, texto} = el
                return (
                    <Link className=' h-full  grid content-center'  href={href} key={id}>
                        {texto}
                    </Link>
                )
            })}
        </ul>
    </div>
  )
}

export default NavbarHome