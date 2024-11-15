

export const getDataCompleja = async({ruta, param1, param2})=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}?userId=${param1}&status=${param2}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        
    }
}