'use client'

import { useHistoriaPo } from "@/app/(Front)/(Private)/[stores]/poStore"

const page = () => {

    const { idHistoria} = useHistoriaPo()

    console.log('idcontra:', idHistoria);
    

  return (
    <div>aca esta el detalle de la contraoferta</div>
  )
}

export default page