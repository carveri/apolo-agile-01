import ComClienteResolucionTarea from '../../[Componentes]/ClienteResolucionTarea/ComClienteResolucionTarea/ComClienteResolucionTarea';
import { logicaTraerIdYres } from '../../[Funciones]/logicaTraerIdYRes';



const page = async() => {

  const {id, res}= await logicaTraerIdYres()
  
  return (
    <ComClienteResolucionTarea
    id={id}
    resul={res}
    />
  )
}

export default page