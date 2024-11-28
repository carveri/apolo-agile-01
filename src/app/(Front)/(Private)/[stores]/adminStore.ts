import { create } from "zustand";
import { getDataLista } from "../../React/Fetch/getDataLista";


export const useHistoriaAdmin = create((set)=>
({
    usuarios: [],

    getUsuariosClientes: async()=>{
        const ruta = 'userArea'
        const url = '12b87914-ed8c-4411-931e-7b9b567d7117'
        const usuarios = await getDataLista({ruta, url})
        set(state => ({
            ...state, 
            usuarios
        }))
    },
    getUsuariosDevs: async()=>{
        const ruta = 'userArea'
        const url = '68b9247a-5884-46e7-a66f-3341b640469b'
        const usuarios = await getDataLista({ruta, url})
        set(state => ({
            ...state, 
            usuarios
        }))
    },
    getUsuariosPo: async()=>{
        const ruta = 'userArea'
        const url = '2cbca9d4-f9c2-4f8e-a8e3-a04212e901d6'
        const usuarios = await getDataLista({ruta, url})
        set(state => ({
            ...state, 
            usuarios
        }))
    },
    getUsuariosSm: async()=>{
        const ruta = 'userArea'
        const url = 'a73e8ba6-6e6b-4cd7-90a4-925101ea7ffa'
        const usuarios = await getDataLista({ruta, url})
        set(state => ({
            ...state, 
            usuarios
        }))
    },
    getUsuariosAdmin: async()=>{
        const ruta = 'userArea'
        const url = '8bf1bf40-b55e-4000-a0c5-8e1b8e0ba477'
        const usuarios = await getDataLista({ruta, url})
        set(state => ({
            ...state, 
            usuarios
        }))
    },

}))