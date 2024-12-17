import React from 'react'
import TablaSprintBacklog from '../../[Components]/TablaSprintBacklog/TablaSprintBacklog'
import { logicaTraerIdYres } from '../../../cliente/[Funciones]/logicaTraerIdYRes'

const page = async() => {

    const {id, res}= await logicaTraerIdYres()

  return (
   <>
     <header className='w-full h-[5%] bg-white py-4 pl-4'>
        Dashboard {'>'} Devs {'>'} Backend {'>'} SprintBacklog
    </header>
    <div className='w-[100%] h-[90%] grid justify-items-center '>
        <TablaSprintBacklog
        id={id}
        resul={res}

        />
    </div>
   </>
  )
}

export default page