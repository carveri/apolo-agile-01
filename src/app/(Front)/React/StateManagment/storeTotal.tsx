import { create } from "zustand";
import { getData } from "../Fetch/getData";

//import {  } from "zustand";

// interface StoreTo{
//     totalPorUsuario: number


// }

export const storeTotal = create((set)=>({

   

    // atr1 
    totalPorUsuario : 0,

    // met1 
    traerTotal: ()=>{
        const ruta = 'gastoTotal'
        set((state)=> ({totalPorUsuario:getData({ruta})}))
    },



}))