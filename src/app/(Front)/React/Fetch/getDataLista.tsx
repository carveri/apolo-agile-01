

export const getDataLista = async({ruta, url})=>{
    console.log('ruta en el gettt:', ruta);
    console.log('url en el geett:', url);
    
    
    
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}/${url}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        return error
    }
}