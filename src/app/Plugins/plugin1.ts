

class Plugin1 extends FactoryPlugin {
    constructor() {
        super()
        this.nombre = 'Plugin1'
        this.precio = 100
        this.fechaCompra = new Date('2021-01-01')
        this.fechaTermino = new Date('2021-12-31')
        this.area = 'Area1'
        this.caracteristicas = 'Caracteristicas1'
        this.tipoDePago = 'TipoDePago1'
    }


    protected createPlugin =():string => {
        return 'plu1'
    }

}


const plu1 = new Plugin1