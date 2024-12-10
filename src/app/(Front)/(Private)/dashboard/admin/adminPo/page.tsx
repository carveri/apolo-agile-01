import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'
import { logicaTraerIdYres } from '../../cliente/[Funciones]/logicaTraerIdYRes'
import { Metadata } from 'next';

export const metadata: Metadata= {
  title: "Administración - PO",
  description: "ERP para StartApps",
};

const page = async() => {

  const {id, res}= await logicaTraerIdYres()

return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Product Owner'
      url = '2cbca9d4-f9c2-4f8e-a8e3-a04212e901d6'
      id= {id}
      res={res}
    />
  )
}

export default page