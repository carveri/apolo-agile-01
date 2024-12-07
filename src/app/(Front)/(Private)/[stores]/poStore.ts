

import { create } from "zustand";
import { getData } from "../../React/Fetch/getData";
import { IHistoria } from "@/app/Interfaces/IGeneral";
import { getDataLista } from "../../React/Fetch/getDataLista";


interface IusePoStore {
    cosa: string
}

export const usePoStore = create<IusePoStore>(()=>({
    
    cosa: 'weas',
}))

interface IUseHistoriaPo {
    resHistoria: number
    idHistoria: string
    historiaStatus: IHistoria[]
    historiaStatusRetornada: IHistoria[],
    historiaContraOferta: IHistoria[],
    historiaBacklog: IHistoria[],
    historias: IHistoria[]

    getHistorias: ()=>void
    cambiarIdHistoria: (id:string)=>void
    getHistoriaStatus:()=>void
    getHistoriaStatusRetornada:()=>void
    getHistoriaContraOferta: ()=>void
    getHistoriaBacklog:()=>void
    updatedHistoriaProductBacklog:(setHistoriaBacklog:[])=>void
}



export const useHistoriaPo = create<IUseHistoriaPo>((set)=>
({
    resHistoria: 4,
    idHistoria: '',
    historiaStatus:[],
    historiaStatusRetornada:[],
    historiaContraOferta: [],
    historiaBacklog:[],
    historias: [],
    getHistorias: async()=>{
        const ruta = 'historia'
        const historias = await getData({ruta})
        set(state => ({
            ...state, 
            historias
        }))
    },

    cambiarIdHistoria: (id)=>{
        const idHistoria = id
        set(state =>({
            ...state, 
            idHistoria
        }))
    },


    // pendientes
    getHistoriaStatus: async()=>{
        const ruta = 'historiaStatus'
        const url = 'Pendiente'
        const historiaStatus = await getDataLista({ruta, url})
        set(state =>({
            ...state, 
            historiaStatus
        }))
    },
    // retornadas
    getHistoriaStatusRetornada: async()=>{
        const ruta = 'historiaStatus'
        const url = 'Retornada'
        const historiaStatusRetornada = await getDataLista({ruta, url})
        set(state =>({
            ...state, 
            historiaStatusRetornada
        }))
    },

    // contraoferta
    getHistoriaContraOferta: async()=>{
        const ruta = 'historiaStatus'
        const url = 'ContraOferta'
        const historiaContraOferta = await getDataLista({ruta, url})
        set(state =>({
            ...state, 
            historiaContraOferta
        }))
    },

    // backlog
    getHistoriaBacklog: async()=>{
        const ruta = 'historiaStatus'
        const url = 'Aceptada'
        const historiaBacklog = await getDataLista({ruta, url})
        set(state =>({
            ...state, 
            historiaBacklog
        }))
    },

    // actualizar la historia del backlog
    updatedHistoriaProductBacklog: (setHistoriaBacklog)=>{
        set(()=>({historiaBacklog:setHistoriaBacklog}))
        
    }

}))