'use client'

import {useEffect, useState} from 'react'
import Link from "next/link";
import { updateData } from '@/app/(Front)/React/Fetch/updateData';
import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore';
import BadgeDiscrepancia from './Componentes/BadgeDiscrepancia';
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista';
import { useRouter } from "next/navigation";

const page = () => {

    const router = useRouter()

    // ACTIVOS 
    const [activoDiscrepancia, setActivoDiscrepancia] = useState(false)
    const [activoDiscrepancia2, setActivoDiscrepancia2] = useState(false)
    //const [activoDiscrepancia3, setActivoDiscrepancia3] = useState(false)
    

    // INICIAL
    const [discrepancia1I, setDiscrepancia1I] = useState('Tiempo')
    const [discrepancia2I, setDiscrepancia2I] = useState('Presupuesto')
    //const [discrepancia3I, setDiscrepancia3I] = useState('Equipo')
    
    const [descTiempo, setDescTiempo] = useState('-')
    const [descPresupuesto, setDescPresupuesto] = useState('-')
    //const [descEquipo, setDescEquipo] = useState('-')


    // historiaporId
    const [historiaporId, setHistoriaporId] = useState({})


    const {tiempoHistoria, presupuestoHistoria} = historiaporId
    const [paramTiempo, setParamTiempo] = useState(tiempoHistoria)
    const [paramPresupuesto, setParamPresupuesto] = useState(presupuestoHistoria)
    //const [paramEquipo, setParamEquipo] = useState(0)

    const [pesoTiempo, setPesoTiempo] = useState(0)
    const [pesoPresupuesto, setPesoPresupuesto] = useState(0)
    //const [pesoEquipo, setPesoEquipo] = useState(0)



    const handleClickVerNuevasTareas1 =()=>{
        setActivoDiscrepancia(!activoDiscrepancia)
    }

    const handleClickVerNuevasTareas2 =()=>{
        setActivoDiscrepancia2(!activoDiscrepancia2)
    }



    const { idHistoria} = useHistoriaPo()

    const status = 'Retornada'
    const status2 = 'Aceptada'
    const id = idHistoria
    
    

    // handlechange descripciones 
    const changeDesTiempo =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setDescTiempo(e.target.value)
    }

    const changeDescPresupuesto =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setDescPresupuesto(e.target.value)
    }



    // handlechange parametero
    const changeParamTiempo = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setParamTiempo(e.target.valueAsNumber)
    }

    const changeParamPresupuesto = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setParamPresupuesto(e.target.valueAsNumber)
    }


    const changePesoTiempo = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPesoTiempo(e.target.valueAsNumber)
    }

    const changePesoPresupuesto = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPesoPresupuesto(e.target.valueAsNumber)
    }
        

   // boton enviar discrepancias

    const handleClickEnviarDiscrepancia =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        const id = idHistoria
        const discrepancia1 = 'Tiempo'
        const discrepancia2 = 'Presupuesto'
        const discrepancia3 = 'Equipo'
        let tiempoHistoria = paramTiempo !==0 && paramTiempo 
        let presupuestoHistoria = paramPresupuesto !== 0 && paramPresupuesto
        const descripcion1 = descTiempo
        const descripcion2 = descPresupuesto
        const peso1 = pesoTiempo
        const peso2 = pesoPresupuesto
        const ruta = 'historia'
        

        const data = {id, status,tiempoHistoria, presupuestoHistoria, peso1,  peso2, discrepancia1, descripcion1, discrepancia2, descripcion2, discrepancia3}
        updateData({ruta, id, data})
        alert('Se enviaron las dicrepancias')
        
        location.reload()
        //router.push('/dashboard/po/poHistoriasRetornadas')
    }

    
    // boton enviar al pb

    const handleClickAgregarAlPb =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        const ruta = 'historia'
        const status = status2
        const data = {status}
        updateData({ruta, id, data})
        alert('Se guardo la historia en el ProductBacklog')
        router.push('/dashboard/po')
        location.reload()
    }


    // estados de los checkbox
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    //const [checked3, setChecked3] = useState(false)
    


    // cosas a enviar 
    const dis1 = {
        titulo1: 'Tiempo propuesto por el cliente (Días)',
        titulo2: 'Tiempo propuesto (Días)',
        titulo3: 'Peso de discrepancia (%)'
    }

    const dis2 = {
        titulo1: 'Presupuesto por el cliente (Clp)',
        titulo2: 'Presupuesto propuesto (Clp)',
        titulo3: 'Peso de discrepancia (%)'
    }

    

    

    useEffect(()=>{
        const traerHistoriaPorId = async()=>{
            const ruta = 'historia'
            const url = idHistoria
            const res = await getDataLista({ruta, url})
            setHistoriaporId(res)
        }
        traerHistoriaPorId()
    }, [])

        
    const pesototal = pesoTiempo + pesoPresupuesto

    
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
            <header className='w-full h-[5%] bg-white py-4 pl-4'>
                Dashboard {'>'} Product Owner {'>'} <Link className='hover:underline' href={'/dashboard/po/poNuevaTarea'}>Nuevas Tareas</Link> {'>'} Ver
            </header>
            <form  className='w-full h-[95%]  '>
                   <div className='w-[100%] h-[90%]   px-5   justify-end'>
                   <section className='w-full h-[90%] pt-10 px-7 '>
                    <header className='w-full h-[7%]  grid place-content-center'> 
                        Discrepancias
                    </header>
                        <main className='w-full h-[90%]   py-2'>
                                    <BadgeDiscrepancia
                                        numero = '1'
                                        checked = {checked1}
                                        setChecked = {setChecked1}
                                        handleClickVerNuevasTareas={handleClickVerNuevasTareas1}
                                        discrepanciaI={discrepancia1I}
                                        dis={dis1}
                                        parame = {tiempoHistoria}
                                        handleChangeDes={changeDesTiempo}
                                        handleChangeInputPeso = {changePesoTiempo}
                                        handleChangeInputParam={changeParamTiempo}

                                    />

                                    <BadgeDiscrepancia
                                        numero = '2'
                                        checked = {checked2}
                                        setChecked = {setChecked2}
                                        handleClickVerNuevasTareas={handleClickVerNuevasTareas2}
                                        discrepanciaI={discrepancia2I}
                                        dis={dis2}
                                        parame = {presupuestoHistoria}
                                        handleChangeDes={changeDescPresupuesto}
                                        handleChangeInputPeso = {changePesoPresupuesto}
                                        handleChangeInputParam={changeParamPresupuesto}
                                        
                                    />

                                    
                            </main>
                        </section>
                        <section className='h-[10%] w-full grid  justify-end pt-6 pr-12 font-bold text-lg'>
                            {pesototal >100 &&
                                <div className='flex flex-col  text-center'>
                                    <span>Peso total: {pesototal} %</span>
                                    <span className='text-red-600 text-sm'>Supera el 100%</span>
                                </div> 
                            }
                            {pesototal <100 &&
                                <div className='flex flex-col  text-center'>
                                    <span>Peso total: {pesototal} %</span>
                                    <span className='text-cyan-600 text-sm'>No es igual a 100%</span>
                                </div> 
                        
                            }
                            {pesototal ===100 &&
                                <div className='pr-2'>
                                Peso total: {pesototal} %
                            </div>
                            }
                        </section>
                   </div>
                   <div className='w-full h-[10%]  flex justify-end pr-9'>
                        <article className='w-[15%]  grid place-items-center'>
                            {checked1 && pesototal === 100 && paramTiempo !== 0 && pesoTiempo !== 0  &&
                            <button  onClick={handleClickEnviarDiscrepancia} className='w-[95%] h-[60%] bg-colorBotonPrincipal rounded text-white font-semibold hover:bg-hoverColorBotonPrincipal'>
                                Enviar discrepancias
                            </button>
                            
                        }
                        </article>
                        {pesototal === 0 &&  
                            <article className='w-[15%]  grid place-items-center'>
                                <button onClick={handleClickAgregarAlPb} className='w-[95%] h-[60%] bg-[#00ff08] rounded text-white font-semibold hover:bg-[#00dd07]'>
                                    Agregar al product Backlog
                                </button>
                            </article>
                        
                        
                        }
                   </div>
                    
                    
            </form>
        </section>
    </div>
  )
}

export default page