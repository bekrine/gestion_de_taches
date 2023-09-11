import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isOpen: boolean;
  update:boolean;
  id?:number;
  openModal: () => void;
  closeModal: () => void;
  isUpdate: (id:number) => void;

}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState<number>();

  const isUpdate = (id:number) => {
    setUpdate(true);
    setId(id)
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setUpdate(false)
    setId(undefined)

  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal,update,isUpdate,id}}>
      {children}
    </ModalContext.Provider>
  );
}
