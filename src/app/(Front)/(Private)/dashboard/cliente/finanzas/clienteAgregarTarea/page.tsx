

import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route";
import FormularioClientePeticion from "@/app/(Front)/React/Components/Formularios/FormularioClientePeticion"
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
const {id, name, email} = user
//console.log('datauserpal cliente:', user);



  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
            <header className='w-full h-[5%] py-4 pl-4 '>
                Dashboard Cliente {'>'} Clientes {'>'} Finanzas {'>'} Agregar Tarea
            </header>
            <main className='w-full h-[95%] '>
            <FormularioClientePeticion
                id={id}
                areaId={name}
                email={email}
                //areaId = {name}
                // handleSumbitCliente = {handleSumbitCliente}
                // dia = {dia}
                // hora = {hora} 
                // cargoI = {cargoI} 
                // activoCargo = {activoCargo}
                // cargo = {cargo}
                // handleClickCargo = {handleClickCargo}
                // handleClickCliente2 = {handleClickCliente2}
                // userI = {userI}
                // activoSolicitante = {activoSolicitante}
                // user = {user}
                // handleClickCliente3 = {handleClickCliente3}
                // handleChangeCliente = {handleChangeCliente}
                // caracterI = {caracterI}
                // activoCaracter = {activoCaracter}
                // handleClickCaracter = {handleClickCaracter}
                // caracter = {caracter}
                // handleClickCliente4 = {handleClickCliente4}
                // handleClickSolicitante = {handleClickSolicitante}
            
            />
        </main>
        </section>
        
    </div>
  )
}

export default page