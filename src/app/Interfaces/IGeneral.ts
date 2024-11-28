
export interface IUsua{
    primerNombre: string
  }
  
  export interface IArea {
    id: string
    nombreArea: string
    isActive: boolean
    createdAt: string
    horaAt: string
    updatedAt: string
    equipos: IUsua[]
  }
  
  export interface IDepartamento {
    id: string
    nombreDepartamento: string
    isActive: boolean
    createdAt: string
    horaAt: string
    updatedAt: string
    areaId: string
    area: IArea
  }
  
  export interface ICargo {
    id: string
    nombreCargo: string
    isActive: boolean
    createdAt: string
    horaAt: string
    updatedAt: string
    departamentoId: string
    departamento: IDepartamento
  }
  
  export interface IUsuarios {
    id: string
    primerNombre: string
    segundoNombre: string
    apellidoPaterno: string
    apellidoMaterno: string
    rutPersonal: string
    password: string
    isActive: boolean
    email: string
    emailVerified?: null | string
    image?: null | string
    createdAt: string
    horaAt: string
    updatedAt: string
    empresaId: string
    cargoId: string
    equipoId: string
    cargo:  ICargo
  }

  export interface IHistoria{
    id: string
    nombreHistoria: string
    presupuestoHistoria: number
    puntoHistoria: number
    tiempoHistoria: number
    detalleHistoria: string
    descripcion1: string
    descripcion2: string
    descripcion3?: string
    descripcion4?: string
    discrepancia1: string
    discrepancia2: string
    discrepancia3?: string
    discrepancia4?: string
    createdAt: string
    horaAt: string
    updatedAt: string
    productBacklogId: string
    caracterId: string
    userId: string
    isActive: boolean
    status: string
    peso1: number
    peso2: number
    peso3?: number
    posicion: number
    como: string
    para: string
    quiero: string
  }