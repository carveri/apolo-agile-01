import { create } from "zustand";



interface StoreCount {
    contador: number

    incrementar: ()=> void

    decrementar: ()=> void
}

export const storeCount = create<StoreCount>((set)=>({

    // atributos
    contador: 0,

    // metodos 
    incrementar:()=>{
        set((state)=> ({contador: state.contador + 1}))
    },

    decrementar: ()=>{
        set((state)=> ({contador: state.contador - 1}))
    },

}))