
export const getData = async({ruta})=>{
    //console.log('ruta:', ruta);
    
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        return error
    }
}