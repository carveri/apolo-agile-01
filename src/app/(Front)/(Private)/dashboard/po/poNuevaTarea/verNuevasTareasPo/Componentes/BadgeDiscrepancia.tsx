import { dataPesoHistoria } from '@/app/(Front)/React/Utils/dataPesoHistoria'
import { dataTiempoHistoria } from '@/app/(Front)/React/Utils/dataTiempoHistoria'
import React from 'react'

const BadgeDiscrepancia = ({dis, numero, checked, setChecked, handleClickVerNuevasTareas, discrepanciaI, handleChangeDiscrepancia,  handleClickTiempo, tiempoI, activoTiempo, tiempoh, handleClickPeso, pesoI, activoPeso, pesoh, top1, top2}) => {
  return (
    <>
        <label  className='flex content-center '  htmlFor=""> 
                                        <div className='mr-1'>
                                            <input type="checkbox" onChange={(e)=>setChecked(!checked)} />
                                        </div>
                                            Discrepancia {numero}:
                                    </label>
                            {checked &&
                                <article className='flex mb-4  w-[100%] bg-white'>
                                <section className='w-[70%] '>
                                    

                                    
                                    <div className={`pl-3 h-8 rounded-md ${checked ? 'bg-gray-100': 'bg-gray-300'} bg-gray-100 border border-gray-200 cursor-pointer  grid content-center`} onClick={handleClickVerNuevasTareas}>
                                        {discrepanciaI}
                                    </div>
                                    <div className='grid grid-rows-2 h-14'>
                                    <label htmlFor="">
                                        Descripción (opcional)
                                    </label>
                                    {checked ?
                                        <input name='discrepancia1'  onChange={handleChangeDiscrepancia} className='h-8 border border-gray-200 rounded pl-2' type="text" />: <input name='discrepancia1' readOnly onChange={handleChangeDiscrepancia} className='h-8 border border-#a4a1a1 rounded pl-2 bg-gray-300' type="text" />
                                    }
                                    </div>


                                </section>
                                <section className=' w-[30%] h-full flex  '>
                                <article className=' w-1/3 h-full px-2 '>
                                        <div className='h-[40%] text-center bg-white' >
                                            {dis.titulo1}
                                        </div>
                                        <div className='w-full h-20  text-center pt-4 bg-white'>
                                            4
                                        </div>
                                    </article>

                                    <article className=' w-1/3 h-full px-2 '>
                                    <div className='h-[30%] w-full  grid place-content-center text-center'>
                                        {dis.titulo2}
                                    </div>
                                    <div onClick={handleClickTiempo} className='border border-gray-200 w-full h-[30%] mt-4  grid place-content-center cursor-pointer'>
                                        {tiempoI}
                                    </div>
                                    {activoTiempo && 
                                        <div className={`mt-${top1} z-50 absolute  left-3/5 max-h-20 overflow-auto`}>
                                        {dataTiempoHistoria.map((el)=>{
                                            const {id, tiempo} = el
                                            return <div key={id} onClick={()=>tiempoh(id,tiempo)} className='w-[123px] text-center bg-gray-50 hover:bg-gray-300 cursor-pointer pl-6'>
                                                {tiempo}
                                            </div>
                                        })}
                                        </div>
                                    }
                                </article>
                                <article className=' w-1/3 h-full px-2'>
                                    <div className='h-[40%]  grid place-content-center text-center'>
                                        {dis.titulo3}
                                    </div>
                                    <div onClick={handleClickPeso} className='border border-gray-200 w-full h-[30%] mt-4  grid place-content-center cursor-pointer'>
                                        {pesoI}
                                    </div>
                                    {activoPeso && 
                                        <div className={` mt-${top2} z-50 absolute left-3/5 max-h-24 overflow-auto`}>
                                        {dataPesoHistoria.map((el)=>{
                                            const {id, nombrePeso} = el
                                            return <div key={el.id} onClick={()=>pesoh(id,nombrePeso)} className='w-[123px] text-center bg-gray-50 hover:bg-gray-300 cursor-pointer pl-6'>
                                                {nombrePeso}
                                            </div>
                                        })}
                                        </div>
                                    }
                                </article>
                            </section>
                    </article>
                    }
    </>
  )
}

export default BadgeDiscrepancia