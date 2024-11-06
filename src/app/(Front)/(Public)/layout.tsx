import NavbarHome from "../React/Components/NavbarHome";


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <div className='w-screen h-screen'>
      <section className='w-full h-12  grid justify-items-center'>
        <header className='w-4/5 h-full '>
         <NavbarHome />
        </header>
      </section>
      <section className='w-screen h-[850px]  grid justify-items-center bg-white'>
        <main className='w-4/5 h-full bg-white '>
          {children}
        </main>
      </section>
    </div>
  );
}