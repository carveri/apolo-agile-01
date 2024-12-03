import BadgeNoAun from "@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun";
import { format } from "date-fns";
import TablaResolucionTareas from "./TablaResolucionTareas";

const ComClienteResolucionTarea = ({histouseridcargo, handleClickVerResolucionHistoria}) => {
  return (
    <div className='w-full h-full   ' >
        {histouseridcargo.length !== 0 ?
        <section  className='w-[99%] h-[99%]  '>
        <main className='py-2 px-4 w-full h-[99%] '>
            <div className='h-14  bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
                Historias Retornadas
            </div>
            <header className='w-full h-[7%] -mt-7 flex justify-end items-center  pb-3 font-bold mb-1 pr-6  text-colorTextoBarraAlta '>
             
              <div className='pr-3 '>
                Fecha Actual
              </div>
              <div>
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
            <div className='w-[1625px] mt-3  z-30  top-28 left-3/5 max-h-[563px] overflow-auto'>
              <TablaResolucionTareas
                histouseridcargo={histouseridcargo}
                handleClickVerResolucionHistoria={handleClickVerResolucionHistoria}
              />
      </div>
      
        </main>
    </section>: 
          <BadgeNoAun
          nombre = 'Retornada'
        />
                  
      }
            
    </div>
  )
}

export default ComClienteResolucionTarea