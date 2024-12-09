import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'

const page = () => {
  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Devs'
      url = '68b9247a-5884-46e7-a66f-3341b640469b'
      empresaId = 'e5e58171-f26d-4e8d-8600-264ad4c40032'
    />
  )
}

export default page