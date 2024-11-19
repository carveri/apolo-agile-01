import Link from 'next/link'
import React from 'react'
import { dataNavHome } from '../Utils/dataNavbars/dataNavHome'



const NavbarHome = () => {
  return (
    <div className='flex h-full w-full  px-2 border-b bg-colorNavbar group pr-14 '>
        <header className='w-4/5 h-full ml-10 grid items-center pl-4 text-lg   hover:drop-shadow-2xl '>
            <div className='w-[15%] h-[70%]  grid place-content-center   hover:shadow-lg cursor-pointer duration-300'>
                <Link className=' text-colorTextoNavbar hover:text-colorTexto font-extrabold' href={'/'}>Apolo Agile</Link>
            </div>
        </header>
        <ul className='mr-14 w-[20%] h-full grid grid-cols-4  font-light gap-x-1 text-center group-has-[&>li]:text-colorTextoNavbar group-has-[&>li]:justify-items-center group-has-[&>li]:text-base'>
            {dataNavHome.map((el)=>{
                const {id, href, texto} = el
                return (
                    <Link className=' h-full text-colorTextoNavbar  grid content-center'  href={href} key={id}>
                        {texto}
                    </Link>
                )
            })}
        </ul>
    </div>
  )
}

export default NavbarHome