import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'

const page = () => {
  return (
    <ComAdmin
    logicaTabla={logicaTabla}
    nombre = 'Scrum Master'
    url = 'a73e8ba6-6e6b-4cd7-90a4-925101ea7ffa'
    />
  )
}

export default page