'use client'

import { CSS } from "@dnd-kit/utilities";
import { useSortable} from "@dnd-kit/sortable";

const TablaPo = ({id, nombreHistoria, updatedAt2, updatedPintar, createdAt, updatedAt,  horaAt, tiempoHistoria, presupuestoHistoria, status, index}) => {
    
  
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: id})
  
    return (
        <tr  style={{transform: CSS.Transform.toString(transform), transition}} ref={setNodeRef} {...attributes} {...listeners}  className='border border-gray-200 h-14  cursor-pointer hover:bg-colorHoverLista'>
                  <td className='pl-8'>
                    {index + 1}
                  </td>
                  <td >
                    {nombreHistoria}
                  </td>
                  
                  <td>
                    {updatedAt2}
                  </td>
                  <td className='pl-8'>
                    {updatedPintar}
                  </td>
                  <td>
                    {status}
                  </td>
                  <td className='pl-8'>
                    {tiempoHistoria}
                  </td>
                  <td className='pl-8'>
                    {presupuestoHistoria}
                  </td>
                  <td>
                    11
                  </td>
                   <td className=' '>
                    <button className='bg-colorBotonVer grid place-content-center border border-gray-200 w-[50%] h-[80%] py-1 px-8 rounded hover:bg-violet-200'>
                      Ver
                    </button>
                  </td>
                 
                </tr>
  )
}

export default TablaPo