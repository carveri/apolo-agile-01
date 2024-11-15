'use client'

import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import {useState, useEffect} from 'react'
import { format } from "date-fns";
import { dataTiempoHistoria } from '@/app/(Front)/React/Utils/dataTiempoHistoria';
//import { useHistoriaPo } from '../../../[stores]/poStore';
import { updateData } from '@/app/(Front)/React/Fetch/updateData';
import { deleteData } from '@/app/(Front)/React/Fetch/deleteData';
import {useRouter} from "next/navigation";
import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore';

const page = () => {

  const router = useRouter()

  const { idHistoria} = useHistoriaPo()

  const [historia, setHistoria] = useState({})

  // estados de los inputs
  const [ptiempo, setPtiempo] = useState(0)
  const [pPresupuesto, setPPresupuesto] = useState(0)
  const [pEquipo, setPEquipo] = useState(0)

  //const {historiaStatus, getHistoriaStatus} = useHistoriaPo
  // useEffect(()=>{
  //   cambiarIdHistoria()
  // }, [])


  console.log('idHistopintar:', idHistoria);
  

  useEffect(()=>{
    //cambiarIdHistoria()
    const traerHistorias = async()=>{
      const ruta = 'historia'
      const url = idHistoria
      const res = await getDataLista({ruta, url})
      setHistoria(res)
    }
    traerHistorias()
    
  }, [])

  console.log('histo unica:', historia);


  // activos
  const [tiempoActivo, setTiempoActivo] = useState(false)
  const [presupuestoActivo, setPresupuestoActivo] = useState(false)
  const [equipoActivo, setEquipoActivo] = useState(false)
  
  const handleClickTiempo =()=>{
    setTiempoActivo(!tiempoActivo)
  }

  const handleClickPresupuesto =()=>{
    setPresupuestoActivo(!presupuestoActivo)
  }

  const handleClickEquipo = ()=>{
    setEquipoActivo(!equipoActivo)
  }

  const {tiempoHistoria, presupuestoHistoria, equipo3, peso1, peso2, peso3} = historia
  //const of1 = 

  const calculoPesoOferta =(oferta1 = 0, oferta2 = 0  , peso = 0 )=>{
    // oferta1 es la que me mando el po
    // oferta2 es la que realiza el cliente (la contraoferta)
    // el peso es el porcentaje de importancia que le dio el po
    const res = peso/oferta1
      const nuevo = res * ((oferta1) - (oferta1-oferta2))
      return nuevo

  }

  const limite = 80
  const limiteInferior = 40

  const handleChangeVerResuTarea =(e)=>{
    e.preventDefault()
    if(e.target.name === 'tiempo'){
      setPtiempo(e.target.valueAsNumber)
    }
    else if(e.target.name === 'presupuesto'){
      setPPresupuesto(e.target.valueAsNumber)
    }
    else if(e.target.name === 'equipo'){
      setPEquipo(e.target.valueAsNumber)
    }
    else {
      console.log('sd');
      
    }
  }

    let pesoTiempo = calculoPesoOferta(tiempoHistoria, ptiempo, peso1) 
    let pesoPresupuesto = calculoPesoOferta(presupuestoHistoria, pPresupuesto, peso2) 
    let pesoEquipo = 0
    const pesoTotal =  pesoTiempo + pesoPresupuesto
  

  const handleClickAgregarAlProductBacklog =(e)=>{
    const status = 'Aceptada'
    // renombrar los estados 
    const tiempoHistoria = ptiempo
    const presupuestoHistoria = pPresupuesto
    const equipo3 = pEquipo
    const data = {tiempoHistoria, presupuestoHistoria, equipo3, status}
    const ruta = 'historia'
    const id = idHistoria
    updateData({data, ruta, id})
    alert('Se guardo la historia en el PB')
  }

  const handleClickEnviarContraoferta =()=>{
    const status = 'ContraOferta'
    // renombrar los estados 
    const tiempoHistoria = ptiempo
    const presupuestoHistoria = pPresupuesto
    const equipo3 = pEquipo
    const data = {tiempoHistoria, presupuestoHistoria, equipo3, status}
    const ruta = 'historia'
    const id = idHistoria
    updateData({data, ruta, id})
    alert('Se envio la controferta al po')
    
  }

  const handleClickEliminarTareaCliente=()=>{
    const ruta = 'historia'
    const url = idHistoria
    deleteData({ruta, url})
    alert('La tarea se borro correctamente')
    router.push('/dashboard/cliente/clienteResolucionTarea')
    
  }


  if(equipo3 === 0 ){
      pesoEquipo = 0
  }
  else if(tiempoHistoria === 0){
      pesoTiempo = 0
  }
  else if(presupuestoHistoria === 0){
      pesoEquipo = 0
  }
  


 

  
  
  
  return (
    <div className='w-full h-full '>
        <header className='w-full h-[5%] bg-white py-4 pb-10 pl-4 '>
            Dashboard {'>'} Clientes {'>'} Recursos Humanos {'>'} Resolucion Tarea {'>'} Ver
          </header>
          <main className='w-full h-[95%] '>
            <header className='bg-gray-100 h-12 grid place-content-center '>
              Resolucion de Historia retornada
            </header>
            <table className='border border-gray-200 h-[40%]  w-[97%] mt-5  ml-6'>
                    <thead>
                      <tr className='h-14'>
                        <td className='w-[7%]  pl-3'>Numero</td>
                        <td className='w-[10%] pl-8'>Nombre Historia</td>
                        <td className='w-[13%] text-center'>Discrepancias</td>
                        <td className='w-[10%] text-center'>Propuesta del Po</td>
                        
                        <td className='w-[10%] text-center'>Nueva oferta</td>
                        <td className='w-[10%] text-center'>Peso Oferta</td>
                        <td className='w-[10%] text-center'>Peso Discrepancia (%)</td>
                        <td className='w-[27%] text-center'>Descripciónes</td>
                        
                      </tr>
                    </thead>
                    <tbody>
                     <tr className='border border-gray-200 h-14 [&tr>]  cursor-pointer w-full '>
                          <td className='pl-8 h-20'>
                            1
                          </td>
                          <td className='pl-8'>
                            {historia?.nombreHistoria}
                          </td>
                          
                         
                          <td className='pl-8 '>
                            <div className='h-20 grid place-content-center'>
                              {historia?.discrepancia1} (Dias)
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.discrepancia2} (Clp)
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.discrepancia3} (personas)
                            </div>
                            

                          </td>
                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center'>
                              {historia?.tiempo1}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.presupuesto2}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.equipo3}
                            </div>

                          </td>
                          <td>
                              <div className='h-20 grid place-content-center'>
                                <input name='tiempo'  onChange={handleChangeVerResuTarea} type="number" className='rounded w-24 h-8 pl-10 border border-gray-200 ' placeholder='4'/>
                              </div>
                              <div className='h-20 grid place-content-center'>
                                <input name='presupuesto'  onChange={handleChangeVerResuTarea}  type="number" className='rounded w-24 h-8 pl-3 border border-gray-200' placeholder='$100.000'/>
                              </div>
                              <div className='h-20 grid place-content-center'>
                                <input name='equipo'  onChange={handleChangeVerResuTarea}  type="number" className='rounded w-24 h-8 pl-5 border border-gray-200' placeholder='43434'/>
                              </div>
                              
                            
                          </td>


                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center font-bold'>
                            {Math.round(pesoTiempo)}
                            </div>
                            <div className='h-20 grid place-content-center font-bold'>
                            {Math.round(pesoPresupuesto)}
                            </div>
                            <div className='h-20 grid place-content-center font-bold'>
                            {Math.round(pesoEquipo)}
                            </div>
                          </td>
                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center'>
                            {historia?.peso1}
                            </div>
                            <div className='h-20 grid place-content-center'>
                            {historia?.peso2}
                            </div>
                            <div className='h-20 grid place-content-center'>
                            {historia?.peso3}
                            </div>
                          </td>
                          
                          
                          
                          
                          <td className='pl-8 '>
                            <div className='h-20 grid place-content-center'>
                              {historia?.descripcion1}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.descripcion2}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.descripcion3}
                            </div>
                          </td>
                          

                          
                          
                          
                          
                          
                          
                          
                          
                        </tr>
                      
                    </tbody>
                </table>
                <div className='w-full h-[30%]'>

                </div>
                <div className='w-full h-[10%]  grid justify-end pt-7 pr-7 font-bold text-lg'>
                  Total peso de oferta: {Math.round(pesoTotal)}
                </div>
                <div className='w-full h-[10%]  flex justify-end gap-x-2 pr-3'>
                  {pesoTotal > limite &&
                  <button onClick={handleClickAgregarAlProductBacklog} className='bg-colorBotonAceptar w-60 rounded h-12 text-white font-semibold'>
                    Agregar Al Product Backlog
                  </button>
                  
                  }
                  {pesoTotal >limiteInferior && pesoTotal <=limite &&
                    <button onClick={handleClickEnviarContraoferta} className='bg-colorBotonActualizar w-60 rounded h-12 text-white font-semibold'>
                      Enviar Contraoferta
                    </button>
                  
                  }
                  <button onClick={handleClickEliminarTareaCliente} className='bg-colorBotonEliminar w-60 rounded h-12 text-white font-semibold'>
                    Eliminar Tarea
                  </button>
                </div>
          </main>
    </div>
  )
}

export default page