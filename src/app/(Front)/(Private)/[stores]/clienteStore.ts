import { create } from "zustand";
import { getDataCompleja } from "../../React/Fetch/getDataCompleja";
import { IEmpresa } from "@/app/Interfaces/IGeneral";
import { getDataLista } from "../../React/Fetch/getDataLista";


interface IuseHistoriaCliente {
    historiasEnviadas: []
    historiasAceptas:[]
    historiasRetornadas: []
    historia: []
    getHistoriasEnviadas:(resul: IEmpresa[],id: string)=>void
    getHistoriasAceptadas:(resul: IEmpresa[],id: string)=>void
    getHistoriasRetornadas:(resul: IEmpresa[],id: string)=>void
    getHistoria:(idHistoria:string)=>void
}

export const useHistoriaCliente = create<IuseHistoriaCliente>((set)=>
({
    
    historiasEnviadas:[],
    historiasAceptas: [],
    historiasRetornadas: [],
    historia:[],
    
    getHistoriasEnviadas: async(resul, id)=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = id
        const param2 = 'Pendiente'
        const param3 = resul.at(0)?.id
        const historiasEnviadas = await getDataCompleja({ruta, param1, param2, param3})
        set(state =>({
            ...state, 
            historiasEnviadas
        }))
    },

    getHistoriasAceptadas: async(resul, id)=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = id
        const param2 = 'Aceptada'
        const param3 = resul[0]?.id
        const historiasAceptas = await getDataCompleja({ruta, param1, param2, param3})
        set(state =>({
            ...state, 
            historiasAceptas
        }))
    },

    getHistoriasRetornadas: async(resul, id)=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = id
        const param2 = 'Retornada'
        const param3 = resul.at(0)?.id
        const historiasRetornadas = await getDataCompleja({ruta, param1, param2, param3})
        set(state =>({
            ...state, 
            historiasRetornadas
        }))
    },

    getHistoria: async(idHistoria)=>{
        const ruta = 'historia'
      const url = idHistoria
      const historia = await getDataLista({ruta, url})
      set(state =>({
        ...state, 
        historia
    }))
    }

    
}))