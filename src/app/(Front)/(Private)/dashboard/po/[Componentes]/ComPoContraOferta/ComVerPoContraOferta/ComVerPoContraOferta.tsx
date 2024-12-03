import React from 'react'
import TablaComVerPoContraOferta from './TablaComVerPoContraOferta'

const ComVerPoContraOferta = ({nombre, historia, handleClickAgregarAlProductBacklogContra, handleClickEnviarAlLiderTecnico}) => {
  return (
    <div className='w-full h-full '>
        <header className='w-full h-[5%] bg-white py-4 pb-10 pl-6 '>
            Dashboard {'>'} {nombre} {'>'} Resolucion Tarea {'>'} Ver
          </header>
          <main className='w-full h-[95%] '>
            <header className='bg-colorBarraSuperiorTablas text-colorTextoBarraAlta h-12 grid place-content-center font-semibold mx-6 '>
              Resolucion de ContraOfertas
            </header>
                <TablaComVerPoContraOferta
                    historia={historia}

                />
                <div className='w-full h-[30%]'>

                </div>
                <div className='w-full h-[10%]  grid justify-end pt-7 pr-7 font-bold text-lg'>
                  
                </div>
                <div className='w-full h-[10%]  flex justify-end gap-x-2 pr-3'>
                
                  <button onClick={handleClickAgregarAlProductBacklogContra} className='bg-colorBotonAceptar w-60 rounded h-12 text-white font-semibold'>
                    Agregar Al Product Backlog
                  </button>
                  <button onClick={handleClickEnviarAlLiderTecnico} className='bg-colorBotonActualizar w-60 rounded h-12 text-white font-semibold'>
                    Enviar Al lider Tecnico
                  </button>
                </div>
          </main>
    </div>
  )
}

export default ComVerPoContraOferta