'use client'

import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import {useState, useEffect} from 'react'
import { format } from "date-fns";
import { dataTiempoHistoria } from '@/app/(Front)/React/Utils/dataTiempoHistoria';
//import { useHistoriaPo } from '../../../[stores]/poStore';
import { updateData } from '@/app/(Front)/React/Fetch/updateData';
import { useHistoriaPo } from '@/app/(Front)/(Private)/[stores]/poStore';

const page = () => {

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

  console.log('histo unica po contra:', historia);


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
  

  // const handleClickAgregarAlProductBacklog =(e)=>{
  //   const status = 'Aceptada'
  //   // renombrar los estados 
  //   const tiempoHistoria = ptiempo
  //   const presupuestoHistoria = pPresupuesto
  //   const equipo3 = pEquipo
  //   const data = {tiempoHistoria, presupuestoHistoria, equipo3, status}
  //   const ruta = 'historia'
  //   const id = idHistoria
  //   updateData({data, ruta, id})
  //   alert('Se guardo la historia en el PB')
  // }

  const handleClickAgregarAlProductBacklogContra =()=>{
    const status = 'Aceptada'
    const ruta = 'historia'
    const id = idHistoria
    const data = {status}
    updateData({data, ruta, id})
    alert('Se Guardo la tarea en el ProductBacklog')
    
  }

  const handleClickEnviarAlLiderTecnico=()=>{
    const status = 'LiderTecnico'
    const ruta = 'historia'
    const id = idHistoria
    const data = {status}
    updateData({data, ruta, id})
    alert('Se Envio la historia al lider tecnico')
    
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
            Dashboard {'>'} Product Owner {'>'} Resolucion Tarea {'>'} Ver
          </header>
          <main className='w-full h-[95%] '>
            <header className='bg-gray-100 h-12 grid place-content-center '>
              Resolucion de ContraOfertas
            </header>
            <table className='border border-gray-200 h-[40%]  w-[47%] mt-5   ml-[450px]'>
                    <thead>
                      <tr className='h-14'>
                        <td className='w-[7%]  pl-3'>Numero</td>
                        <td className='w-[10%] pl-8'>Nombre Historia</td>
                        <td className='w-[13%] text-center'>Discrepancias</td>
                        <td className='w-[10%] text-center'>Contraoferta del cliente</td>
                        
                        
                        
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
                            {/* <div className='h-20 grid place-content-center'>
                              {historia?.discrepancia3} (personas)
                            </div> */}
                            

                          </td>
                          <td className='pl-8'>
                            <div className='h-20 grid place-content-center'>
                              {historia?.tiempoHistoria}
                            </div>
                            <div className='h-20 grid place-content-center'>
                              {historia?.presupuestoHistoria}
                            </div>
                            {/* <div className='h-20 grid place-content-center'>
                              {historia?.equipo3}
                            </div> */}

                          </td>
                          

                          
                          
                          
                          
                          
                          
                          
                          
                        </tr>
                      
                    </tbody>
                </table>
                <div className='w-full h-[30%]'>

                </div>
                <div className='w-full h-[10%]  grid justify-end pt-7 pr-7 font-bold text-lg'>
                  
                </div>
                <div className='w-full h-[10%]  flex justify-end gap-x-2 pr-3'>
                
                  <button onClick={handleClickAgregarAlProductBacklogContra} className='bg-colorBotonAceptar w-60 rounded h-12 text-white font-semibold'>
                    Agregar Al Product Backlog
                  </button>
                  <button onClick={handleClickEnviarAlLiderTecnico} className='bg-colorBotonActualizar w-60 rounded h-12 text-white font-semibold'>
                    Enviar Al lider Tecnico
                  </button>
                </div>
          </main>
    </div>
  )
}

export default page