import ComPageHistoriasAceptadas from "../../[Componentes]/ClienteHistoriasAceptadas/ComPageHistoriasAceptadas/ComPageHistoriasAceptadas";
import { logicaTraerIdYres } from "../../[Funciones]/logicaTraerIdYRes";

const page = async() => {

  const {id, res}= await logicaTraerIdYres()

  return (
    <ComPageHistoriasAceptadas
      id={id}
      resul={res}
    />
  )
}

export default page