import React from 'react'
import { Navbar, Search, ResepBaru, ResepPopular } from '@/components'

const Home = () => {
  
  return (
    <div>
      <div className='flex justify-between p-5'>
            <h1 className='text-3xl font-bold'>Hello Indra</h1>
            <img src="./assets/icons/profile.svg" alt="profile" className='border-black border-solid border-2 rounded-full'/>
        </div>
        <div>
          <h2 className='text-2xl px-5'>Ingin rasa apa hari ini?</h2>
        </div>
      <Search/>
      <Navbar />
      <ResepBaru/>
      <ResepPopular/>
    </div>
  )
}

export default Home