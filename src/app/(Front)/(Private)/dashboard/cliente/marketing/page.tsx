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
  //console.log(user);
  
  const {user}= session

  console.log('cositas del user:', user);
  
  return (
    <Home
      user={user}
      data={dataHomePo}
      nombre='Marketing'
    />
  )
}

export default page