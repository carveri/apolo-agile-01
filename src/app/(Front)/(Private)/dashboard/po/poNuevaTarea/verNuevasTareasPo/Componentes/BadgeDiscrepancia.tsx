import { dataPesoHistoria } from '@/app/(Front)/React/Utils/dataPesoHistoria'
import { dataTiempoHistoria } from '@/app/(Front)/React/Utils/dataTiempoHistoria'
import React from 'react'

const BadgeDiscrepancia = ({dis, numero, checked, setChecked, handleClickVerNuevasTareas, discrepanciaI, handleChangeDes,  handleChangeDiscrepancia, parame, handleChangeInputParam,handleChangeInputPeso,handleClickTiempo, tiempoI, activoTiempo, tiempoh, handleClickPeso, pesoI, activoPeso, pesoh, top1, top2}) => {
  return (
    <>
                                    <label  className='flex content-center '  htmlFor=""> 
                                        <div className='mr-1 pt-2'>
                                            <input  type="checkbox" onChange={(e)=>setChecked(!checked)} />
                                        </div>
                                            <div className='h-10 w-full pt-2 pl-2 mb-1 bg-gray-100'>
                                            Discrepancia {numero}:
                                            </div>
                                    </label>
                            {checked &&
                                <article className='flex mb-4  w-[100%] bg-white'>
                                <section className='w-[70%] '>
                                    

                                    
                                    <div className={`pl-3 h-8 ml-4  rounded-md ${checked ? 'bg-gray-100': 'bg-gray-300'} bg-gray-100 border border-gray-200   grid content-center`} onClick={handleClickVerNuevasTareas}>
                                        {discrepanciaI}
                                    </div>
                                    <div className='grid grid-rows-2 h-14 ml-4'>
                                    <label htmlFor="">
                                        Descripción (opcional)
                                    </label>
                                    {checked ?
                                        <input onChange={handleChangeDes}   className='h-8 border border-gray-200 rounded pl-2' type="text" />: <input  readOnly  className='h-8 border border-#a4a1a1 rounded pl-2 bg-gray-300' type="text" />
                                    }
                                    </div>


                                </section>
                                <section className=' w-[30%] h-full flex  '>
                                <article className=' w-1/3 h-full px-2 '>
                                        <div className='h-[40%] text-center bg-white' >
                                            {dis.titulo1}
                                        </div>
                                        <div className='w-full h-20  text-center pt-4 bg-white'>
                                            {parame}
                                        </div>
                                    </article>

                                    <article className=' w-1/3 h-full px-2 '>
                                        <div className='h-[30%] w-full  grid place-content-center text-center pb-3'>
                                            {dis.titulo2}
                                        </div>
                                        
                                        <input onChange={handleChangeInputParam} className='w-full h-8 border border-gray-200 text-center' type="number" placeholder='7' />
                                    </article>
                                    <article className=' w-1/3 h-full px-2 '>
                                        <div className='h-[30%] w-full  grid place-content-center text-center pb-3'>
                                            {dis.titulo3}
                                        </div>
                                        
                                        <input onChange={handleChangeInputPeso} className='w-full h-8 border border-gray-200 text-center' type="number" placeholder='100' />
                                    </article>
                            </section>
                    </article>
                    }
    </>
  )
}

export default BadgeDiscrepancia