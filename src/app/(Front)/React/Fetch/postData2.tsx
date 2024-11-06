
export const postData2 = async({ruta2, data2})=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta2}`

        const res = await fetch(apiUrl,{
            method: 'POST',
            body: JSON.stringify(data2)
        })
        const desjson = await res.json()
        return desjson
    } catch (error) {
        return error
    }
}