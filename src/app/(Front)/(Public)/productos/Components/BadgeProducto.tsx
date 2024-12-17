import Image, { StaticImageData } from "next/image";

interface IDataProductos {
    id:number,
    nombre: string,
    icono: StaticImageData,
    descripcion: string
}

export interface IEDataProductos {
    el: IDataProductos
}



const BadgeProducto = ({el}:IEDataProductos) => {


  return (
    <div className='w-full h-full border border-gray-200 flex rounded py-4 cursor-pointer hover:shadow-md'>
        <section className="w-1/5 h-full grid place-items-center ">
            <Image
                src={el.icono}
                width={45}
                height={45}
                alt="Picture of the author"
            />
        </section>
        <section className="w-4/5 h-full grid grid-rows-2">
            <header>
                {el.nombre}
            </header>
            <article>
                {el.descripcion}
            </article>
        </section>
    </div>
  )
}

export default BadgeProducto