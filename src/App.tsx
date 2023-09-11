
import React from "react";
import Search from "./components/Search.tsx";
import { ModalProvider } from "./Context/ModalContext.tsx";
import { TasksProvider } from "./Context/Taskontext.tsx";
import Modal from "./components/Modal.tsx";
import TaskForm from './components/TaskForm.tsx'
import { Tasks } from "./components/Tasks.tsx";

const App: React.FC = () => {
  return (
    <TasksProvider>
      <ModalProvider>
        <Modal>
          <TaskForm />
        </Modal>
        <div className="flex flex-col items-center justify-center">

          <div className="w-full p-3   md:max-w-[80%] sm:w-full sm:p-8">


            <Search />
            <Tasks />

          </div>
        </div>
      </ModalProvider>
    </TasksProvider>
  );
}

export default App;
