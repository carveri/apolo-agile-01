

// INTERFACES
export interface ISelectForm{
    id: string
    nombreDepartamento: string
} 

export interface ISelectForm2{
    id: string
    nombreCargo: string
}

export interface ISelectForm3{
    id: string
    nombreEquipo: string 
}

export interface IParametro3 {
    areaId: string
    createdAt: string
    horaAt: string
    id: string
    isActive: string
    nombreEquipo: string
    updatedAt: string
}

export interface IEmpresa{
    createdAt: string
    horaAt: string
    id: string
    isActive: boolean
    nombreEmpresa: string
    rutEmpresa: string
    updatedAt: string
}