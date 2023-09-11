import React from 'react'
import { useTask } from '../Context/Taskontext.tsx'
import { useModal } from '../Context/ModalContext.tsx'


interface task {
    title: string,
     discription?: string,
     id:number,
    isDone:boolean
}

const Task: React.FC<task> = (props:task): JSX.Element => {

    const {dispatch}=useTask()
    const {openModal,isUpdate}= useModal()

    const hundalDone=(id:number)=>{
        dispatch({type:'TOGGLE_TASK',payload:id})
    }

    return (
        <div  className={`border rounded-lg shadow-lg ${props.isDone ? 'bg-gray-300 line-through':''} `} style={{ width: "inherit" }}>
            <div className='flex justify-between'>
                <div className='p-4'>

                    <h1 className='text-center text-xl font-semibold m-4'>
                        {props.title}
                    </h1>
                </div>
                <div className='flex justify-between p-2'>
                <div className=" mr-2">
          <input onClick={()=>hundalDone(props.id)} id="" type="radio" checked={props.isDone} name="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
          </div>
                    <div  className='mr-2'>
                        <button disabled={props.isDone} onClick={()=>dispatch({type:'REMOVE_TASK',payload:props.id})}>
                        <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        </button>
                    </div>

                    <div className='mr-2'>
                        <button disabled={props.isDone}  onClick={()=>{openModal() 
                                            isUpdate(props.id)}}>

                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                                                </button>

                    </div>

                </div>

            </div>

            <div className='flex justify-start pl-2' >
                <p className='text-center text-xs text-[#8c8c8e] p-4 max-w-[70%]'>
                    {props.discription}</p>
            </div>
        </div>
       

    )
}

export default Task