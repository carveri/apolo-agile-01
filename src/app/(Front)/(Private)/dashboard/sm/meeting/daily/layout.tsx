'use client'

import { useRouter } from "next/navigation";

export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{

  const router = useRouter()
  const handleClickMeeting1 =()=>{
    router.push('/dashboard/sm/meeting/daily')
  }

  const handleClickMeeting2 =()=>{
    router.push('/dashboard/sm/meeting/daily/historialDaily')
  }


  return (
    <div  className='w-full h-full bg-white grid justify-items-center'>
      <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-4 '>
            Dashboard {'>'} Scrum Master {'>'} Daily
          </header>
      </section>
      <main className='w-full h-[100%] text-tamañoLetra -mt-10'> 
        <div>
          {children}
        </div>
      </main>
    </div>
  );
}