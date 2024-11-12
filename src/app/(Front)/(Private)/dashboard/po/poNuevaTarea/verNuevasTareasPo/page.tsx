'use client'

import { dataClientes } from '@/app/(Front)/React/Utils/dataClientes'
//import { dataDiscrepancias } from '@/app/(Front)/React/Utils/dataDiscrepancias'

import {useState} from 'react'
import Link from "next/link";
import { dataDiscrepanciaPo } from '@/app/(Front)/React/Utils/dataDiscrepanciaPo';
import { updateData } from '@/app/(Front)/React/Fetch/updateData';
import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore';
import { dataTiempoHistoria } from '@/app/(Front)/React/Utils/dataTiempoHistoria';
import { dataPesoHistoria } from '@/app/(Front)/React/Utils/dataPesoHistoria';
//import { dataDiscrepanciasPo } from '@/app/(Front)/React/Utils/dataDisprepanciasPo';
//import { dataDiscrepanciasPo } from '@/app/(Front)/React/Utils/dataDisprepanciasPo'

const page = () => {

    const [activoDiscrepancia, setActivoDiscrepancia] = useState(false)
    const [activoDiscrepancia2, setActivoDiscrepancia2] = useState(false)
    const [activoDiscrepancia3, setActivoDiscrepancia3] = useState(false)
    const [activoDiscrepancia4, setActivoDiscrepancia4] = useState(false)

    const [activoTiempo, setActivoTiempo] = useState(false)
    const [activoPeso, setActivoPeso] = useState(false)

    // inicial
    const [discrepancia1I, setDiscrepancia1I] = useState('Tiempo')
    const [discrepancia2I, setDiscrepancia2I] = useState('Tiempo')
    const [discrepancia3I, setDiscrepancia3I] = useState('Tiempo')
    const [discrepancia4I, setDiscrepancia4I] = useState('Tiempo')

    const [tiempo1I, setTiempo1I] = useState(10)
    const [peso1I, setPeso1I] = useState(100)

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

    //const nombreHistoria = 'desde el front'

    const handleClickEnviarDiscrepancia =(e)=>{
        e.preventDefault()
        console.log(discrepancia1);
        console.log(discrepancia2);
        console.log(discrepancia3);
        console.log(discrepancia4);

        console.log(descripcion1);
        console.log(descripcion2);
        console.log(descripcion3);
        console.log(descripcion4);
        const ruta = 'historia'
        
        const data = { status, discrepancia1, descripcion1, discrepancia2, descripcion2, discrepancia3, descripcion3, discrepancia4, descripcion4}
        console.log(data);
        //console.log('id:', id);
        
        
        updateData({ruta, id, data})
        alert('Se enviaron las dicrepancias')
        location.reload();
        
    }

    const handleClickAgregarAlPb =(e)=>{
        e.preventDefault()
        const ruta = 'historia'
        const status = status2
        const data = {status}
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
    

    // const discrepancia4h =(id, discrepancia)=>{
    //     setDiscrepancia4(discrepancia)
    //     setDiscrepancia4I(discrepancia)
    //     setActivoDiscrepancia4(false)
    // }
    const tiempo1h =(id, tiempo)=>{
        setTiempo1I(tiempo)
        setActivoTiempo(false)
    }

    const peso1h = (id, nombrePeso)=>{
        setPeso1I(nombrePeso)
        setActivoPeso(false)
    }

    //console.log('checked:', checked1);
    
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
            <header className='w-full h-[5%] bg-white py-4 pl-4'>
                Dashboard {'>'} Product Owner {'>'} <Link className='hover:underline' href={'/dashboard/po/poNuevaTarea'}>Nuevas Tareas</Link> {'>'} Ver
            </header>
            <form  className='w-full h-[95%] '>
                   <div className='w-[100%] h-[90%]  flex px-5 '>
                   <section className='w-full h-full pt-10 px-7'>
                    <header className='w-full h-[7%]  grid place-content-center'> 
                        Discrepancias
                    </header>
                        <main className='w-full h-[90%] grid grid-rows-4  py-2'>
                            <article className='flex mb-4  w-[100%]'>
                                <section className='w-[70%] '>
                                    <label  className='flex content-center'  htmlFor=""> <div className='mr-1'><input type="checkbox" onChange={(e)=>setChecked1(!checked1)} /></div>Discrepancia 1:</label>
                                    
                                    <div className={`pl-3 h-8 rounded-md ${checked1 ? 'bg-gray-100': 'bg-gray-300'} bg-gray-100 border border-gray-200 cursor-pointer  grid content-center`} onClick={handleClickVerNuevasTareas1}>
                                            {discrepancia1I}
                                    </div>
                                        <div className='grid grid-rows-2 h-14'>
                                            <label htmlFor="">Descripción (opcional)</label>
                                            {checked1 ?
                                                <input name='discrepancia1'  onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2' type="text" />: <input name='discrepancia1' readOnly onChange={handleChangeDiscrepancia} className='h-8 border border-#a4a1a1 rounded pl-2 bg-gray-300' type="text" />
                                            
                                            }
                                        </div>
                                </section>








                                <section className=' w-[30%] h-full flex  pt-5'>
                                    {checked1 ?
                                    <article className=' w-1/3 h-full px-2 '>
                                        <div className='h-[40%] pt-1 text-center' >
                                            Tiempo propuesto por el cliente (Días)
                                        </div>
                                        <div className='w-full h-20  text-center pt-3'>
                                            4
                                        </div>
                                    </article>:
                                    <article className=' w-1/3 h-full px-2 '>
                                    <div className='h-[40%] pt-1 text-center bg-gray-300' >
                                        Tiempo propuesto por el cliente (Días)
                                    </div>
                                    <div className='w-full h-20  text-center pt-3 bg-gray-300'>
                                        4
                                    </div>
                                </article>
                                    
                                    }

                                    {checked1 ?
                                    
                                    <article className=' w-1/3 h-full px-2 pt-2'>
                                    <div className='h-[30%] w-full  grid place-content-center text-center'>
                                        Tiempo propuesto (Días)
                                    </div>
                                    <div onClick={handleClickTiempo} className='border border-gray-200 w-full h-[30%] mt-4  grid place-content-center cursor-pointer'>
                                        {tiempo1I}
                                    </div>
                                    {activoTiempo && 
                                        <div className='mt-[55px] z-50 absolute top-60 left-3/5 max-h-24 overflow-auto '>
                                        {dataTiempoHistoria.map((el)=>{
                                            const {id, tiempo} = el
                                            return <div key={id} onClick={()=>tiempo1h(id,tiempo)} className='w-[123px] text-center bg-gray-50 hover:bg-gray-300 cursor-pointer pl-6'>
                                                {tiempo}
                                            </div>
                                        })}
                                        </div>
                                    }

                                </article>:
                                <article className=' w-1/3 h-full px-2 pt-2'>
                                <div className='h-[30%] w-full  grid place-content-center text-center bg-gray-300'>
                                    Tiempo propuesto (Días)
                                </div>
                                <div onClick={handleClickTiempo}  className='border bg-gray-300 border-gray-200 w-full h-[30%] mt-4  grid place-content-center cursor-pointer'>
                                    {tiempo1I}
                                </div>
                                {activoTiempo && 
                                    <div className='mt-[55px] z-50 absolute top-60 left-3/5 max-h-24 overflow-auto '>
                                    {dataTiempoHistoria.map((el)=>{
                                        const {id, tiempo} = el
                                        return <div key={id} onClick={()=>tiempo1h(id,tiempo)} className='w-[123px] text-center bg-gray-50 hover:bg-gray-300 cursor-pointer pl-6'>
                                            {tiempo}
                                        </div>
                                    })}
                                    </div>
                                }

                            </article>
                                }
                                    




                                    <article className=' w-1/3 h-full px-2'>
                                        <div className='h-[40%]  grid place-content-center text-center'>
                                            Peso de discrepancia (%)
                                        </div>
                                        <div onClick={handleClickPeso} className='border border-gray-200 w-full h-[30%] mt-2  grid place-content-center cursor-pointer'>
                                            {peso1I}
                                        </div>
                                        {activoPeso && 
                                            <div className='mt-[55px] z-50 absolute top-60 left-3/5 max-h-24 overflow-auto '>
                                            {dataPesoHistoria.map((el)=>{
                                                const {id, nombrePeso} = el
                                                return <div key={el.id} onClick={()=>peso1h(id,nombrePeso)} className='w-[123px] text-center bg-gray-50 hover:bg-gray-300 cursor-pointer pl-6'>
                                                    {nombrePeso}
                                                </div>
                                            })}
                                            </div>
                                        }
                                    </article>
                                </section>
                            </article>
















                                <article className='grid grid-rows-2 pb-1 mb-4'>
                                <label  className='flex content-center'  htmlFor=""> <div className='mr-1'><input type="checkbox" onChange={(e)=>setChecked2(!checked2)}  /></div>Discrepancia 2:</label>
                                <div className={`pl-3 h-8 rounded-md ${checked2 ? 'bg-gray-100': 'bg-gray-300'} bg-gray-100 border border-gray-200 cursor-pointer  grid content-center`} onClick={handleClickVerNuevasTareas2}>
                                    {discrepancia2I}
                                </div>
                                {activoDiscrepancia2 &&
                                    <div className='mt-[170px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                                
                                {checked2 &&
                                    <div>
                                        {dataDiscrepanciaPo.map((el)=>{
                                        const {id, discrepancia} = el
                                                return  (<div onClick={()=>discrepancia2h(id,discrepancia)} className='w-[678px] cursor-pointer ml-2 h-10 bg-violet-50 hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                    {discrepancia}
                                            </div>)
                                            })}
                                    </div>
                                    } 
                                    </div>
    
                                    }
                                    <div className='grid grid-rows-2 h-14'>
                                        <label htmlFor="">Descripción</label>
                                        {checked2 ?
                                            <input name='discrepancia2'  onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2' type="text" />: <input name='discrepancia2' readOnly onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2 bg-gray-300' type="text" />
                                        
                                        }
                                    </div>
                                </article>















                                <article className='grid grid-rows-2 pb-1 mb-4'>
                                <label  className='flex content-center'  htmlFor=""> <div className='mr-1'><input type="checkbox" onChange={(e)=>setChecked3(!checked3)} /></div>Discrepancia 3:</label>
                                <div className={`pl-3 h-8 rounded-md ${checked3 ? 'bg-gray-100': 'bg-gray-300'} bg-gray-100 border border-gray-200 cursor-pointer  grid content-center`} onClick={handleClickVerNuevasTareas3}>
                                    {discrepancia3I}
                                </div>
                                {activoDiscrepancia3 &&
                                    <div className='mt-[315px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                     {checked3 &&

                                     <div>
                                        {dataDiscrepanciaPo.map((el)=>{
                                        const {id, discrepancia} = el
                                                return  (<div onClick={()=>discrepancia3h(id,discrepancia)} className='w-[678px] cursor-pointer ml-2 h-10 bg-violet-50 hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                    {discrepancia}
                                            </div>)
                                            })}
                                     </div>
                                     
                                     }           
                                    
                                    </div>
    
                                    }
                                    <div className='grid grid-rows-2 h-14'>
                                        <label htmlFor="">Descripción</label>
                                        {checked3 ?
                                            <input name='discrepancia3'  onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2' type="text" />: <input name='discrepancia3' readOnly onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2 bg-gray-300' type="text" />
                                        
                                        }
                                    </div>
                                </article>
















                                <article className='grid grid-rows-2 pb-1 mb-4'>
                                <label  className='flex content-center'  htmlFor=""> <div className='mr-1'><input type="checkbox" onChange={(e)=>setChecked4(!checked4)} /></div>Discrepancia 4:</label>
                                <div className={`pl-3 h-8 rounded-md ${checked4 ? 'bg-gray-100': 'bg-gray-300'} bg-gray-100 border border-gray-200 cursor-pointer  grid content-center`} onClick={handleClickVerNuevasTareas4}>
                                    {discrepancia4I}
                                </div>
                                {activoDiscrepancia4 &&
                                    <div className='mt-[460px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                    {checked4 && 
                                        <div>
                                            {dataDiscrepanciaPo.map((el)=>{
                                            const {id, discrepancia} = el
                                                    return  (<div onClick={()=>discrepancia4h(id,discrepancia)} className='w-[678px] cursor-pointer ml-2 h-10 bg-violet-50 hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                        {discrepancia}
                                                </div>)
                                                })}
                                        </div>
                                    
                                    }        
                                    
                                    </div>
    
                                    }
                                    
                                        <div className='grid grid-rows-2 h-14 pb-2'>
                                            <label htmlFor="">Descripción</label>
                                            {checked4 ? 
                                            
                                            <input name='discrepancia4'  onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2' type="text" />: <input name='discrepancia4' readOnly onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2 bg-gray-300' type="text" />}
                                            
                                        </div>
        
                                    
                                </article>







                            </main>
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
                        {discrepancia1 === '-' && discrepancia2  === '-' && discrepancia3  === '-' && discrepancia4  === '-'  && descripcion1  === '-' && descripcion2  === '-' && descripcion3  === '-'  && descripcion4  === '-' &&
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