import Link from 'next/link'
import React from 'react'



const NavbarHome = () => {
  return (
    <div className='flex h-12 w-full text-cyan-900 px-2 border-b border-gray-200'>
        <header className='w-4/5  grid items-center pl-4 text-lg   hover:drop-shadow-2xl '>
            <div className='w-[15%] h-[70%]  grid place-content-center   hover:shadow-lg cursor-pointer '>
                <Link className='py-2 text-gray-700 hover:text-black' href={'/'}>Apolo Agile</Link>
            </div>
        </header>
        <ul className='w-[27%] grid grid-cols-4 place-content-center  font-medium px-4 '>
            <li className='w-full h-full grid justify-items-center hover:font-bold hover:cursor-pointer py-4'>
                <Link className='py-4' href={'/planes'}>Planes</Link>
            </li>
            <li className='w-full h-full grid justify-items-center hover:font-bold hover:cursor-pointer  py-4'>
                <Link className='py-4' href={'/productos'}>Productos</Link>
            </li>
            <li className='w-full h-full grid justify-items-center hover:font-bold hover:cursor-pointer  py-4 '>
                <Link className='py-4' href={'/faq'}>Faq</Link>
            </li>
            <li className='w-[93%] h-[36%] grid place-self-center text-sm  font-semibold rounded-2xl  bg-cyan-800  text-white hover:bg-violet-900 '>
                <Link className=' grid place-items-center' href={'/api/auth/login'}>LogIn</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavbarHome