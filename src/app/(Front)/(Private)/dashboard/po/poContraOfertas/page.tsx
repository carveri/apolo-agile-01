import ComPoContraOferta from '../[Componentes]/ComPoContraOferta/ComPoContraOferta';
import { logicaTraerIdYres } from '../[Funciones]/logicaTraerIdYRes';

const page = async() => {

  const {id, res}= await logicaTraerIdYres()

  return (
    <ComPoContraOferta 
      nombre='Product Owner'
      id={id}
      resul={res}

    />
  )
}

export default page