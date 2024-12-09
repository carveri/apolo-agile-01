import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'

const page = () => {
  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Scrum Master'
      url = 'a73e8ba6-6e6b-4cd7-90a4-925101ea7ffa'
      empresaId = 'e5e58171-f26d-4e8d-8600-264ad4c40032'
    />
  )
}

export default page