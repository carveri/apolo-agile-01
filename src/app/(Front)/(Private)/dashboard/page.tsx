

import { useState, useEffect} from "react";


import { getData } from '../../React/Fetch/getData'

import { getServerSession } from "next-auth/next";
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route';
import { dataDeptos } from "../../React/Utils/dataDeptos";
import { dataClientes } from "../../React/Utils/dataClientes";
import { dataCaracter } from "../../React/Utils/dataCaracter";
import { dataProblema } from "../../React/Utils/dataProblema";
import { dataArea } from "../../React/Utils/dataArea";
//import { useSearchParams } from "next/navigation";
import { postData } from "../../React/Fetch/postData";
import { format } from "date-fns";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { signOut } from "next-auth/react";

const page = async() => {

    // const router = useRouter()

    // const [activoCargo, setActivoCargo] = useState(false)
    // const [activoEquipo, setActivoEquipo] = useState(false)

    // // estados de los inputs
    // const [primerNombre, setPrimerNombre] = useState('')
    // const [segundoNombre, setSegundoNombre] = useState('')
    // const [apellidoPaterno, setApellidoPaterno] = useState('')
    // const [apellidoMaterno, setApellidoMaterno] = useState('')
    // const [rutPersonal, setRutPersonal] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')

    // const [cargoI, setCargoI] = useState('Admin')
    // const [equipoI, setEquipoI] = useState('AdminsTeam')

    // // traer datos de la db del cargo y el equipo
    // const [cargos, setCargos] = useState([])
    // const [equipos, setEquipos] = useState([])
    // const [cargoId, setCargoId] = useState('9f410bb7-5e58-4291-8e58-df0a6ea1d02b')
    // const [equipoId, setEquipoId] = useState('879007de-ef82-44db-8271-339dd06dffed')


    // //const [activoArea, setActivoArea] = useState(false)

    // useEffect(()=>{
    //     const traerCargos = async()=>{
    //         const ruta = 'cargo'
    //         const res = await getData({ruta})
    //         setCargos(res)
    //     }
    //     const traerEquipos = async()=>{
    //         const ruta = 'equipo'
    //         const res = await getData({ruta})
    //         setEquipos(res)
    //     }
    //     traerCargos()
    //     traerEquipos()
    // }, [])

    

    // const handleClickCargo = ()=>{
    //     setActivoCargo(!activoCargo)
    // }

    // const handleClickEquipo = ()=>{
    //     setActivoEquipo(!activoEquipo)
    // }


    // const handleClickListaAdmin1 =(id, nombreCargo)=>{
    //     setCargoId(id)
    //     setCargoI(nombreCargo)
    //     setActivoCargo(false)
    // }

    // const handleClickListaAdmin2 =(id, nombreEquipo)=>{
    //     setEquipoId(id)
    //     setEquipoI(nombreEquipo)
    //     setActivoEquipo(false)
    // }

    // const hanldeChangeNewUser =(e)=>{
    //     if(e.target.name === 'primerNombre'){
    //         setPrimerNombre(e.target.value)
    //     }
    //     else if(e.target.name === 'segundoNombre'){
    //         setSegundoNombre(e.target.value)
    //     }
    //     else if(e.target.name === 'apellidoPaterno'){
    //         setApellidoPaterno(e.target.value)
    //     }
    //     else if(e.target.name === 'apellidoMaterno'){
    //         setApellidoMaterno(e.target.value)
    //     }
    //     else if(e.target.name === 'rutPersonal'){
    //         setRutPersonal(e.target.value)
    //     }
    //     else if(e.target.name === 'email'){
    //         setEmail(e.target.value)
    //     }
    //     else if(e.target.name === 'password'){
    //         setPassword(e.target.value)
    //     }
    //     else if(e.target.name === 'confirmarPassword'){
    //         setConfirmPassword(e.target.value)
    //     }
    //     else {
    //         console.log('sd');
            
    //     }
    // }

    // const createdAt = format(new Date(), 'dd/MM/yyyy')
    // const horaAt = format(new Date(), 'H:mm')
    // const empresaId = "6c84d6cd-b50e-4ef5-90ad-6c7032668ef7" 

    

    // const handleSubmitNewUserAdmin = (e)=>{
    //     e.preventDefault()
    //     const ruta = 'user'
    //     const data = {primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, email, rutPersonal, password, confirmPassword, createdAt, horaAt, cargoId, empresaId, equipoId}
    //     console.log('cargoId:', cargoId);
    //     console.log('empresaId:', empresaId);
    //     console.log('equipoId:', equipoId);
        
        
        
        
    //     postData({ruta, data})
    //     signOut()
    //     router.push('/api/auth/login')

    // }
    const session = await getServerSession(authOptions)
   // validacion
   if(!session){
    redirect('/api/auth/signin')
  }

  const {user}= session

  if(user?.name === 'd92c28a1-fc63-4c8c-a39f-e598b1474896'){
    redirect('/dashboard/sm')
  }else if(user?.name === 'b02c288b-8f32-4da1-8e37-0ee036065b31'){
    redirect('/dashboard/po')
  }
  else if(user?.name === 'bf65cc3b-d9d3-415d-886f-ea4266ff2f17'){
    redirect('/dashboard/admin')
  }
  else if(user?.name === 'b1eaf458-7650-41f6-9852-561011a479a7'){
    redirect('/dashboard/cliente')
  }
  else if(user?.name === '7e911b1b-0ce3-41df-a869-7756e17a4aa2'){
    redirect('/dashboard/devs')
  }
  else{
    redirect('/api/auth/login')
    
  }
    

  return (
    <>
      <div className="w-full h-12">
        olis
      </div>
    </>
)}

export default page