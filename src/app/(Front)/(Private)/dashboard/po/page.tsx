'use client'

import { dataHomePo } from '@/app/(Front)/React/Utils/dataHomePo'
import { useEffect} from 'react'
import Image from "next/image";
import {  useHistoriaPo } from '../../[stores]/poStore';
import PoHome from './[Componentes]/PoHome/PoHome';


const page = () => {

  // traigo datos desde la store
  const { getHistorias, historias} = useHistoriaPo()


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