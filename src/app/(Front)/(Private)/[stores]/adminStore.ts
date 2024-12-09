import { create } from "zustand";
import { getDataLista } from "../../React/Fetch/getDataLista";
import { IUsuarios } from "@/app/Interfaces/IGeneral";

interface IAdminStore {
    usuarios: IUsuarios[]
    getUsuarios: (re:string)=>void
}


export const useHistoriaAdmin = create<IAdminStore>((set)=>
({
    usuarios: [],

    getUsuarios: async(re)=>{
        const ruta = 'userArea'
        const url = re
        const usuarios = await getDataLista({ruta, url})
        set(state => ({
            ...state, 
            usuarios
        }))
    }
}))