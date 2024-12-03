import {createPortal} from 'react-dom'

const ModalAviso = ({isOpen, onClose}) => {
  
    if(!isOpen) return null
  
    return (createPortal(
    <>
    <div className='w-[400px] h-24  fixed top-4 left-[45%] rounded-md border border-gray-300 bg-white '>
        <main className='w-full h-full grid justify-center mt-3 pb-2'>
            <header className='w-full h-[30%] text-lg text-center '>
                El Usuario se Agrego con exito
            </header>
            <section className='flex gap-x-4 w-full h-[70%] justify-end'>
                <button onClick={onClose} className='bg-colorBotonPrincipal w-14 h-8 rounded text-colorBotonVer font-semibold'>
                    Ver 
                </button>
                <button onClick={onClose} className='bg-colorBotonEliminar w-16 h-8 rounded text-colorBotonVer font-semibold'>
                    Cerrar
                </button>
            </section>
        </main>
        
        
    </div>
    {/* <div className='mt-2 bg-blue-400 cursor-pointer' onClick={onClose}>
        assd
    </div> */}
    </>,
    document.body
    
  ))
}

export default ModalAviso