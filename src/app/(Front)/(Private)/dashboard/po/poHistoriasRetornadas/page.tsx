import React from 'react'
import ComPoHistoriasRetornadas from '../[Componentes]/ComPoHistoriasRetornadas/ComPoHistoriasRetornadas';
import { logicaTraerIdYres } from '../[Funciones]/logicaTraerIdYRes';

const page = async() => {


  const {id, res}= await logicaTraerIdYres()

  
  return (
    <ComPoHistoriasRetornadas
      nombre='Product Owner'
      id={id}
      resul={res}
    />
  )
}

export default page