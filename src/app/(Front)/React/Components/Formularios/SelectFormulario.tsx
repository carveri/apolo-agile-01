'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

// IMAGENES
import flechaAbajo from "./../../../React/Assets/Icons/flechaAbajo4.png";
import { getData } from "../../Fetch/getData";


const SelectFormulario = ({titulo,  parametro, inicial, altura, restriccion, nombre}) => {

   
    
    const [parametro1, setParametro1] = useState(inicial)
    const [parametros1, setParametros1] = useState([])
    const [parametros1Id, setParametros1Id] = useState('cc3aa0df-1698-47fe-a417-22cec1e46aff')
    const [targ, setTarg] = useState('')


    // estado de activacion
    const [activoParametro1, setActivoParametro1] = useState(false)

    useEffect(()=>{
        const traerParametros = async()=>{
            const ruta = parametro
            const res = await getData({ruta})
            setParametros1(res)
        }    
        traerParametros()
        
    }, [])

    
    const handleClickSelectForm =({id,nombreCargo, nombre})=>{
        setParametros1Id(id)
        setTarg(nombre)
        
        setParametro1(nombreCargo)
        setActivoParametro1(false)
    }

    const handleClickParam = ()=>{
        setActivoParametro1(!activoParametro1)
    }

    
    console.log('paramet:', parametros1);
    console.log('altura:', altura);
    console.log('nombresito:', targ);
    
    

            return (
                    <article className='grid grid-rows-2 pb-3 '>
                        <label  htmlFor="">{titulo}</label>
                            <div  className=" pl-3 rounded-md  border border-gray-200 cursor-pointer  flex space-x-[150px]  " onClick={handleClickParam}>
                        <div className=" w-56 pt-2">
                            {parametro1}
                        </div> 
                        {/* <input type="text" className="w-56 "  readOnly aria-valuetext="ds" defaultValue={parametro1} name="cargoId"/> */}
                        <div className="pt-2">
                            <Image
                                src={flechaAbajo}
                                alt="a"
                                width={20}
                                height={20}
                            />
                            </div>
                        </div>
                        {activoParametro1 &&
                            <div className={` mt-[90px] z-50 absolute left-3/5 max-h-44 overflow-auto `}>
                                            
                                {parametros1.map((el)=>{
                                    const {id, nombreCargo} = el
                                        return  (<button name='cargoId' onClick={(nombre)=>handleClickSelectForm({id, nombreCargo, nombre})} className='w-[405px] text-start cursor-pointer ml-2 h-10 bg-white hover:bg-violet-200  pl-4' key={id}>
                                            {nombreCargo}
                                                </button>)
                                                })}
                                        </div>
                                    
                                    }
                            </article>
  )
}

export default SelectFormulario