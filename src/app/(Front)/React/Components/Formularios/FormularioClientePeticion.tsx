import React from 'react'

const FormularioClientePeticion = ({handleSumbitCliente, dia, hora, cargoI, activoCargo, cargo, handleClickCargo, handleClickCliente2, userI, activoSolicitante, user, handleClickCliente3, handleChangeCliente, caracterI, activoCaracter, handleClickCaracter, caracter, handleClickCliente4, handleClickSolicitante}) => {
  return (
    <form onSubmit={handleSumbitCliente} action="" className=' w-full h-full '>

                <div className='flex h-[85%]  place-content-center  mt-8 px-56 gap-x-10'>
                    <section className='w-[48%] h-[95%] border border-gray-200 px-4 mr-10 pt-5 bg-white rounded'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl'>
                            Datos del Solicitante
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 '>
                            <article className='flex w-full h-14  justify-end gap-x-10 text-colorTextoTitulo1 items-center font-semibold pr-4'>
                                <div>
                                    {dia}
                                </div>
                                <div>
                                    {hora}
                                </div>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Area del solicitante:</label>
                                <div className=' pl-3 py-4 rounded-md  focus: border border-gray-200 bg-gray-50 grid content-center' >
                                    Cliente
                                </div>
                            </article>
                            
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Cargo del solicitante:</label>
                                    <div className=" pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" onClick={handleClickCargo}>
                                        {cargoI}
                                    </div>
                                    {activoCargo &&
                                        <div className='mt-[250px] z-50 absolute top-60 left-3/5 max-h-[120px] overflow-auto '>
                                            
                                            {cargo.map((el)=>{
                                                const {nombreCargo, id} = el
                                                    return  (<div onClick={()=>handleClickCliente2(id, nombreCargo)} className='w-[435px] cursor-pointer ml-2 h-10 bg-white hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                        {nombreCargo}
                                                    </div>)
                                                })}
                                        </div>
                                    
                                    }
                            </article>
                            <article className='grid grid-rows-2'>
                            <label  htmlFor="">Email del solicitante:</label>
                                    <div className=" pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" onClick={handleClickSolicitante}>
                                        {userI}
                                    </div>
                                    {activoSolicitante &&
                                        <div className='mt-[360px] z-50 absolute top-60 left-3/5 max-h-[120px] overflow-auto '>
                                            
                                            {user.map((el)=>{
                                                const {email, id} = el
                                                    return  (<div onClick={()=>handleClickCliente3(id, email)} className='w-[435px] cursor-pointer ml-2 h-10 bg-white hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                        {email} 
                                                    </div>)
                                                })}
                                        </div>
                                    
                                    }
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Punto de historia:</label>
                                    
                                    
                                <input name="puntoDeHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type="number" placeholder="10"/>
                            </article>
                            
                        </div>
                        
                    </section>




                    <section className='w-[48%] h-[95%] border border-gray-200 bg-white  mr-4 pt-5  px-8'>
                        <header className='w-full h-[10%]  grid place-content-center text-xl pb-2' >
                            Detalles de la petición
                        </header>
                        <div className='w-full h-[80%] grid grid-rows-5 px-8 mt-2 '>
                            
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Nombre de la petición (Historia de usuario):</label>
                                    
                                    
                                <input name="nombreHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="text" placeholder="Agregar calendario..."/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Caracter de la petición:</label>
                                    <div className=" pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" onClick={handleClickCaracter}>
                                        {caracterI}
                                    </div>
                                    {activoCaracter &&
                                        <div className='mt-[162px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                            
                                            {caracter.map((el)=>{
                                                    const {nombreCaracter, id} = el
                                                    return  (<div onClick={()=>handleClickCliente4(id, nombreCaracter)} className='w-[660px] cursor-pointer ml-2 h-10 bg-white hover:bg-violet-200  grid items-center pl-4' key={el.id}>
                                                        {nombreCaracter}
                                                    </div>)
                                                })}
                                        </div>
                                    
                                    }
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Monto del presupuesto de la petición (CLP):</label>
                                    
                                    
                                <input name="presupuestoHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="number" placeholder="100.000"/>
                            </article>
                            <article className='grid grid-rows-2 pb-3'>
                                <label  htmlFor="">Tiempo estimado de la petición (dias):</label>
                                    
                                    
                                <input name="tiempoHistoria" onChange={handleChangeCliente} className="pl-3 py-4 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="number" placeholder="7"/>
                            </article>
                            <article className='grid  pb-3  h-28'>
                                <label className="h-7 "  htmlFor="">Detalle de la petición:</label>
                                    
                                    
                                <input name="detalleHistoria" onChange={handleChangeCliente} className="pl-3  h-24 rounded-md bg-white border border-gray-200 cursor-pointer  grid content-center" type="text" placeholder="Se requiere un calendario de color azul..."/>
                            </article>
                        </div>
                        
                    </section>
                </div>
                <div className=' w-full h-[7%] grid place-items-center  mt-2'>
                    <button className='w-[20%] h-[90%] bg-colorBotonPrincipal hover:bg-hoverColorBotonPrincipal text-white rounded font-semibold'>
                        Enviar
                    </button>
                </div>
            </form>
  )
}

export default FormularioClientePeticion