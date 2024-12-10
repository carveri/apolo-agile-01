import { ISession } from "@/app/Interfaces/ISession";
import ComPoNuevaTarea from "../[Componentes]/ComPoNuevaTarea/ComPoNuevaTarea";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getDataLista } from "@/app/(Front)/React/Fetch/getDataLista";

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

  return (
    <ComPoNuevaTarea
      nombre='Product Owner'
      id={id}
      resul={res}
    />
  )
}

export default page