'use client'

import { dataClientes } from '@/app/(Front)/React/Utils/dataClientes'
//import { dataDiscrepancias } from '@/app/(Front)/React/Utils/dataDiscrepancias'

import {useState} from 'react'
import Link from "next/link";
import { dataDiscrepanciaPo } from '@/app/(Front)/React/Utils/dataDiscrepanciaPo';
import { updateData } from '@/app/(Front)/React/Fetch/updateData';
//import { dataDiscrepanciasPo } from '@/app/(Front)/React/Utils/dataDisprepanciasPo';
//import { dataDiscrepanciasPo } from '@/app/(Front)/React/Utils/dataDisprepanciasPo'

const page = () => {

    const [activoDiscrepancia, setActivoDiscrepancia] = useState(false)
    const [activoDiscrepancia2, setActivoDiscrepancia2] = useState(false)
    const [activoDiscrepancia3, setActivoDiscrepancia3] = useState(false)
    const [activoDiscrepancia4, setActivoDiscrepancia4] = useState(false)

    // inicial
    const [discrepancia1I, setDiscrepancia1I] = useState('Tiempo')
    const [discrepancia2I, setDiscrepancia2I] = useState('Tiempo')
    const [discrepancia3I, setDiscrepancia3I] = useState('Tiempo')
    const [discrepancia4I, setDiscrepancia4I] = useState('Tiempo')

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

    const status = 'Retornada'
    const id = "580e0e9d-b13c-40d7-9f1e-51710c44f465"

    // if(!discrepancia1Nombre === '-' || !discrepancia2Nombre  === '-' || !discrepancia3Nombre  === '-' || !discrepancia4Nombre  === '-'  || !descripcion1  === '-' || !descripcion2  === '-' || !descripcion3  === '-'  || !descripcion4  === '-'){
    //     console.log('as');
        
    // }
    const nombreHistoria = 'desde el front'

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
        
        const data = {nombreHistoria, status, discrepancia1, descripcion1, discrepancia2, descripcion2, discrepancia3, descripcion3, discrepancia4, descripcion4}
        console.log(data);
        //console.log('id:', id);
        
        
        updateData({ruta, id, data})
        location.reload();
        alert('Se enviaron las dicrepancias')
    }

    const handleClickAgregarAlPb =(e)=>{
        e.preventDefault()
        console.log('assssssssssssssss')
        
    }


  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
            <header className='w-full h-[5%] bg-white py-4 pl-4'>
                Dashboard {'>'} Product Owner {'>'} <Link className='hover:underline' href={'/dashboard/nuevasTareasPo'}>Nuevas Tareas</Link> {'>'} Ver
            </header>
            <form  className='w-full h-[95%] '>
                   <div className='w-[100%] h-[90%]  flex px-5 '>
                   <section className='w-full h-full pt-10 px-7'>
                    <header className='w-full h-[7%]  grid place-content-center'> 
                        Discrepancias
                    </header>
                        <main className='w-full h-[90%] grid grid-rows-4  py-2'>
                            <article className='grid grid-rows-2 mb-4'>
                            <label  className='flex content-center'  htmlFor=""> <div className='mr-1'><input type="checkbox"  /></div>Discrepancia 1:</label>
                                <div className=" pl-3 h-8 rounded-md bg-gray-100 border border-gray-200 cursor-pointer  grid content-center" onClick={handleClickVerNuevasTareas1}>
                                        {discrepancia1I}
                                </div>
                                {activoDiscrepancia &&
                                    <div className='mt-[28px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                                
                                    {dataDiscrepanciaPo.map((el)=>{
                                        const {id, discrepancia} = el
                                                return  (<div onClick={()=>discrepancia1h(id,discrepancia)} className='w-[678px] cursor-pointer ml-2 h-10 bg-violet-50 hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                    {discrepancia}
                                            </div>)
                                            })}
                                    </div>
    
                                    }
                                    <div className='grid grid-rows-2 h-14'>
                                        <label htmlFor="">Descripcion</label>
                                        <input name='discrepancia1' onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2' type="text" />
                                    </div>
                                </article>
                                <article className='grid grid-rows-2 pb-1 mb-4'>
                                <label  className='flex content-center'  htmlFor=""> <div className='mr-1'><input type="checkbox"  /></div>Discrepancia 2:</label>
                                <div className=" pl-3  h-8 rounded-md bg-gray-100 border border-gray-200 cursor-pointer  grid content-center" onClick={handleClickVerNuevasTareas2}>
                                    {discrepancia2I}
                                </div>
                                {activoDiscrepancia2 &&
                                    <div className='mt-[170px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                                
                                    {dataDiscrepanciaPo.map((el)=>{
                                        const {id, discrepancia} = el
                                                return  (<div onClick={()=>discrepancia2h(id,discrepancia)} className='w-[678px] cursor-pointer ml-2 h-10 bg-violet-50 hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                    {discrepancia}
                                            </div>)
                                            })}
                                    </div>
    
                                    }
                                    <div className='grid grid-rows-2 h-14'>
                                        <label htmlFor="">Descripcion</label>
                                        <input name='discrepancia2' onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2' type="text" />
                                    </div>
                                </article>
                                <article className='grid grid-rows-2 pb-1 mb-4'>
                                <label  className='flex content-center'  htmlFor=""> <div className='mr-1'><input type="checkbox"  /></div>Discrepancia 3:</label>
                                <div className=" pl-3 h-8 rounded-md bg-gray-100 border border-gray-200 cursor-pointer  grid content-center" onClick={handleClickVerNuevasTareas3}>
                                    {discrepancia3I}
                                </div>
                                {activoDiscrepancia3 &&
                                    <div className='mt-[315px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                                
                                    {dataDiscrepanciaPo.map((el)=>{
                                        const {id, discrepancia} = el
                                                return  (<div onClick={()=>discrepancia3h(id,discrepancia)} className='w-[678px] cursor-pointer ml-2 h-10 bg-violet-50 hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                    {discrepancia}
                                            </div>)
                                            })}
                                    </div>
    
                                    }
                                    <div className='grid grid-rows-2 h-14'>
                                        <label htmlFor="">Descripcion</label>
                                        <input name='discrepancia3' onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2' type="text" />
                                    </div>
                                </article>
                                <article className='grid grid-rows-2 pb-1 mb-4'>
                                <label  className='flex content-center'  htmlFor=""> <div className='mr-1'><input type="checkbox"  /></div>Discrepancia 4:</label>
                                <div className=" pl-3 h-8 rounded-md bg-gray-100 border border-gray-200 cursor-pointer  grid content-center" onClick={handleClickVerNuevasTareas4}>
                                    {discrepancia4I}
                                </div>
                                {activoDiscrepancia4 &&
                                    <div className='mt-[460px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                                
                                    {dataDiscrepanciaPo.map((el)=>{
                                        const {id, discrepancia} = el
                                                return  (<div onClick={()=>discrepancia4h(id,discrepancia)} className='w-[678px] cursor-pointer ml-2 h-10 bg-violet-50 hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                    {discrepancia}
                                            </div>)
                                            })}
                                    </div>
    
                                    }
                                    
                                        <div className='grid grid-rows-2 h-14 pb-2'>
                                            <label htmlFor="">Descripcion</label>
                                            <input name='discrepancia4' onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2' type="text" />
                                        </div>
        
                                    
                                </article>
                            </main>
                        </section>







                        



                   </div>
                   <div className='w-full h-[10%]  flex justify-end'>
                        <article className='w-[15%]  grid place-items-center'>
                            <button onClick={handleClickEnviarDiscrepancia} className='w-[95%] h-[60%] bg-violet-500 rounded text-white font-semibold hover:bg-violet-600'>
                                Enviar discrepancias
                            </button>
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