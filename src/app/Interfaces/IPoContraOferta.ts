import { IEmpresa } from "./IGeneral"

export interface IHistoriaPorId {
    caracterId: string
    como: string
    createdAt: string
    descripcion1: string
    descripcion2: string
    descripcion3: string
    descripcion4: string
    detalleHistoria: string
    discrepancia1: string
    discrepancia2: string
    discrepancia3: string
    discrepancia4: string
    horaAt: string
    id: string
    isActive: boolean
    nombreHistoria: string
    para:string 
    peso1: number
    peso2: number
    peso3: number
    posicion: number
    presupuestoHistoria:number 
    productBacklogId: string 
    puntoHistoria: number 
    quiero: string 
    status:string
    tiempoHistoria: number
    updatedAt: string 
}

export interface IComPoContraOferta {
    id: string
    resul: IEmpresa[]
    nombre: string 
}

export interface IHistoria {
    historia: IHistoriaPorId
}

export interface IComVerPoContraOferta{
    nombre: string
    historia: IHistoriaPorId[] | undefined | null
    handleClickAgregarAlProductBacklogContra: ()=>void
    handleClickEnviarAlLiderTecnico: ()=>void
}