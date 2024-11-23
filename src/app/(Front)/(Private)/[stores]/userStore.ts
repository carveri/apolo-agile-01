import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { create } from "zustand";

export const useUserStore = create((set)=>({
    session: '',

    getSessionUser: async()=>{
        //const ruta = 'historia'
        await getServerSession(authOptions)
        set(state => ({ 
            session: state.session
        }))
    },
}))