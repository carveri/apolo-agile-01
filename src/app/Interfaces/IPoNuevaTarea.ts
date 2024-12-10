import { Dispatch, SetStateAction } from "react"
import { IEmpresa, IHistoria } from "./IGeneral"


export interface IPoNuevaTarea {
    nombre: string
    id: string
    resul: IEmpresa[]
}

export interface ITablaComPoNuevaTarea {
    historiaStatus: IHistoria[]
    handleClickVerNuevasTareasPo: (id:string)=>void
}


interface Idis {
    titulo1: string
    titulo2: string
    titulo3: string
}

export interface IBadgeDiscrepancia {
    numero : string
    checked: boolean
    setChecked :Dispatch<SetStateAction<boolean>>
    handleClickVerNuevasTareas: ()=>void
    discrepanciaI: string
    dis: Idis
    parame: number
    handleChangeDes:(e: React.ChangeEvent<HTMLInputElement>) => void
    handleChangeInputPeso:(e: React.ChangeEvent<HTMLInputElement>) => void
    handleChangeInputParam:(e: React.ChangeEvent<HTMLInputElement>) => void
}