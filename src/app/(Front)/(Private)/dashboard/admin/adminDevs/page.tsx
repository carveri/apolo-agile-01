import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'
import { ISession } from '@/app/Interfaces/ISession'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route'
import { redirect } from "next/navigation";
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'

const page = async() => {

  const session:ISession | null = await getServerSession(authOptions)
  // validacion
  if(!session){
   redirect('/api/auth/signin')
 }
 //console.log(user);
 
 const {user}= session
 const {id, name, email, image} = user

 const ruta = 'empresaPorUser'
 const url = id
 const res = await getDataLista({ruta, url})
 console.log('res;', res);
 

  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Devs'
      url = '68b9247a-5884-46e7-a66f-3341b640469b'
      //empresaId = 'e5e58171-f26d-4e8d-8600-264ad4c40032'
      id= {id}
      res={res}
    />
  )
}

export default page