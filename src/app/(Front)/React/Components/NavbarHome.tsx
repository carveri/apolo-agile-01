import Link from 'next/link'
import React from 'react'



const NavbarHome = () => {
  return (
    <div className='flex h-full w-full  px-2 border-b bg-colorNavbar group pr-14 '>
        <header className='w-4/5 h-full ml-10 grid items-center pl-4 text-lg   hover:drop-shadow-2xl '>
            <div className='w-[15%] h-[70%]  grid place-content-center   hover:shadow-lg cursor-pointer duration-300'>
                <Link className=' text-gray-800 hover:text-colorTexto' href={'/'}>Apolo Agile</Link>
            </div>
        </header>
        <ul className='w-[27%] grid grid-cols-4 place-content-center font-medium px-4 group-has-[&>li]:text-colorTexto group-has-[&>li]:justify-items-center group-has-[&>li]:text-base'>
            <li>
                <Link  href={'/planes'}>Planes</Link>
            </li>
            <li >
                <Link href={'/productos'}>Productos</Link>
            </li>
            <li >
                <Link  href={'/faq'}>Faq</Link>
            </li>
            <li >
                <Link href={'/api/auth/login'}>LogIn</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavbarHome