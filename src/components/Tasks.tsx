import React,{ReactNode} from 'react'
import Task from './Task.tsx'
import { useTask } from '../Context/Taskontext.tsx'

export const Tasks = () => {
    const {tasks,filterType,filterTitle} = useTask()
    let fltredTasks
  
    if(filterType === 'All'){
        fltredTasks = tasks.sort((a,b)=>Number(a.isDone) - Number(b.isDone))
    }if(filterType === 'DONE'){
        fltredTasks = tasks.filter(task=>task.isDone === true)
    }
    if(filterType === 'NOTDONE'){
        fltredTasks = tasks.filter(task=>task.isDone === false)
    }
let content:ReactNode
    tasks.length === 0 ? content = <div className='text-center m-9'>No Task Add new Tasks</div> 
                        : content = 
                        fltredTasks?.filter(task=>task.title.includes(filterTitle)).map((task,index)=>{
        return(
            <Task title={task.title} discription={task.discription} isDone={task.isDone} id={task.id} key={index}/>
        )
    })
  return (
    <div className='w-full grid grid-rows-1 mt-6 sm:m-4'>

    {
        content
    }
    </div>
  )
}
