import { IEmpresa, IHistoria } from "./IGeneral"


export interface IClientesHistoriasAceptadas {
    handleClickMeeting1: ()=>void
    handleClickMeeting2: ()=>void
    children: React.ReactNode
    nombre : string
}


export interface IComPageHistoriasAceptadas{
    id: string
    resul: IEmpresa[] 
}

export interface Ihistouseridcargo {
    histouseridcargo: IHistoria[]
}