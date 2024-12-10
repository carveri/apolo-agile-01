import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'
import { logicaTraerIdYres } from '../../cliente/[Funciones]/logicaTraerIdYRes'
import { Metadata } from 'next';

export const metadata: Metadata= {
  title: "Administración - Admins",
  description: "ERP para StartApps",
};

const page = async() => {

  const {id, res}= await logicaTraerIdYres()
 
  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Administradores'
      url = '8bf1bf40-b55e-4000-a0c5-8e1b8e0ba477'
      id= {id}
      res={res}
    />
  )
}

export default page