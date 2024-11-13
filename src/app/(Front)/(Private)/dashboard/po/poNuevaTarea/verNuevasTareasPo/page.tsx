'use client'

import {useEffect, useState} from 'react'
import Link from "next/link";
import { updateData } from '@/app/(Front)/React/Fetch/updateData';
import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore';
import BadgeDiscrepancia from './Componentes/BadgeDiscrepancia';
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista';

const page = () => {

    const [activoDiscrepancia, setActivoDiscrepancia] = useState(false)
    const [activoDiscrepancia2, setActivoDiscrepancia2] = useState(false)
    const [activoDiscrepancia3, setActivoDiscrepancia3] = useState(false)
    const [activoDiscrepancia4, setActivoDiscrepancia4] = useState(false)

    const [activoTiempo, setActivoTiempo] = useState(false)
    const [activoPeso, setActivoPeso] = useState(false)

    const [activoPresupuesto, setActivoPresupuesto] = useState(false)
    const [activoPeso2, setActivoPeso2] = useState(false)

    const [activoEquipo, setActivoEquipo] = useState(false)
    const [activoPeso3, setActivoPeso3] = useState(false)

    // inicial
    const [discrepancia1I, setDiscrepancia1I] = useState('-')
    const [discrepancia2I, setDiscrepancia2I] = useState('-')
    const [discrepancia3I, setDiscrepancia3I] = useState('-')
    

    const [tiempo1I, setTiempo1I] = useState(10)
    const [peso1I, setPeso1I] = useState(100)

    const [presupuesto1I, setPresupuesto1I] = useState(19822)
    const [peso2I, setPeso2I] = useState(100)

    const [equipo1I, setEquipo1I] = useState(69)
    const [peso3I, setPeso3I] = useState(100)

    // nombre
    const [discrepancia1, setDiscrepancia1] = useState('-')
    const [discrepancia2, setDiscrepancia2] = useState('-')
    const [discrepancia3, setDiscrepancia3] = useState('-')
    const [discrepancia4, setDiscrepancia4] = useState('-')

    // descripciones
    const [descripcion1, setDescripcion1] = useState("-")
    const [descripcion2, setDescripcion2] = useState("-")
    const [descripcion3, setDescripcion3] = useState("-")
    const [descripcion4, setDescripcion4] = useState("-")

    // historiaporId
    const [historiaporId, setHistoriaporId] = useState({})

    // estado de los inputs

    const [descTiempo, setDescTiempo] = useState('-')
    const [descPresupuesto, setDescPresupuesto] = useState('-')
    const [descEquipo, setDescEquipo] = useState('-')

    const [paramTiempo, setParamTiempo] = useState(0)
    const [paramPresupuesto, setParamPresupuesto] = useState(0)
    const [paramEquipo, setParamEquipo] = useState(0)

    const [pesoTiempo, setPesoTiempo] = useState(0)
    const [pesoPresupuesto, setPesoPresupuesto] = useState(0)
    const [pesoEquipo, setPesoEquipo] = useState(0)





    const handleClickVerNuevasTareas1 =()=>{
        setActivoDiscrepancia(!activoDiscrepancia)
    }

    const handleClickVerNuevasTareas2 =()=>{
        setActivoDiscrepancia2(!activoDiscrepancia2)
    }

    const handleClickVerNuevasTareas3 =()=>{
        setActivoDiscrepancia3(!activoDiscrepancia3)
    }

    const handleClickVerNuevasTareas4 =()=>{
        setActivoDiscrepancia4(!activoDiscrepancia4)
    }


    // importante
    const discrepancia1h =(id, discrepancia)=>{
        setDiscrepancia1(discrepancia)
        setDiscrepancia1I(discrepancia)
        setActivoDiscrepancia(false)
    }

    const discrepancia2h =(id, discrepancia)=>{
        setDiscrepancia2(discrepancia)
        setDiscrepancia2I(discrepancia)
        setActivoDiscrepancia2(false)
    }
    const discrepancia3h =(id, discrepancia)=>{
        setDiscrepancia3(discrepancia)
        setDiscrepancia3I(discrepancia)
        setActivoDiscrepancia3(false)
    }
    const discrepancia4h =(id, discrepancia)=>{
        setDiscrepancia4(discrepancia)
        setDiscrepancia4I(discrepancia)
        setActivoDiscrepancia4(false)
    }

    // tomar los datos de los inputs
    const handleChangeDiscrepancia =(e)=>{
        if(e.target.name === 'discrepancia1'){
            setDescripcion1(e.target.value)
        }
        else if(e.target.name === 'discrepancia2'){
            setDescripcion2(e.target.value)
        }
        else if(e.target.name === 'discrepancia3'){
            setDescripcion3(e.target.value)
        }
        else if(e.target.name === 'discrepancia4'){
            setDescripcion4(e.target.value)
        }
    }

    const { idHistoria} = useHistoriaPo()

    const status = 'Retornada'
    const status2 = 'Aceptada'
    const id = idHistoria
    
    

    // handlechange descripciones 
    const changeDesTiempo =(e)=>{
        setDescTiempo(e.target.value)
    }

    const changeDescPresupuesto =(e)=>{
        setDescPresupuesto(e.target.value)
    }

    const changeDesEquipo =(e)=>{
        setDescEquipo(e.target.value)
    }

    // handlechange parametero
    const changeParamTiempo = (e)=>{
        setParamTiempo(e.target.valueAsNumber)
    }

    const changeParamPresupuesto = (e)=>{
        setParamPresupuesto(e.target.valueAsNumber)
    }

    const changeParamEquipo = (e)=>{
        setParamEquipo(e.target.valueAsNumber)
    }
    

    // handlechange peso 

    const changePesoTiempo = (e)=>{
        setPesoTiempo(e.target.valueAsNumber)
    }

    const changePesoPresupuesto = (e)=>{
        setPesoPresupuesto(e.target.valueAsNumber)
    }

    const changePesoEquipo = (e)=>{
        setPesoEquipo(e.target.valueAsNumber)
    }

        
    
    

   // boton enviar discrepancias

    const handleClickEnviarDiscrepancia =(e)=>{
        e.preventDefault()
        const id = idHistoria
        const discrepancia1 = 'Tiempo'
        const discrepancia2 = 'Presupuesto'
        const discrepancia3 = 'Equipo'
        const tiempoHistoria = paramTiempo
        const presupuestoHistoria = paramPresupuesto
        const descripcion1 = descTiempo
        const descripcion2 = descPresupuesto
        const descripcion3 = descEquipo
        const tiempo1 = paramTiempo
        const presupuesto2 = paramPresupuesto
        const equipo3 = paramEquipo
        const peso1 = pesoTiempo
        const peso2 = pesoPresupuesto
        const peso3 = pesoEquipo
        const ruta = 'historia'
        
        
        const data = {id, status,tiempoHistoria, presupuestoHistoria, tiempo1, peso1, presupuesto2, peso2, equipo3, peso3, discrepancia1, descripcion1, discrepancia2, descripcion2, discrepancia3, descripcion3}
        console.log('data:', data);
        //console.log('id:', id);
        
        
        updateData({ruta, id, data})
        alert('Se enviaron las dicrepancias')
        location.reload();
        
    }

    
    // boton enviar al pb

    const handleClickAgregarAlPb =(e)=>{
        e.preventDefault()
        const ruta = 'historia'
        const status = status2
        const data = {status}
        // console.log('destiem:', descTiempo);
        // console.log('despresu:', descPresupuesto);
        // console.log('desequi:', descEquipo);
        // console.log('paratiem:', paramTiempo);
        // console.log('parapresu:', paramPresupuesto);
        // console.log('paraequi:', paramEquipo);
        // console.log('tiem:', pesoTiempo);
        // console.log('presu:', pesoPresupuesto);
        // console.log('equi:', pesoEquipo);
        console.log(data);
        
        updateData({ruta, id, data})
        alert('Se guardo la historia en el ProductBacklog')
        location.reload();
        
    }

    const handleClickTiempo =()=>{
        setActivoTiempo(!activoTiempo)
    }

    const handleClickPeso =()=>{
        setActivoPeso(!activoPeso)
    }


    // estados de los checkbox
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    
    const tiempo1h =(id, tiempo)=>{
        setTiempo1I(tiempo)
        setActivoTiempo(false)
    }

    const peso1h = (id, nombrePeso)=>{
        setPeso1I(nombrePeso)
        setActivoPeso(false)
    }

    const presupuesto1h =(id, presupuesto)=>{
        setPresupuesto1I(presupuesto)
        setActivoPresupuesto(false)
    }
    const peso2h = (id, nombrePeso)=>{
        setPeso1I(nombrePeso)
        setActivoPeso(false)
    }



    const equipo1h =(id, equipo)=>{
        setEquipo1I(equipo)
        setActivoEquipo(false)
    }
    const peso3h = (id, nombrePeso)=>{
        setPeso1I(nombrePeso)
        setActivoPeso(false)
    }


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

    const dis3 = {
        titulo1: 'Equipo actual para el trabajo',
        titulo2: 'Equipo propuesto extra(N°)',
        titulo3: 'Peso de discrepancia (%)'
    }

    const mt1 = 96
    const mt2 = 96

    useEffect(()=>{
        const traerHistoriaPorId = async()=>{
            const ruta = 'historia'
            const url = idHistoria
            const res = await getDataLista({ruta, url})
            setHistoriaporId(res)
        }
        traerHistoriaPorId()
    }, [])

    const {tiempo1, presupuesto2, equipo3} = historiaporId
    console.log('hiXid:', historiaporId);

    

    
    

    
    
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
                                        handleChangeDiscrepancia={handleChangeDiscrepancia}
                                        handleClickTiempo={handleClickTiempo}
                                        tiempoI={tiempo1I}
                                        activoTiempo={activoTiempo}
                                        tiempoh={tiempo1h}
                                        handleClickPeso={handleClickPeso}
                                        pesoI={peso1I}
                                        activoPeso={activoPeso}
                                        pesoh={peso1h}
                                        dis={dis1}
                                        top1 = {mt1}
                                        top2 = {mt2}
                                        parame = {tiempo1}
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
                                        handleChangeDiscrepancia={handleChangeDiscrepancia}
                                        handleClickTiempo={handleClickTiempo}
                                        tiempoI={presupuesto1I}
                                        activoTiempo={activoPresupuesto}
                                        tiempoh={presupuesto1I}
                                        handleClickPeso={handleClickPeso}
                                        pesoI={peso2I}
                                        activoPeso={activoPeso2}
                                        pesoh={peso2h}
                                        dis={dis2}
                                        top1 = {mt1}
                                        top2 = {mt2}
                                        parame = {presupuesto2}
                                        handleChangeDes={changeDescPresupuesto}
                                        handleChangeInputPeso = {changePesoPresupuesto}
                                        handleChangeInputParam={changeParamPresupuesto}
                                        
                                    />

                                    <BadgeDiscrepancia
                                        numero = '3'
                                        checked = {checked3}
                                        setChecked = {setChecked3}
                                        handleClickVerNuevasTareas={handleClickVerNuevasTareas3}
                                        discrepanciaI={discrepancia3I}
                                        handleChangeDiscrepancia={handleChangeDiscrepancia}
                                        handleClickTiempo={handleClickTiempo}
                                        tiempoI={tiempo1I}
                                        activoTiempo={activoTiempo}
                                        tiempoh={tiempo1h}
                                        handleClickPeso={handleClickPeso}
                                        pesoI={peso1I}
                                        activoPeso={activoPeso}
                                        pesoh={peso1h}
                                        dis={dis3}
                                        top1 = {mt1}
                                        top2 = {mt2}
                                        parame = {equipo3}
                                        handleChangeDes={changeDesEquipo}
                                        handleChangeInputPeso = {changePesoEquipo}
                                        handleChangeInputParam={changeParamEquipo}
                                    />
                            </main>
                        </section>
                        <section className='h-[10%] w-full grid  justify-end pt-6 pr-12 font-bold text-lg'>
                            Total peso discrepancia: 100
                        </section>
                   </div>
                   <div className='w-full h-[10%]  flex justify-end'>
                        <article className='w-[15%]  grid place-items-center'>
                            {checked1 &&
                            <button  onClick={handleClickEnviarDiscrepancia} className='w-[95%] h-[60%] bg-violet-500 rounded text-white font-semibold hover:bg-violet-600'>
                                Enviar discrepancias
                            </button>
                            
                        }
                        </article>
                        {discrepancia1I === '-' && discrepancia2I  === '-' && discrepancia3I  === '-'  && descTiempo  === '-' && descPresupuesto  === '-' && descEquipo  === '-'  &&
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