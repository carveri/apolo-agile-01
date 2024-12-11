import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route"
import { getDataLista } from "@/app/(Front)/React/Fetch/getDataLista";
import { ISession } from "@/app/Interfaces/ISession"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";


export const logicaTraerIdYres = async()=>{
    const session:ISession | null = await getServerSession(authOptions)
      // validacion
      if(!session){
       redirect('/api/auth/signin')
     }
     
     const {user}= session
     const {id} = user
    
     const ruta = 'empresaPorUser'
     const url = id
     const res = await getDataLista({ruta, url})

     return {id, res}
}
