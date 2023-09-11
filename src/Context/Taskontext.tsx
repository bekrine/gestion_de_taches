import { ReactNode, createContext, useContext, useReducer, useState } from "react";

interface Task {
    id:number,
    title:string,
    discription:string,
    isDone:boolean ,

}

type TasksAction =
| { type: 'ADD_TASK'; payload: Task }
| { type: 'TOGGLE_TASK'; payload: number }
| { type: 'REMOVE_TASK'; payload: number }
| { type: 'UPDATE_TASK'; payload: Task };

interface TasksContextType {
    tasks:Task[],
    filterType:string,
    filterTitle:string,
    setFilterTitle:(type:string)=>void,
    setFilterType:(type:string)=>void,
    dispatch: React.Dispatch<TasksAction>;
}

const initialState: Task[] = [];

const tasksReducer = (state: Task[], action: TasksAction): Task[] => {

    switch (action.type) {
      case 'ADD_TASK':
        return [...state, action.payload];
      case 'TOGGLE_TASK':
        return state.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        );
      case 'REMOVE_TASK':
        return state.filter((task) => task.id !== action.payload);
        case 'UPDATE_TASK':
          return state.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
  
      default:
        return state;
    }
  };


const TasksContext = createContext<TasksContextType | undefined>(undefined)

export function useTask(){
    const context = useContext(TasksContext)
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
      }
      return context;
}

interface usetaskProvider {
    children : ReactNode
}

export function TasksProvider({children}:usetaskProvider){
    const [tasks,dispatch]=useReducer(tasksReducer,initialState)
    const [filterType,setFilterType]=useState('All')
    const [filterTitle,setFilterTitle]=useState('')
return(
    <TasksContext.Provider value={{tasks,dispatch,filterType,setFilterType,filterTitle,setFilterTitle}}>
        {children}
    </TasksContext.Provider>
)

}