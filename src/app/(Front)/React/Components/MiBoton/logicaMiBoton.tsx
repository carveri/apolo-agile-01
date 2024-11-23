

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
            id:2,
            nombre: 'HomePrueba',
            texto: 'Prueba gratis!',
            bgColor: '--botonPrincipal',
            color: 'white',
            ancho: '100%',
            alto: '100%',
            borde:'3%',
            hover: 'hoverBotonPrincipal'
        },
        {
            id:3,
            nombre: 'Ver',
            texto: 'Ver',
            bgColor: '--botonSecundario',
            color: 'white',
            ancho: '100%',
            alto: '100%',
            borde:'6%',
            hover: 'hoverBotonPrincipal'
        },
        {
            id:4,
            nombre: 'Actualizar',
            texto: 'Actualizar',
            bgColor: '--botonActualizar',
            color: 'white',
            ancho: '100%',
            alto: '100%',
            borde:'6%',
            hover: 'hoverBotonPrincipal'
        },
        {
            id:5,
            nombre: 'Eliminar',
            texto: 'Eliminar',
            bgColor: '--botonELiminar',
            color: 'white',
            ancho: '100%',
            alto: '100%',
            borde:'6%',
            hover: 'hoverBotonPrincipal'
        },
    ]

    const res =  arrayLogicaMiBoton

    const buscar = res.find((el)=> el.nombre === nombre)
    return buscar


}