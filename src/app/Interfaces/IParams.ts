// GENERAL
interface Params {
    id: string
}

export interface IParams {
    params: Params
}

// USER
interface UserParams{
    userId: string
}

export interface IUserParams{
    params: UserParams
}

// AREA
interface AreaParams{
    areaId: string
}

export interface IAreaParams{
    params: AreaParams
}

// DEPARTAMENTO
interface DepartamentoParams{
    departamentoId: string
}

export interface IDepartamentoParams{
    params: DepartamentoParams
}

// HISTORIA
interface HistoriaParams{
    historiaId: string
}

export interface IHistoriaParams{
    params: HistoriaParams
}


// CARGOPORUSUARIO
interface CargoPorUsuarioParams{
    usuarioId: string
}

export interface ICargoPorUsuarioParams{
    params: CargoPorUsuarioParams
}


// HISTORIASTATUS
interface HistoriaStatusParams{
    status: string
}

export interface IHistoriaStatusParams{
    params: HistoriaStatusParams
}

// PERMISO
interface PermisoParams{
    id: string
}

export interface IPermisoParams{
    params: PermisoParams
}