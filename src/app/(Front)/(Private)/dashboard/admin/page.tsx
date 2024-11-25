import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route";
import Formulario from "@/app/(Front)/React/Components/Formularios/Formulario";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
//import { useUserStore } from "../../[stores]/userStore";

const page = async() => {

  const session = await getServerSession(authOptions)
   // validacion
   if(!session){
    redirect('/api/auth/signin')
  }
  //console.log(user);
  
  const {user}= session
  const {id, name, email, image} = user
  

  //console.log('datauser del admin:', user);
  
  

  return (
    <Formulario
      id= {id}
    />
)}

export default page