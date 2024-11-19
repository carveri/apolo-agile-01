import React from 'react'


const Tabla = ({logicaTabla, usuarios}) => {


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
                    <td className=''>
                      <button className='bg-violet-100 border border-gray-200 w-[50%] h-[80%] py-1 px-3 rounded hover:bg-violet-200'>
                        Ver
                      </button>
                    </td>
                    <td className=''>
                      <button className='bg-blue-200 border border-gray-300 w-[70%] h-[80%] py-1 rounded hover:bg-blue-300 hover:text-white '>
                        Actualizar
                      </button>
                    </td>
                    <td className=''>
                      <button className='bg-red-600 border border-white  w-[80%] h-[90%] text-white py-1 rounded hover:bg-red-700'>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                })}
            </tbody>
        </table>
  )
}

export default Tabla