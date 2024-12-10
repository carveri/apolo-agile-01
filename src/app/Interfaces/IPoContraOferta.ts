import { IEmpresa, IHistoria } from "./IGeneral"


export interface IComPoContraOferta {
    id: string
    resul: IEmpresa[]
    nombre: string 
}

export interface IComVerPoContraOferta{
    nombre: string
    historia: IHistoria[]
    handleClickAgregarAlProductBacklogContra: ()=>void
    handleClickEnviarAlLiderTecnico: ()=>void
}