
export const postData = async({ruta, data})=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}`

        const res = await fetch(apiUrl,{
            method: 'POST',
            body: JSON.stringify(data)
        })
        const desjson = await res.json()
        return desjson
    } catch (error) {
        return error
    }
}