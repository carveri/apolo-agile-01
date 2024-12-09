import { logicaTabla } from "@/app/(Front)/React/Components/Tablas/logicaTabla";
import ComAdmin from "../[Components]/ComAdmin";
//import { useHistoriaAdmin } from "../../../[stores]/adminStore";

const page = () => {   

  // const {usuarios, getUsuarios} = useHistoriaAdmin()
  // const  url = '8bf1bf40-b55e-4000-a0c5-8e1b8e0ba477'
  // await getUsuarios(url)

  // //const {usuarios, getUsuarios} = useHistoriaAdmin()
  
  // console.log('usua:', usuarios);

  return (
    <ComAdmin
      logicaTabla={logicaTabla}
      nombre = 'Clientes'
      url = '12b87914-ed8c-4411-931e-7b9b567d7117'
      empresaId = 'e5e58171-f26d-4e8d-8600-264ad4c40032'
    />
  )
}

export default page