import Link from 'next/link'
import React from 'react'



const NavbarHome = () => {
  return (
    <div className='flex h-full w-full  px-2 border-b border-gray-200 group '>
        <header className='w-4/5 h-full  grid items-center pl-4 text-lg   hover:drop-shadow-2xl '>
            <div className='w-[15%] h-[70%]  grid place-content-center   hover:shadow-lg cursor-pointer '>
                <Link className=' text-gray-700 hover:text-black' href={'/'}>Apolo Agile</Link>
            </div>
        </header>
        <ul className='w-[27%] grid grid-cols-4 place-content-center  font-medium px-4 group-has-[&>li]:{text-mio,w-full h-full, grid justify-items-center }'>
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