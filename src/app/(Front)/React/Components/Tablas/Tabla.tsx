import React from 'react'
import MiBoton from '../MiBoton/MiBoton'
import { IUsuarios } from '@/app/Interfaces/IGeneral'

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

const Tabla = ({logicaTabla, usuarios}:ITablaAdmin) => {


    const {td1, td2, td3, td4, td5, td6} = logicaTabla

  return (
    <table className='border border-gray-200   w-[98%] ml-8 '>
            <thead>
              <tr className='h-14'>
                <td className='w-[10%] pl-3'>{td1}</td>
                <td className='w-[12%]'>{td2}</td>
                <td className='w-[12%]'>{td3}</td>
                <td className='w-[15%]'>{td4}</td>
                <td className='w-[15%]'>{td5}</td>
                <td className='w-[15%]'>{td6}</td>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((el, items)=>{
                  return <tr key={el.id} className='border border-gray-200 h-14  cursor-pointer '>
                    <td className='pl-8'>
                      {items + 1}
                    </td>
                    <td >
                      {el.primerNombre}
                    </td>
                    <td>
                      {el.apellidoPaterno}
                    </td>
                    <td>
                      {el?.cargo?.departamento?.area?.nombreArea}
                    </td>
                    <td>
                    {el?.cargo?.departamento?.nombreDepartamento}
                    </td>
                    <td>
                      {el?.cargo?.nombreCargo}
                    </td>
                    
                    <td className='w-[4%] h-4 py-3 mr-3 pr-4 text-sm'>
                        <MiBoton
                          nombreBoton = 'Ver'  
                      />
                    </td>
                    <td className='w-[7%] h-4 py-3 mr-3   pr-4 text-sm'>
                        <MiBoton
                          nombreBoton = 'Actualizar'  
                      />
                    </td>
                    <td className='w-[7%] h-4 py-3 mr-3  pr-8 text-sm'>
                        <MiBoton
                          nombreBoton = 'Eliminar'  
                      />
                    </td>
                  </tr>
                })}
            </tbody>
        </table>
  )
}

export default Tabla