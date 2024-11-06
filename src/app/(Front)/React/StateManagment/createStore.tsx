import { create } from 'zustand'

export const useStorePrueba = create((set) => ({
  bears: 343,
  //increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),

  //nuevoBear: (cosa)=>set((state)=> ({cosa:cosa}))
  traerData:()=>set(()=>{
    const res = 3+3
    return res
  })
}))