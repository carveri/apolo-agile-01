

import { create } from "zustand";
import { getData } from "../../React/Fetch/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route";


interface IusePoStore {
    cosa: string
}

export const usePoStore = create<IusePoStore>(()=>({
    
    cosa: 'weas',
}))


export const useHistoriaPo = create((set)=>
({
    resHistoria: 4,
    historias: [],
    session: [],
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
    }
}))