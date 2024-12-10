import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
import { dataHomePo } from '@/app/(Front)/React/Utils/dataHomePo'
import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from "next/navigation";
import Home from '../[Componentes]/ClienteHome/Home'

const page = async() => {

  const session = await getServerSession(authOptions)
   // validacion
   if(!session){
    redirect('/api/auth/signin')
  }
  
  const {user}= session
  
  return (
    <Home
      user={user}
      data={dataHomePo}
      nombre='Comercial'
    />
  )
}

export default page