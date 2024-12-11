

import { create } from "zustand";
import { getData } from "../../React/Fetch/getData";
import { IEmpresa, IHistoria } from "@/app/Interfaces/IGeneral";
import { getDataCompleja2 } from "../../React/Fetch/getDataCompleja2";
import { getDataCompleja3 } from "../../React/Fetch/getDataCompleja3";


interface IUseHistoriaPo {
    resHistoria: number
    idHistoria: string
    historiaStatus: IHistoria[]
    historiaStatusRetornada: IHistoria[],
    historiaContraOferta: IHistoria[],
    historiaBacklog: IHistoria[],
    historias: IHistoria[]
    historiaStatusEmpresa: IHistoria[]

    getHistorias: ()=>void
    cambiarIdHistoria: (id:string)=>void
    getHistoriaStatus:()=>void
    getHistoriaStatusRetornada:(resul:IEmpresa[])=>void
    getHistoriaContraOferta: (resul:IEmpresa[])=>void
    getHistoriaBacklog:(resul:IEmpresa[])=>void
    getHistoriaStatusEmpresa:(resul:IEmpresa[])=>void
    updatedHistoriaProductBacklog:(newOrder:any)=>void

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
    historiaStatusEmpresa:[],
    

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

    getHistoriaStatus: async()=>{
            const ruta = 'historiaStatus'
            const param1 = 'Pendiente'
            const param2 = '092cee92-4e22-4270-8aa5-1ba69194cf39'
            const historiaStatus = await getDataCompleja2({ruta, param1, param2})
            set(state =>({
                ...state, 
                historiaStatus
            }))
        },

    // // nueva
    getHistoriaStatusEmpresa: async(resul)=>{
            const ruta = 'historiaStatusEmpresa'
            const param1 = 'Pendiente'
            const param2 = resul.at(0)?.id
            const historiaStatusEmpresa = await getDataCompleja3({ruta, param1, param2})
            set(state =>({
                ...state, 
                historiaStatusEmpresa
            }))
        },


    // retornadas
    getHistoriaStatusRetornada: async(resul)=>{
        const ruta = 'historiaStatus'
        const param1 = 'Retornada'
        const param2 = resul.at(0)?.id
        const historiaStatusRetornada = await getDataCompleja3({ruta, param1, param2})
        set(state =>({
            ...state, 
            historiaStatusRetornada
        }))
    },

    // contraoferta
    getHistoriaContraOferta: async(resul)=>{
        const ruta = 'historiaStatus'
        const param1 = 'ContraOferta'
        const param2 = resul.at(0)?.id
        const historiaContraOferta = await getDataCompleja3({ruta, param1, param2})
        set(state =>({
            ...state, 
            historiaContraOferta
        }))
    },

    // backlog
    getHistoriaBacklog: async(resul)=>{
        const ruta = 'historiaStatus'
        const param1 = 'Aceptada'
        const param2 = resul.at(0)?.id
        const historiaBacklog = await getDataCompleja3({ruta, param1, param2})
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