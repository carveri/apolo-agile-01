import { dataHomePo } from "@/app/(Front)/React/Utils/dataHomePo"
import Image from "next/image"

const Home = ({nombre}:any) => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-6'>
            Dashboard {'>'} Clientes {'>'} {nombre} {'>'} Home
          </header>
          <main className='w-full h-[95%]  px-24 pt-5'>
                      <header className='w-full h-[9%]  flex gap-x-20 px-6 '>
                        {dataHomePo.map((el)=>{
                          return <article key={el.id} className='w-full h-full py-3 rounded-md flex bg-gray-50 border border-violet-50 shadow-lg'>
                            <div className='h-full w-[30%] grid place-content-center '>
                              <Image
                                width={40}
                                height={40}
                                alt='kk'
                                src={el.icono}
                              />
                            </div>
                            <div className='h-full w-[70%] grid grid-rows-2 place-items-center'>
                              <section>
                                {el.nombre}
                              </section>
                              <section className='font-semibold '>
                                {el.valor}
                              </section>
                            </div>
                          </article>
                        })}
                        
                      </header>
                      <section className='w-full h-[91%] p-8 '>
                        <article className='w-full h-[80%] flex'>
                          <div className='w-full h-full'>
                          <Image
                            src='/20230416_133808.jpg'
                            width={300}
                            height={300}
                            alt="qs"

                          
                          />
                          </div>
                          <div className='w-[30%]'>
                            lista
                          </div>
                        </article>
                        <article className='w-full h-[20%] flex'>
                          <div className='w-[80%] h-full '>
                            cosa1
                          </div>
                          <div className='w-[20%] h-full'>
                            cosa2
                          </div>
                        </article>
                      </section>
                    </main>
        </section>
    </div>
  )
}

export default Home