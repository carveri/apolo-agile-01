import { IEmpresa, IHistoria } from "./IGeneral"


export interface IComPoHistoriasRetornadas {
    id: string
    resul: IEmpresa[]
    nombre: string 
}


export interface IHistoriaContraOferta {
    historiaContraOferta: IHistoria[]
    handleClickVerContraoferta:(id:string)=>void
}