
interface IUserSession{
    name: string 
    email: string 
    image: string 
    id: string
    res: [{
        id: string
        nombreEmpresa: string
        rutEmpresa: string
        isActive: boolean
        createdAt: string
        horaAt: string
        updatedAt: string
    }]
}

export interface ISession{
    user: IUserSession
}