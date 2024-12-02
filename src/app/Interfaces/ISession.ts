
interface IUserSession{
    name: string 
    email: string 
    image: string 
    id: string 
}

export interface ISession{
    user: IUserSession
}