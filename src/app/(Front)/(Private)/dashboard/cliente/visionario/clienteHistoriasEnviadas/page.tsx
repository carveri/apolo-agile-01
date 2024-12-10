import ComPageHistoriasEnviadas from "../../[Componentes]/ClienteHistoriasEnviadas/ComPageHistoriasEnviadas/ComPageHistoriasEnviadas";
import { logicaTraerIdYres } from "../../[Funciones]/logicaTraerIdYRes";

const page = async() => {

  const {id, res}= await logicaTraerIdYres()

  return (
    <ComPageHistoriasEnviadas
      id={id}
      resul={res}
    />
  )
}

export default page