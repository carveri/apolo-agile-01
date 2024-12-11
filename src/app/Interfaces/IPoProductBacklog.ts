import { IEmpresa, IUsuarios } from "./IGeneral"
import { IUserParams } from "./IParams"

export interface IComPoProductBacklog {
    id: string
    resul: IEmpresa[]
}


export interface ITablaPoProductBacklog {
    id: string
    nombreHistoria: string
    updatedAt2: string
    updatedPintar: string 
    tiempoHistoria: number 
    user?:IUsuarios
    presupuestoHistoria: number
    status: string
    index: any
    createdAt: string 
    updatedAt: string 
    horaAt: string

}