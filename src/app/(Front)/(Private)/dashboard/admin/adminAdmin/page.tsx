import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'

const page = () => {
  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Administración'
      url = '8bf1bf40-b55e-4000-a0c5-8e1b8e0ba477'
    />
  )
}

export default page