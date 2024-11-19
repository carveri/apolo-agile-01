

export const logicaMiBoton = (nombre: string)=>{

    const arrayLogicaMiBoton = [
        {
            id:1,
            nombre: 'HomeIngresar',
            texto: 'Ingresar',
            bgColor: '--botonAceptar',
            color: 'white',
            ancho: '100%',
            alto: '100%',
            borde:'3%',
            hover: 'hoverBotonAceptar'
        },
        {
            id:1,
            nombre: 'HomePrueba',
            texto: 'Prueba gratis!',
            bgColor: '--botonPrincipal',
            color: 'white',
            ancho: '100%',
            alto: '100%',
            borde:'3%',
            hover: 'hoverBotonPrincipal'
        },
    ]

    const res =  arrayLogicaMiBoton

    const buscar = res.find((el)=> el.nombre === nombre)
    return buscar


}