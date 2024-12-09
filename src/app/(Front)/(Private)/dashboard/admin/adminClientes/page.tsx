import { logicaTabla } from "@/app/(Front)/React/Components/Tablas/logicaTabla";
import ComAdmin from "../[Components]/ComAdmin";

const page = () => {    
  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Clientes'
      url = '12b87914-ed8c-4411-931e-7b9b567d7117'
    />
  )
}

export default page