import { IEmpresa, IHistoria } from "./IGeneral"


export interface IComLayoutResolucionTarea{
    handleClickMeeting1: ()=>void
    handleClickMeeting2: ()=>void
    children: React.ReactNode
    nombre : string
}

export interface IComPageHistoriasResolucion{
    id: string
    resul: IEmpresa[] 
}

export interface IhistouseridcargoResoluciono {
    histouseridcargo: IHistoria[]
    handleClickVerResolucionHistoria:(id:string)=>void
}