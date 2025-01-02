
abstract class FactoryPlugin {
    // atributos comunes
    protected nombre: string = ''
    protected precio: number = 0
    protected fechaCompra: Date = new Date()
    protected fechaTermino: Date = new Date()
    protected area: string = ''
    protected caracteristicas: string = ''
    protected tipoDePago: string = ''



    // metodo comun
    protected createPlugin =():string=>{
        console.log('Plugin creado')
        return ''
    }

}



