
export const deleteData = async({ruta, url})=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}/${url}`

        const res = await fetch(apiUrl,{
            method: 'DELETE'
        })
        const desjson = await res.json()
        return desjson

    } catch (error) {
        return error
    }
}