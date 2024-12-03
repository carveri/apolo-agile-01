'use client'
import { useEffect } from 'react'
import { useHistoriaPo } from '../../../[stores]/poStore';
import { useRouter } from "next/navigation";
import ComPoContraOferta from '../[Componentes]/ComPoContraOferta/ComPoContraOferta';

const page = () => {


    const {getHistoriaContraOferta, historiaContraOferta, cambiarIdHistoria, idHistoria} = useHistoriaPo()


    useEffect(()=>{
      getHistoriaContraOferta()
    }, [])
   
    const router = useRouter()
    
    const handleClickVerContraoferta =(id)=>{
      console.log('idHisto:', id);
        cambiarIdHistoria(id)
        console.log('idzusthistoria:', idHistoria);
        //idHistoria
        router.push('/dashboard/po/poContraOfertas/verContraOferta')
    }

  return (
    <ComPoContraOferta 
      historiaContraOferta={historiaContraOferta}
      handleClickVerContraoferta={handleClickVerContraoferta}
      nombre='Product Owner'

    />
  )
}

export default page