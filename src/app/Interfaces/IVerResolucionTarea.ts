

export interface IVerResolucionTarea {
    historia: any
    peso1: number | undefined
    peso2: number | undefined
    handleChangeVerResuTarea: (e:React.ChangeEvent<HTMLInputElement>)=>void 
    pesoTiempo: number
    pesoPresupuesto: number
}

export interface IComPagVerResolucionTarea {
    nombre: string
    historia: any 
    peso1: number | undefined
    peso2: number | undefined
    handleChangeVerResuTarea: any
    pesoTiempo: number
    pesoPresupuesto: number
    pesoTotal: number
    limite: number
    handleClickAgregarAlProductBacklog: any
    limiteInferior: number
    handleClickEnviarContraoferta:any
    handleClickEliminarTareaCliente: any
}