import { create } from "zustand";
import { IUsuarios } from "@/app/Interfaces/IGeneral";
import { getDataCompleja2 } from "../../React/Fetch/getDataCompleja2";

interface IAdminStore {
    usuarios: IUsuarios[]
    getUsuarios: (url:string, empresaId: string | undefined)=>void
}


export const useHistoriaAdmin = create<IAdminStore>((set)=>
({
    usuarios: [],
    
    getUsuarios: async(url, empresaId)=>{
        const ruta = 'userArea'
        const param1 = url
        const param2 = empresaId
        const usuarios = await getDataCompleja2({ruta, param1, param2})
        set(state => ({
            ...state, 
            usuarios
        }))
    }
}))