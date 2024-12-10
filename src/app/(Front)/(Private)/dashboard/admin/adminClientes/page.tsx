import { logicaTabla } from "@/app/(Front)/React/Components/Tablas/logicaTabla";
import ComAdmin from "../[Components]/ComAdmin";
import { logicaTraerIdYres } from "../../cliente/[Funciones]/logicaTraerIdYRes";

const page = async() => {   

  const {id, res}= await logicaTraerIdYres()

  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Clientes'
      url = '12b87914-ed8c-4411-931e-7b9b567d7117'
      id= {id}
      res={res}
    />
  )
}

export default page