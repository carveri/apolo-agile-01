
const Home = ({nombre}:any) => {
  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-6'>
            Dashboard {'>'} Clientes {'>'} {nombre} {'>'} Home
          </header>
          <main className='w-full h-[95%] grid place-content-center  px-5 pt-5'>
            DASHBOARD HOME
          </main>
        </section>
    </div>
  )
}

export default Home