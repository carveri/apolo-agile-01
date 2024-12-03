import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route";
import FormularioClientePeticion from "@/app/(Front)/React/Components/Formularios/FormularioClientePeticion"
import { ISession } from "@/app/Interfaces/ISession";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ComAgregarTarea from "../../[Componentes]/ClienteAgregarTarea/ComAgregarTarea";





const page = async() => {

  const session:ISession | null = await getServerSession(authOptions)
  // validacion
  if(!session){
   redirect('/api/auth/signin')
  }
  //console.log(user);
  
  const {user}= session
  const {id, name, email} = user
  
  //console.log('datauserpal cliente:', user);

  return (
    <ComAgregarTarea
      id={id}
      areaId={name}
      email={email}
      nombre= 'Visionario'
    />
  )
}

export default page