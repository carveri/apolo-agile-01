
export const getDataCompleja3 = async({ruta, param1, param2})=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}?status=${param1}&empresaId=${param2}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        
    }
}