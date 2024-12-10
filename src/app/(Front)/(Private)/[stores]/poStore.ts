

import { create } from "zustand";
import { getData } from "../../React/Fetch/getData";
import { IHistoria } from "@/app/Interfaces/IGeneral";
import { getDataLista } from "../../React/Fetch/getDataLista";
import { getDataCompleja } from "../../React/Fetch/getDataCompleja";
import { getDataCompleja2 } from "../../React/Fetch/getDataCompleja2";
import { getDataCompleja3 } from "../../React/Fetch/getDataCompleja3";


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
    historiaStatusEmpresa: IHistoria[]

    getHistorias: ()=>void
    cambiarIdHistoria: (id:string)=>void
    getHistoriaStatus:()=>void
    getHistoriaStatusRetornada:()=>void
    getHistoriaContraOferta: ()=>void
    getHistoriaBacklog:()=>void
    getHistoriaStatusEmpresa:(resul:[])=>void
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


    // // pendientes
    // getHistoriaStatus: async()=>{
    //     const ruta = 'historiaStatus'
    //     const url = 'Pendiente'
    //     const historiaStatus = await getDataLista({ruta, url})
    //     set(state =>({
    //         ...state, 
    //         historiaStatus
    //     }))
    // },
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