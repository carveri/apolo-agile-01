'use client'

import { useState, useEffect } from "react";
import { getData } from "../../../Fetch/getData";

export const useLogicaSelectFuncionario =(parametro, parametros, activo, handleClickSelect, inicial)=>{
    // estados generales
    // const [cargoI, setCargoI] = useState('Admin')
    // const [cargos, setCargos] = useState([])
    // const [cargoId, setCargoId] = useState('cc3aa0df-1698-47fe-a417-22cec1e46aff')
    // const [equipos, setEquipos] = useState([])
    // const [empresaId, setEmpresaId] = useState('092cee92-4e22-4270-8aa5-1ba69194cf39')
    // const [empresas, setEmpresas] = useState([])

    // REAL 
    const [parametro, setParametro] = useState(inicial)
    const [parametros, setParametros] = useState([])
    const [cargoId, setCargoId] = useState('cc3aa0df-1698-47fe-a417-22cec1e46aff')
    const [equipos, setEquipos] = useState([])
    const [empresaId, setEmpresaId] = useState('092cee92-4e22-4270-8aa5-1ba69194cf39')
    const [empresas, setEmpresas] = useState([])

    // estado de activacion
    const [activoCargo, setActivoCargo] = useState(false)

    useEffect(()=>{
        const traerCargos = async()=>{
            const ruta = 'cargo'
            const res = await getData({ruta})
            setCargos(res)
        }
        
        traerCargos()
        
    }, [])

     console.log('carg:', cargos);
     console.log('equi:',equipos);
     console.log('emp:', empresas);
     
     

    const handleClickListaAdmin1 =(id, nombreCargo)=>{
        setParametroId(id)
        setParametro(nombreCargo)
        setActivoCargo(false)
    }

    const handleClickCargo = ()=>{
        setActivoCargo(!activoCargo)
    }

    console.log('cargid:', cargoId);

    return {cargoI, activoCargo, cargos, handleClickListaAdmin1, handleClickCargo}
}