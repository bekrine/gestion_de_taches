import React, { useEffect, useRef, useState } from 'react'
import { useTask } from '../Context/Taskontext.tsx'
import { useModal } from '../Context/ModalContext.tsx'

function TaskForm() {
  const prevent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  const { dispatch ,tasks} = useTask()
  const {closeModal,update,id} = useModal()
  const titleRef = useRef<HTMLInputElement>(null)
  const discRef = useRef<HTMLTextAreaElement>(null)
  const [errors, setErrors] = useState({isError:false,message:''})

  useEffect(()=>{
    if(id !== undefined && titleRef.current !== null && discRef.current !== null ) {
      let updatTask=tasks.filter(task=>task.id === id)
        titleRef.current.value= updatTask[0].title
        discRef.current.value= updatTask[0].discription
    }

  },[])
  const addTask = () => {
    if(titleRef.current?.value === ''){
      setErrors({isError:true,message:'title can not be empty'})
    }else
    if (titleRef.current?.value !== undefined && discRef.current?.value !== undefined) {
    const id = Math.floor(Math.random() * 1000)
      const newTask = { title: titleRef.current?.value, discription: discRef.current?.value, id, isDone: false }
      dispatch({ type: 'ADD_TASK', payload: newTask })
      closeModal()
    }
  }
  const updateTask = () => {
    if(titleRef.current?.value === ''){
      setErrors({isError:true,message:'title can not be empty'})
    }else
    if (titleRef.current?.value !== undefined && discRef.current?.value !== undefined) {
      let updatTask=tasks.filter(task=>task.id === id)
      updatTask[0].title = titleRef.current?.value
      updatTask[0].discription = discRef.current?.value
      let task = updatTask[0]
      dispatch({ type: 'UPDATE_TASK', payload:task})
       closeModal()
    }
  }




  return (
    <div className='w-full' onClick={(e) => prevent(e)}>
      <h1>{update ?'Update' : 'Ajouter'}</h1>
      <div>
        <label htmlFor="" className='mx-2 text-xs text-[#8c8c8e] py-2'>Title</label>
        <input ref={titleRef} type="text" className='bg-[#e3e3e9] p-2 w-full rounded-full text-xs' />
        {errors.isError && <div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 '>{errors.message}</div>}
      </div>
      <div>
        <label htmlFor="" className='mx-2 text-xs text-[#8c8c8e] py-2'>discription</label>
        <textarea ref={discRef} className='w-full p-2 rounded-2xl bg-[#e3e3e9]' name="" id="" cols={30} rows={10}></textarea>
      </div>
      <div className='m-4 flex justify-end' >

        {update ?
        <button
        onClick={updateTask}
        className='bg-green-500 py-2 px-6 text-white rounded-full'
      >Update une Tâche</button>

        :
          <button
          onClick={addTask}
          className='bg-green-500 py-2 px-6 text-white rounded-full'
        >Ajouter une Tâche</button>
        }
      </div>
    </div>
  )
}

export default TaskForm