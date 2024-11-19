'use client'
import { useState, useEffect } from "react";
import { getData } from "../../Fetch/getData";

const SelectFormularioSearch = () => {


    const [search, setSearch] = useState('')

    // activar
    const [activarCarvo, setActivarCarvo] = useState(true)
    

    useEffect(()=>{
        const traerParametros = async()=>{
            const ruta = 'cargo'
            const res = await getData({ruta})
            setSearch(res)
        } 
        traerParametros()
    }, [])


    console.log({search});

    const handleClickBotonAcivo =()=>{
        setActivarCarvo(!activarCarvo)
    }
    

                    return (
                        <>
                        <label  htmlFor="">Nombre cargo</label>
                        <div  className=" pl-3 rounded-md  border border-gray-200 cursor-pointer  flex space-x-[150px]  " onClick={handleClickBotonAcivo}>
                        <div className=" w-56 ">
                            Admin
                        </div> 
                        <div className="pt-2">
                            w
                            </div>
                        </div>
                        {activarCarvo &&
                            <div  className="mt-[29px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto">
                                <button  className="bg-red-400 w-96">
                                    ff
                                </button>
                            </div>
                        
                        }
                         </>
                        )
                        }

export default SelectFormularioSearch