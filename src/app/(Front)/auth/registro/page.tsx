'use client'

import { format } from "date-fns";
import {useState, useEffect} from 'react'
import FormRegistro from './Components/FormRegistro'
import { useRouter } from "next/navigation";
import { postData } from '../../React/Fetch/postData';
import Image from 'next/image';

import logoPrincipal from "./../../React/Assets/Icons/logoPricipal2.png";
import { dataRegistro } from '../../React/Utils/dataRegistro';
import Link from 'next/link';
import { dataEmpresas } from '../../React/Utils/dataEmpresas';
import { getDataLista } from "../../React/Fetch/getDataLista";
import { IEmpresa } from "@/app/Interfaces/IGeneral";


// interface IEmpresa {

// }

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
    const [empresa, setEmpresa] = useState<IEmpresa[]>([])



    //const [empresa, setEmpresa] = useState('-')

    useEffect(()=>{
      const traerEmpresas = async()=>{
        const ruta = `empresa`
        const url = rutEmpresa
        const res = await getDataLista({ruta, url})
        setEmpresa(res)
      }
      traerEmpresas()
    }, [rutEmpresa])


          
    const handleChangeRegistro = (e:React.ChangeEvent<HTMLInputElement>)=>{
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
          const res = dataEmpresas.find((el)=>{
            return el.rutEmpresa === e.target.value
          })
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
    const cargoId = "cc2d1b31-8e40-47bd-beb5-6b34105f125e"
    const empresaId =  empresa?.id
    const equipoId = "8045c1d8-1162-4537-9dac-2e89b42a8100"  

    const handleSubmitRegistro =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        
        //const ruta2 = 'empresa'
        const data = {primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, email, rutPersonal, password, confirmPassword, createdAt, horaAt, cargoId, empresaId, equipoId}
        //const data2 = {rutEmpresa, nombreEmpresa}
        if(primerNombre === '' || segundoNombre === '' || apellidoPaterno === '' || apellidoMaterno === '' || email === '' || rutEmpresa === '' || rutPersonal=== '' || nombreEmpresa === '' ||  password ==='' || confirmPassword ===''){
          alert('Tienes que completar todos los campos :)')
          return
        }
        if(password !== confirmPassword){
          alert('Las contraseñas no son iguales, intentalo otravez :)')
          return
        }
        if(empresa === null){
          alert("El rut de la empresa no tiene una compañia asociada, favor reintentar")
          return
        }
        //console.log(primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno,  email, rutEmpresa,  password, confirmPassword);
        const ruta = 'user'
        postData({ruta, data})
        router.push('/api/auth/login')
    }

    //console.log('empresa:', empresa);
    

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
              <p className='text-lg '>
                Apolo Agile
              </p>
            </article>
          <ul className='text-xl bg-white h-[65%]'>
            {dataRegistro.map((el)=>{
              return <li key={el.id} className='flex pb-3'>
                <header className='w-[10%]  grid justify-items-center pt-1'>
                  <Image
                      src={el.icono}
                      width={20}
                      height={20}
                      alt="Picture of the author"
                  />
                </header>
                <main className='w-[90%] text-tamañoLetra'>
                  <header className='font-bold text-colorFormularioLogin pb-1 text-base'>
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
            <Link className=' cursor-pointer font-semibold pl-2 text-white grid place-content-center rounded  bg-colorTextoAceptada w-36 h-10 text-tamañoLetra' href={'/api/auth/login'}>Volver al login</Link>
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