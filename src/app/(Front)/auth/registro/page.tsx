'use client'

import { format } from "date-fns";
import {useState, useEffect} from 'react'
import FormRegistro from './Components/FormRegistro'
import { useRouter, useSearchParams } from "next/navigation";
import { postData } from '../../React/Fetch/postData';
import Image from 'next/image';

import logoPrincipal from "./../../React/Assets/Icons/logoPricipal2.png";
import { dataRegistro } from '../../React/Utils/dataRegistro';
import Link from 'next/link';
import { dataEmpresas } from '../../React/Utils/dataEmpresas';
import { postData2 } from '../../React/Fetch/postData2';
import { getData } from "../../React/Fetch/getData";


const page = () => {

    const router = useRouter()

    //const [name, setName] = useState('')
    

    const [primerNombre, setPrimerNombre] = useState('')
    const [segundoNombre, setSegundoNombre] = useState('')
    const [apellidoPaterno, setApellidoPaterno] = useState('')
    const [apellidoMaterno, setApellidoMaterno] = useState('')
    const [email, setEmail] = useState('')
    const [rutPersonal, setRutPersonal] = useState('')
    const [rutEmpresa, setRutEmpresa] = useState('')
    const [nombreEmpresa, setNombreEmpresa] = useState('-')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')



    //const [empresa, setEmpresa] = useState('-')

    useEffect(()=>{
      const traerEmpresas = async()=>{
        const ruta = `empresa`
        const res = await getData({ruta})
        setNombreEmpresa(res)
      }
      traerEmpresas()
    }, [])

    //console.log('nombreempresa:', nombreEmpresa);
    
    //console.log('nombre empres');
    
    

    const handleChangeRegistro = (e)=>{
        if(e.target.name === 'primerNombre'){
          setPrimerNombre(e.target.value)
        }
        else if(e.target.name === 'segundoNombre'){
          setSegundoNombre(e.target.value)
        }

        else if(e.target.name === 'apellidoPaterno'){
          setApellidoPaterno(e.target.value)
        }

        else if(e.target.name === 'apellidoMaterno'){
          setApellidoMaterno(e.target.value)
        }

        else if(e.target.name === 'email'){
          setEmail(e.target.value)
        }
        else if(e.target.name === 'rutPersonal'){
          setRutPersonal(e.target.value)
        }

        else if(e.target.name === 'rutEmpresa'){
          const res = nombreEmpresa.find((el)=>{
            return el.rutEmpresa === e.target.value
          })
          // console.log(res.nombreEmpresa);
          setNombreEmpresa(res?.nombreEmpresa)
          setRutEmpresa(e.target.value)
        }
        
        else if(e.target.name === 'password'){
          setPassword(e.target.value)
        }
        else if(e.target.name === 'confirmPassword'){
          setConfirmPassword(e.target.value)
        }
        else{
          console.log('aas');
          
        }
        
    }

    //console.log('empresas:', nombreEmpresa);

    const createdAt = format(new Date(), 'dd/MM/yyyy')
    const horaAt = format(new Date(), 'H:mm')
    const cargoId = "51e56b01-d55e-4496-93d9-cd3c67677eb8"
    const empresaId = "6c84d6cd-b50e-4ef5-90ad-6c7032668ef7"
    const equipoId = "12ffe6ab-5f6c-4575-84eb-e7dd6a3350a7"  

    const handleSubmitRegistro =(e)=>{
        e.preventDefault()
        const ruta = 'user'
        //const ruta2 = 'empresa'
        const data = {primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, email, rutPersonal, password, confirmPassword, createdAt, horaAt, cargoId, empresaId, equipoId}
        //const data2 = {rutEmpresa, nombreEmpresa}
        if(primerNombre === '' || segundoNombre === '' || apellidoPaterno === '' || apellidoMaterno === '' || email === '' || rutEmpresa === '' || rutPersonal=== '' || nombreEmpresa === '' ||  password ==='' || confirmPassword ===''){
          alert('Tienes que completar todos los campos :)')
        }
        if(password !== confirmPassword){
          alert('Las contraseñas no son iguales, intentalo otravez :)')
        }
        //console.log(primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno,  email, rutEmpresa,  password, confirmPassword);
        
        postData({ruta, data})
        console.log('cargoId:', cargoId);
        console.log('equipoId:', equipoId);
        
        console.log('rut empresa:', rutEmpresa);
        
        //postData2({ruta2, data2})
        router.push('/api/auth/login')
    }

  return (
    <div className='w-screen h-screen bg-white grid place-items-center'>
     <section className='w-4/6 h-[89%] bg-white grid grid-cols-2 gap-4'>
        <article className='pt-14 px-12 '>
            <article className='w-full h-12 text-xl flex pb-20  place-content-center  '>
              <header className='pr-2'>
                <Image
                    src={logoPrincipal}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                />
              </header> 
              <p className='text-2xl '>
                Apolo Scrum
              </p>
            </article>
          <ul className='text-xl bg-white '>
            {dataRegistro.map((el)=>{
              return <li key={el.id} className='flex pb-3'>
                <header className='w-[10%]  grid justify-items-center pt-1'>
                  <Image
                      src={el.icono}
                      width={25}
                      height={25}
                      alt="Picture of the author"
                  />
                </header>
                <main className='w-[90%] '>
                  <header className='font-bold text-blue-800 pb-1'>
                    {el.titulo}
                  </header>
                    <article>
                      {el.descripcion}
                    </article>
                </main>
              </li>
            })}
          </ul>
          <div className=' h-[20%] grid place-content-end '>
            <Link className='text-[#00ff08] hover:underline font-semibold pl-2 text-lg' href={'/api/auth/login'}>Volver al login</Link>
          </div>
        </article>
        <article className='grid justify-items-center'>
          <FormRegistro
            handleSubmitRegistro={handleSubmitRegistro}
            handleChangeRegistro={handleChangeRegistro}
            nombreEmpresa={nombreEmpresa}
          />
        </article>
      </section>
    </div>
  )
}

export default page 