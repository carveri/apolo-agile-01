'use client'

import Tabla from '@/app/(Front)/React/Components/Tablas/Tabla'
import React, { useEffect } from 'react'
import { format } from "date-fns";
import BadgeNoAun from '@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun';
import { IComAdmin } from '@/app/Interfaces/IComAdmin';
import { useHistoriaAdmin } from '../../../[stores]/adminStore';

const ComAdmin = ({logicaTabla,nombre, url,res}:IComAdmin) => {

  //console.log('resllega;', res);
  const {usuarios, getUsuarios} = useHistoriaAdmin()
  
  const empresaId =  res.at(0)?.id

  useEffect(()=>{
    getUsuarios(url, empresaId)
  }, [])

  
  
  return (
    <div className='w-full h-full ' >
        {usuarios.length !== 0 ?
        <section  className='w-[99%] h-[99%] '> 
        <main className=' px-4 w-full h-[99%] '>
            <div className='h-14  bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
               {nombre} {res.at(0)?.nombreEmpresa}
            </div>
            <header className='w-full h-[7%] -mt-12 flex justify-end items-center  pb-3 font-bold mb-1 pr-6  text-colorTextoBarraAlta'>
              <div className='pr-3 '>
                Fecha Actual
              </div>
              <div>
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
            <div className='w-[1620px] mt-1 z-30  top-28 left-3/5 max-h-[617px] overflow-auto'>
            <Tabla
                logicaTabla ={logicaTabla}
                usuarios={usuarios}
            />
      </div>
        </main>
    </section>: 
    <BadgeNoAun
        nombre = {nombre}
    />
      }      
    </div>
  )
}

export default ComAdmin