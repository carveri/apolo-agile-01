'use client'

import { CSS } from "@dnd-kit/utilities";
import { useSortable} from "@dnd-kit/sortable";
import { ITablaPoProductBacklog } from "@/app/Interfaces/IPoProductBacklog";

const TablaPo = ({id, nombreHistoria, updatedAt2, updatedPintar, tiempoHistoria, user, presupuestoHistoria, status, index, createdAt, updatedAt, horaAt}:ITablaPoProductBacklog) => {
    
  
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: id})
  
    return (
        <tr  style={{transform: CSS.Transform.toString(transform), transition}} ref={setNodeRef} {...attributes} {...listeners}  className='border border-gray-200 h-14  cursor-move hover:bg-colorHoverLista'>
                  <td className='text-center text-blue-500 font-semibold'>
                    {index + 1}
                  </td>
                  <td className='text-center'>
                    {nombreHistoria}
                  </td>
                  <td className='text-center'>
                    {user?.cargo?.nombreCargo}
                  </td>
                  
                  <td className='text-center'>
                    {updatedAt2}
                  </td>
                  <td className='text-center'>
                    {updatedPintar}
                  </td>
                  <td className='text-center text-colorTextoAceptada'>
                    {status}
                  </td>
                  <td className='text-center'>
                    {tiempoHistoria}
                  </td>
                  <td className='text-center'>
                    {presupuestoHistoria}
                  </td>
                  <td className='text-center'>
                    11
                  </td>
                </tr>
  )
}

export default TablaPo