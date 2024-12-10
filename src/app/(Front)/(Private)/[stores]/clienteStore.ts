import { create } from "zustand";
import { getDataCompleja } from "../../React/Fetch/getDataCompleja";


export const useHistoriaCliente = create((set)=>
({
    
    historiasEnviadas:[],
    


    getHistoriasEnviadas: async(resul, id)=>{
        const ruta = 'historiaStatusCargo' 
        const param1 = id
        const param2 = 'Pendiente'
        const param3 = resul.at(0)?.id
        const historiasEnviadas = await getDataCompleja({ruta, param1, param2, param3})
        set(state =>({
            ...state, 
            historiasEnviadas
        }))
    },
}))