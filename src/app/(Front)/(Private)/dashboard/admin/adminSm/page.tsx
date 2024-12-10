import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'
import { logicaTraerIdYres } from '../../cliente/[Funciones]/logicaTraerIdYRes'
import { Metadata } from 'next';


export const metadata: Metadata= {
  title: "Administración - SM",
  description: "ERP para StartApps",
};

const page = async() => {

  const {id, res}= await logicaTraerIdYres()

  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Scrum Master'
      url = 'a73e8ba6-6e6b-4cd7-90a4-925101ea7ffa'
      id= {id}
      res={res}
    />
  )
}

export default page