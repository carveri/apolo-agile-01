'use client'

import { dataHomePo } from '@/app/(Front)/React/Utils/dataHomePo'
import { useEffect} from 'react'
import {  useHistoriaPo } from '../../[stores]/poStore';
import PoHome from './[Componentes]/PoHome/PoHome';


const page = () => {

  // traigo datos desde la store
  const { getHistorias} = useHistoriaPo()


  useEffect(()=>{
    getHistorias()
  }, [])
 
  //
  // useEffect(()=>{
  //   location.reload()
  // }, [])

  return (
    <PoHome
      dataHomePo={dataHomePo}
    />
  )
}

export default page