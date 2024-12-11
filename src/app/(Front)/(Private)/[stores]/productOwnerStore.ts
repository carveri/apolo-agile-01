
import { create } from "zustand";

import { getDataLista } from "../../React/Fetch/getDataLista";
import { IHistoriaPorId } from "@/app/Interfaces/IPoContraOferta";


interface IUseHistoriaProductOwner {
    historiaPorId: IHistoriaPorId[]

    getHistoriaPorId:(idHistoria:string)=>void

}

export const useHistoriaProductOwner = create<IUseHistoriaProductOwner>((set)=>
    ({
        historiaPorId: [],

        getHistoriaPorId: async(idHistoria)=>{
            const ruta = 'historia'
            const url = idHistoria
            const historiaPorId = await getDataLista({ruta, url})
            set(state =>({
                ...state, 
                historiaPorId
            }))
        }
        
    
    }))