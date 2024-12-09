import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'

const page = () => {
  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Administración'
      url = '8bf1bf40-b55e-4000-a0c5-8e1b8e0ba477'
      empresaId = 'e5e58171-f26d-4e8d-8600-264ad4c40032'
    />
  )
}

export default page