'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

// IMAGENES
import flechaAbajo from "./../../../React/Assets/Icons/flechaAbajo4.png";
import { getData } from "../../Fetch/getData";

const SelectTabla = () => {

    // estados generales
    const [cargoI, setCargoI] = useState('Admin')
    const [cargos, setCargos] = useState([])
    const [cargoId, setCargoId] = useState('cc3aa0df-1698-47fe-a417-22cec1e46aff')
    const [equipos, setEquipos] = useState([])

    // estado de activacion
    const [activoCargo, setActivoCargo] = useState(false)

    useEffect(()=>{
        const traerCargos = async()=>{
            const ruta = 'cargo'
            const res = await getData({ruta})
            setCargos(res)
        }
        const traerEquipos = async()=>{
            const ruta = 'equipo'
            const res = await getData({ruta})
            setEquipos(res)
        }
        traerCargos()
        traerEquipos()
    }, [])

     console.log(cargos);

    const handleClickListaAdmin1 =(id, nombreCargo)=>{
        setCargoId(id)
        setCargoI(nombreCargo)
        setActivoCargo(false)
    }

    const handleClickCargo = ()=>{
        setActivoCargo(!activoCargo)
    }

    console.log({cargoId});
    


  return (
    <article className='grid grid-rows-2 pb-3'>
        <label  htmlFor="">Cargo Usuario:</label>
            <div  className=" pl-3 rounded-md  border border-gray-200 cursor-pointer  flex space-x-[150px]  " onClick={handleClickCargo}>
                <div className=" w-56 pt-2">
                    {cargoI}
                </div> 
                <div className="pt-2">
                    <Image
                        src={flechaAbajo}
                        alt="a"
                        width={20}
                        height={20}
                    />
                    </div>
                    </div>
                        {activoCargo &&
                            <div className='mt-[67px] z-50 absolute top-60 left-3/5 max-h-44 overflow-auto '>
                                            
                                {cargos.map((el)=>{
                                    const {nombreCargo, id} = el
                                        return  (<div onClick={()=>handleClickListaAdmin1(id, nombreCargo)} className='w-[405px] cursor-pointer ml-2 h-10 bg-white hover:bg-violet-200  grid items-center pl-4' key={id}>
                                            {nombreCargo}
                                                </div>)
                                                })}
                                        </div>
                                    
                                    }
                            </article>
  )
}

export default SelectTabla