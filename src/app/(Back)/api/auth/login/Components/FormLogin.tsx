'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { signIn } from "next-auth/react";

const FormLogin = () => {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeLogin =(e:React.ChangeEvent<HTMLInputElement>)=>{
      if(e.target.name === 'email'){
          setEmail(e.target.value)
      }
      else if(e.target.name === 'password'){
          setPassword(e.target.value)
      }
      else{
          console.log('sdsd');
      }
  }

  const handleSubmitLogin = async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      const res = await signIn('credentials', {
          email: email,
          password: password,
          redirect: false
      })
      //console.log(res);
      if(res?.error){
          alert(res.error)
      }
      else{
          router.push('/dashboard')
      }
      
  }

  return (
    <div className='w-3/5 h-4/5 grid place-items-center text-tamañoLetra'>
          <form onSubmit={handleSubmitLogin} className='w-2/6 h-5/6 bg-colorFormularioLogin px-8 rounded-md shadow-2xl'>
              <header className='w-full h-1/5 grid place-content-center text-base text-white font-semibold'>
                Inicio de Sesion
              </header>
              <main className='h-3/6'>
                <div className='h-2/5 grid'>
                  <label className='w-20 text-white' htmlFor="">Email</label>
                  <input name='email' onChange={handleChangeLogin} className='h-14 pl-3 bg-gray-100 rounded' type="email" placeholder='usuario@correo.com'/>
                </div>
                <div className='h-2/5 grid'>
                  <label className='w-20 text-white' htmlFor="">Password</label>
                  <input name='password' onChange={handleChangeLogin} className='h-14 pl-3 bg-gray-100 rounded' type="password" placeholder='*******************'/>
                </div>
                <div className='grid justify-end text-white'>
                  <Link href={'/'}>¿Olvidaste tu contraseña?</Link>
                </div>
                <div className='h-1/6 text-white'>
                  <input type="checkbox" /> Recordarme 
                </div>
              </main>
              <button className='h-16 w-full bg-colorBotonAceptar hover:bg-[#35e83b]  hover:duration-300 text-white font-bold '>
                Ingresar
              </button>
              <div className='h-1/6 pt-6 text-white pl-1'>
                ¿Eres nuevo en Apolo Agile? <Link className='text-[#00ff08] hover:underline font-semibold pl-2' href={'/auth/registro'}>Crear una cuenta</Link>
              </div>
          </form>
        </div>
  )
}

export default FormLogin