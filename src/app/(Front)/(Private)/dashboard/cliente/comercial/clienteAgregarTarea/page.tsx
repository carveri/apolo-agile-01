import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route";
import FormularioClientePeticion from "@/app/(Front)/React/Components/Formularios/FormularioClientePeticion"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const page = async() => {

    const session = await getServerSession(authOptions)
// validacion
if(!session){
 redirect('/api/auth/signin')
}
//console.log(user);

// NAME => AREAID


const {user}= session
const {id, name, email} = user
//console.log('datauserpal cliente:', user.name);
console.log('areaaid:', name);
console.log('emaialal:', email);




    

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
            <header className='w-full h-[5%] py-4 pl-4 '>
                Dashboard Cliente {'>'} Clientes {'>'} Comercial {'>'} Agregar Tarea
            </header>
            <main className='w-full h-[95%] '>
            <FormularioClientePeticion
                id={id}
                areaId={name}
                email = {email}
            />
        </main>
        </section>
        
    </div>
  )
}

export default page