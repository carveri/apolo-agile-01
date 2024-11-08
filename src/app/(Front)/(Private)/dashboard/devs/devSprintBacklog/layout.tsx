'use client'

import { useRouter } from "next/navigation";

export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{

  const router = useRouter()
  const handleClickMeeting1 =()=>{
    router.push('/dashboard/devSprintBacklog')
  }

  const handleClickMeeting2 =()=>{
    router.push('/dashboard/devSprintBacklog/historialSprintBacklog')
  }


  return (
    <div  className='w-full h-[32%] grid justify-items-center '>
      <section className='w-[99%] h-[99%]  '>
          <header className='w-full h-[5%] bg-white py-4 pl-4 '>
            Dashboard {'>'} Devs {'>'} Sprint Backlog
          </header>
      </section>
      <main className='w-full h-[40%] '> 
        <header className="w-full h-9  flex px-7">
          <div onClick={handleClickMeeting1} className="border border-gray-200 px-5 grid place-content-center cursor-pointer hover:underline">
            Sprint Backlog Actual
          </div>
          <div onClick={handleClickMeeting2} className="border border-gray-200 px-5 grid place-content-center cursor-pointer hover:underline">
            Historial Sprint Backlog
          </div>
        </header>
        <div>
          {children}
        </div>
      </main>
    </div>
  );
}