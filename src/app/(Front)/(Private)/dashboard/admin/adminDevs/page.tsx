import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'

const page = () => {
  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Devs'
      url = '68b9247a-5884-46e7-a66f-3341b640469b'
    />
  )
}

export default page