import { IEmpresa, IHistoria } from "./IGeneral"


export interface IClientesHistoriasEnviadas {
    handleClickMeeting1: ()=>void
    handleClickMeeting2: ()=>void
    children: React.ReactNode
    nombre : string
}

export interface IComPageHistoriasEnviadas{
    id: string
    resul: IEmpresa[] 
}

export interface IhistouseridcargoEnviada {
    histouseridcargo: IHistoria[]
}