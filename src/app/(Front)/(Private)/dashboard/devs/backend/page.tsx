import React from 'react'
import CuerpoHomeDevs from '../[Components]/CuerpoHomeDevs/CuerpoHomeDevs'

const page = () => {
  return (
    <div className='w-full h-full bg-white ' >
        
          <header className='w-full h-[5%] bg-white py-4 pl-4'>
            Dashboard {'>'} Devs {'>'} Backend {'>'}Home
          </header>
          
       
        <main className='w-full h-[95%]  px-5 pt-5'>
          <CuerpoHomeDevs />
        </main>
    </div>
  )
}

export default page