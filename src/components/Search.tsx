import React from 'react'
import { useModal } from '../Context/ModalContext.tsx'
import { useTask } from '../Context/Taskontext.tsx'

const Search: React.FC = () => {
  const { openModal } = useModal()
  const {setFilterType,setFilterTitle} = useTask()

  const onchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFilterType(e.target.value)
  }
  const titlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFilterTitle(e.target.value)
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center '>
      <div className='w-full mr-3'>
        <input onChange={(e)=>titlechange(e)} placeholder='Search for task' className='bg-[#e3e3e9] p-2 w-full rounded-full text-xs' type="text" name="search" id="" />
      </div>
        <div className="flex justify-between items-center px-2 mb-4">
          <div className="flex items-center mr-4">
          <input onChange={(e)=>onchange(e)} id="" type="radio" value="All" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
          <label htmlFor="" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
          </div>
          <div className="flex items-center mr-4">
          <input onChange={(e)=>onchange(e)} id="" type="radio" value="DONE" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
          <label htmlFor="" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Done</label>
          </div>
          <div className="flex items-center mr-4">
          <input onChange={(e)=>onchange(e)} id="" type="radio" value="NOTDONE" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
          <label htmlFor="" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">not Done</label>
          </div>
        </div>
      <div className=''>
        <button
          onClick={() => openModal()}
          className='bg-green-500 py-2 px-6 text-white rounded-full'>Ajouter Taske</button>
      </div>
    </div>
  )
}

export default Search