'use client'

import React, { useState } from 'react'
import MiBoton from '../MiBoton/MiBoton'
import { IUsuarios } from '@/app/Interfaces/IGeneral'
import { deleteData } from '../../Fetch/deleteData'
import { useRouter } from "next/navigation";

interface ITd{
  td1:string
  td2:string
  td3:string
  td4:string
  td5:string
  td6:string
}

interface ITablaAdmin {
  logicaTabla: ITd
  usuarios: IUsuarios[]
}

const Tabla = ({logicaTabla, usuarios, activarModal, setActivarModal, isModalOpen, setIsModalOpen, setIdActualizar, idActualizar, setUsuarioActualizado, handleClickTablaAdmin}) => {


    const router = useRouter()

    const {td1, td2, td3, td4, td5, td6} = logicaTabla

    //console.log(usuarios);

   // const [activarEli, setActivarEli] = useState(false)

   
    

  return (
   


    <table className={`border border-gray-200   w-[100%]  `}>
            <thead className=''>
              <tr className='h-12 bg-gray-100 '>
                <td className='w-[7%] text-center'>{td1}</td>
                <td className='w-[8%] text-center'>{td2}</td>
                <td className='w-[8%] text-center'>{td3}</td>
                <td className='w-[10%] text-center'>{td4}</td>
                <td className='w-[10%] text-center'>{td5}</td>
                <td className='w-[15%] text-center'>{td6}</td>
                <td className='w-[2%] text-center'></td>
                <td className='w-[6%] text-center'></td>
                <td className='w-[6%] text-center'></td>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((el, items)=>{
                  return <tr key={el.id} className='border border-gray-200 h-14  cursor-pointer '>
                    <td className='text-center'>
                      {items + 1}
                    </td>
                    <td className='text-center'>
                      {el.primerNombre}
                    </td>
                    <td className='text-center'>
                      {el.apellidoPaterno}
                    </td>
                    <td className='text-center'>
                      {el?.cargo?.departamento?.area?.nombreArea}
                    </td>
                    <td className='text-center'>
                    {el?.cargo?.departamento?.nombreDepartamento}
                    </td>
                    <td className='text-center pr-3'>
                      {el?.cargo?.nombreCargo}
                    </td>
                    {isModalOpen ? 
                      <>
                      <td className='w-[3%] h-4 py-3 mr-3 pr-4 text-tamañoLetraChica '>
                          <button name='ver' disabled  onClick={(e)=>handleClickTablaAdmin(e, el.id)}  className=' rounded bg-cyan-500 w-full h-full text-white font-semibold'>
                            Ver
                          </button>
                      </td>
                      <td className='w-[6%] h-4 py-3  mr-3   pr-4 text-tamañoLetraChica'>
                          <button name='actualizar' disabled onClick={(e)=>handleClickTablaAdmin(e, el.id)} className='rounded bg-violet-500 w-full h-full text-white font-semibold'>
                            Actualizar
                          </button>
                      </td>
                      <td className='w-[5%] h-4 py-3 mr-3  pr-8 text-tamañoLetraChica'>
                          <button name='eliminar' disabled onClick={(e)=>handleClickTablaAdmin(e, el.id)} className=' rounded bg-red-500 w-full h-full text-white font-semibold'>
                            Eliminar
                          </button>
                      </td>
                      </>:
                    <>
                    <td className='w-[3%] h-4 py-3 mr-3 pr-4 text-tamañoLetraChica'>
                        <button name='ver'   onClick={(e)=>handleClickTablaAdmin(e, el.id)} className='rounded bg-cyan-500 w-full h-full text-white font-semibold'>
                          Ver
                        </button>
                    </td>
                    <td className='w-[6%] h-4 py-3  mr-3   pr-4 text-tamañoLetraChica'>
                        <button name='actualizar' onClick={(e)=>handleClickTablaAdmin(e, el.id)} className='rounded bg-violet-500 w-full h-full text-white font-semibold'>
                          Actualizar
                        </button>
                    </td>
                    <td className='w-[5%] h-4 py-3 mr-3  pr-8 text-tamañoLetraChica'>
                        <button name='eliminar' onClick={(e)=>handleClickTablaAdmin(e, el.id)} className=' rounded bg-red-500 w-full h-full text-white font-semibold'>
                          Eliminar
                        </button>
                    </td>
                    </>
                    
                    }
                    
                    
                  </tr>
                })}
            </tbody>
        </table>
  )
}

export default Tabla