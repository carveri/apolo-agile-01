import { logicaTabla } from '@/app/(Front)/React/Components/Tablas/logicaTabla'
import ComAdmin from '../[Components]/ComAdmin'

const page = () => {
return (
    <ComAdmin
    logicaTabla={logicaTabla}
    nombre = 'Product Owner'
    url = '2cbca9d4-f9c2-4f8e-a8e3-a04212e901d6'
    />
  )
}

export default page