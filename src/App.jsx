import { useReducer } from 'react'
import AddTask from './component/AddTask'
import TaskList from './component/TaskList'
import { initialTasks } from './initialTasks'
import taskReducer from './Reducer/taskReducer'

function App() {
  
  const [tasks , dispatch] = useReducer (taskReducer , initialTasks)

const handleAddTask =(text) => {
  dispatch({
      type: 'added_task',
      text: text,
  });
}

const handleEditTask = (task) => {
  dispatch({
    type: 'edit_task',
    task: task,
  });
 
}

const handleDeleteTask = (id) => {
    dispatch({
    type: 'deleted_task',
    id: id,
  });
   
}


  return (
    <>
     <AddTask addTask= {handleAddTask}/>
     <TaskList onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} tasks={tasks}/>
   </> 

  )
}

export default App