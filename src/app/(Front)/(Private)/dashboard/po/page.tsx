'use client'

import { dataHomePo } from '@/app/(Front)/React/Utils/dataHomePo'
import { useEffect} from 'react'
import {  useHistoriaPo } from '../../[stores]/poStore';
import PoHome from './[Componentes]/PoHome/PoHome';


const page = () => {

  const { getHistorias } = useHistoriaPo()


  useEffect(()=>{
    getHistorias()
  }, [])
 
  return (
    <PoHome
      dataHomePo={dataHomePo}
    />
  )
}

export default page