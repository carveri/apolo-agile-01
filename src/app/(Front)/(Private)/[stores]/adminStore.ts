import { create } from "zustand";
import { getDataLista } from "../../React/Fetch/getDataLista";
import { IUsuarios } from "@/app/Interfaces/IGeneral";
import { getDataCompleja2 } from "../../React/Fetch/getDataCompleja2";

interface IAdminStore {
    usuarios: IUsuarios[]
    getUsuarios: (url:string, empresaId: string)=>void
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

    // getUsuarios: async(url)=>{
    //     const ruta = 'userArea'
    //     //const url = url
    //     const usuarios = await getDataLista({ruta, url})
    //     set(state => ({
    //         ...state, 
    //         usuarios
    //     }))
    // }

}))