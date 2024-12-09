import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'

const page = () => {
return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Product Owner'
      url = '2cbca9d4-f9c2-4f8e-a8e3-a04212e901d6'
      empresaId = 'e5e58171-f26d-4e8d-8600-264ad4c40032'
    />
  )
}

export default page