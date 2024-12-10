import ComPoNuevaTarea from "../[Componentes]/ComPoNuevaTarea/ComPoNuevaTarea";
import { logicaTraerIdYres } from "../[Funciones]/logicaTraerIdYRes";

const page = async() => {

  const {id, res}= await logicaTraerIdYres()

  return (
    <ComPoNuevaTarea
      nombre='Product Owner'
      id={id}
      resul={res}
    />
  )
}

export default page