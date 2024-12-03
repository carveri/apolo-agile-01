import { format } from "date-fns";
import TablaVerResolucionTarea from "./TablaVerResolucionTarea";

const ComPagVerResolucionTarea = ({nombre, historia, peso1, peso2, handleChangeVerResuTarea, pesoTiempo, pesoPresupuesto, pesoTotal, limite, handleClickAgregarAlProductBacklog, limiteInferior, handleClickEnviarContraoferta, handleClickEliminarTareaCliente}) => {
  return (
    <div className='w-full h-full '>
        <header className='w-full h-[5%] bg-white py-4 pb-10 pl-4 '>
            Dashboard {'>'} Clientes {'>'} {nombre} {'>'} Resolucion Tarea {'>'} Ver
          </header>
          <main className='w-full h-[95%] '>
          <div className='h-14  bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
                Resolución de Historia Retornada
            </div>
            <header className='w-full h-[7%] -mt-12 flex justify-end items-center  pb-3 font-bold mb-1 pr-6  text-colorTextoBarraAlta '>
             
              <div className='pr-3 '>
                Fecha Actual
              </div>
              <div>
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
                <TablaVerResolucionTarea
                    historia={historia}
                    peso1={peso1}
                    peso2={peso2}
                    handleChangeVerResuTarea={handleChangeVerResuTarea}
                    pesoTiempo={pesoTiempo}
                    pesoPresupuesto={pesoPresupuesto}
                
                />
                <div className='w-full h-[30%]'>

                </div>
                <div className='w-full h-[10%]  grid justify-end pt-7 pr-7 font-bold text-lg'>
                  Total peso de oferta: {Math.round(pesoTotal)}
                </div>
                <div className='w-full h-[10%]  flex justify-end gap-x-2 pr-3'>
                  {pesoTotal > limite &&
                  <button onClick={handleClickAgregarAlProductBacklog} className='bg-colorBotonAceptar w-60 rounded h-12 text-white font-semibold'>
                    Agregar Al Product Backlog
                  </button>
                  
                  }
                  {pesoTotal >limiteInferior && pesoTotal <=limite &&
                    <button onClick={handleClickEnviarContraoferta} className='bg-colorBotonActualizar w-60 rounded h-12 text-white font-semibold'>
                      Enviar Contraoferta
                    </button>
                  
                  }
                  <button onClick={handleClickEliminarTareaCliente} className='bg-colorBotonEliminar w-60 rounded h-12 text-white font-semibold'>
                    Eliminar Tarea
                  </button>
                </div>
          </main>
    </div>
  )
}

export default ComPagVerResolucionTarea