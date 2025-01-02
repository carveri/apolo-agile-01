'use client'

import {createPortal} from 'react-dom'
import FormularioActualizar from './FormularioActualizar'

const ModalGestionUsuario = ({isOpen, onClose}) => {

    //const [isClose, setisClose] = useState(false)
  
    if(!isOpen) return null
  
    return (createPortal(
    <>
    <div className='w-[400px] h-[800px]  fixed top-4 left-[45%] rounded-md border border-gray-300 bg-red-600 '>
        <main className='w-full h-full grid justify-center mt-3 pb-2'>
            <header className='w-full h-[30%] text-lg text-center '>
                Actualizar Usuario
            </header>
            <FormularioActualizar
                id=''
                isOpen={isOpen}
                IsClose={!isOpen}
            />
        </main>
        
        
    </div>
    {/* <div className='mt-2 bg-blue-400 cursor-pointer' onClick={onClose}>
        assd
    </div> */}
    </>,
    document.body
    
  ))
}

export default ModalGestionUsuario