import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation'
import { getDataLista } from "../React/Fetch/getDataLista"
import { getDataCompleja3 } from "../React/Fetch/getDataCompleja3"

export const getNombreEmpresaLayout = async()=>{
    const session = await getServerSession(authOptions)
   // validacion
   if(!session){
    redirect('/api/auth/signin')
  }

  const {user}= session
  const {id, name, email, image}:any = user

  const traersds =  async()=>{
    const ruta = 'empresaPorUser'
    const url = id
    const res = await getDataLista({ruta, url})
    return res
  }

  const res = await traersds()
 
  const ruta = 'historiaStatusEmpresa'
  const param1 = 'Pendiente'
  const param2 = res.at(0)?.id
  const historias = await getDataCompleja3({ruta, param1, param2})

  return {res, historias, session, user}
}