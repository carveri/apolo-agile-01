import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route";
import Formulario from "@/app/(Front)/React/Components/Formularios/Formulario";
import { ISession } from "@/app/Interfaces/ISession";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const page = async() => {

  const session:ISession | null = await getServerSession(authOptions)
   // validacion
   if(!session){
    redirect('/api/auth/signin')
  }
  //console.log(user);
  
  const {user}= session
  const {id, name, email, image} = user
  
  console.log('uss:', user);
  

  return (
    <Formulario
      id= {id}
    />
)}

export default page