import React from 'react'

const Search = () => {
  return (
    <div>
        <div className='flex items-center justify-between rounded-lg p-5'>
          <div className='relative flex-grow mr-2'>
            <img src="./assets/icons/search.svg" alt="search" className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5'/>
            <input type="text" placeholder='search recipe' className='w-full pl-10 p-3 border border-gray-300 rounded-md text-xl'/>
          </div>
          <button className='bg-red-400 py-[1.5vh] px-5 rounded-2xl text-xl text-white'>Cari</button>
</div>

    </div>
  )
}

export default Search