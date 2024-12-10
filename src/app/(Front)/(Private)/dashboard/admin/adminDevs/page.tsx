import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'
import { logicaTraerIdYres } from '../../cliente/[Funciones]/logicaTraerIdYRes'

const page = async() => {

  const {id, res}= await logicaTraerIdYres()
 

  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Devs'
      url = '68b9247a-5884-46e7-a66f-3341b640469b'
      id= {id}
      res={res}
    />
  )
}

export default page