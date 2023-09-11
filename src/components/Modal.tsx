import React from 'react'
import { useModal } from '../Context/ModalContext.tsx'

interface ModalProps{
    children:React.ReactNode
}

const Modal:React.FC<ModalProps>=({ children }:ModalProps) =>{
    const {isOpen,closeModal} = useModal()

    if(!isOpen){
        return null
    }

    return (

        <div onClick={closeModal} className='fixed h-screen w-full bg-black bg-opacity-50 flex justify-center items-center '>
            <div className="  p-6 bg-white shadow-md border-2 border-black rounded-2xl ">
                {children}
            </div>
        </div>
    )
}

export default Modal