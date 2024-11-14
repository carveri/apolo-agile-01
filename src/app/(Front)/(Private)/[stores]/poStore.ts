

import { create } from "zustand";
import { getData } from "../../React/Fetch/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route";
import { getDataLista } from "../../React/Fetch/getDataLista";


interface IusePoStore {
    cosa: string
}

export const usePoStore = create<IusePoStore>(()=>({
    
    cosa: 'weas',
}))


export const useHistoriaPo = create((set)=>
({
    resHistoria: 4,
    idHistoria: '',

    historias: [],
    session: [],
    historiaStatus: [],
    historiaStatusRetornada: [],
    historiaBacklog: [],
    historiaContraOferta: [],
    getHistorias: async()=>{
        const ruta = 'historia'
        const historias = await getData({ruta})
        set(state => ({
            ...state, 
            historias
        }))
    },
    getSessionPo: async()=>{
        //const ruta = 'historia'
        const session =  await getServerSession(authOptions)
        set(state => ({ 
            ...state, 
            session
        }))
    },
    getHistoriaStatus: async()=>{
        const ruta = 'historiaStatus'
        const url = 'Pendiente'
        const historiaStatus = await getDataLista({ruta, url})
        set(state => ({
            ...state, 
            historiaStatus
        }))
    },
    getHistoriaStatusRetornada: async()=>{
        const ruta = 'historiaStatus'
        const url = 'Retornada'
        const historiaStatusRetornada = await getDataLista({ruta, url})
        set(state => ({
            ...state, 
            historiaStatusRetornada
        }))
    },

    cambiarIdHistoria: (id)=>{
        const idHistoria = id
        set(state =>({
            ...state, 
            idHistoria
        }))
    },

    getHistoriaBacklog: async()=>{
        const ruta = 'historiaStatus'
        const url = 'Aceptada'
        const historiaBacklog = await getDataLista({ruta, url})
        set(state => ({
            ...state, 
            historiaBacklog
        }))
    },
    getHistoriaContraOferta: async()=>{
        const ruta = 'historiaStatus'
        const url = 'ContraOferta'
        const historiaContraOferta = await getDataLista({ruta, url})
        set(state => ({
            ...state, 
            historiaContraOferta
        }))
    },

    

}))