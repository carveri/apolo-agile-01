import {createPortal} from 'react-dom'

const ModalAviso = ({isOpen, onClose}) => {
  
    if(!isOpen) return null
  
    return (createPortal(
    <>
    <div className='w-[450px] h-28  fixed top-6 left-[40%] rounded-md border border-gray-300 bg-white '>
        <main className='w-full h-full grid justify-center mt-3'>
            <header className='w-full h-[50%] text-lg text-center '>
                El Usuario se agrego correctamente
            </header>
            <section className='flex gap-x-4 w-full h-[50%]'>
                <button onClick={onClose} className='bg-colorBotonPrincipal w-36 h-10 rounded text-colorBotonVer font-semibold'>
                    Ver Lista 
                </button>
                <button onClick={onClose} className='bg-colorBotonEliminar w-36 h-10 rounded text-colorBotonVer font-semibold'>
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