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
 //console.log('res;', res);
  
  //console.log('uss:', user);

  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Administradores'
      url = '8bf1bf40-b55e-4000-a0c5-8e1b8e0ba477'
      id= {id}
      res={res}
    />
  )
}

export default page