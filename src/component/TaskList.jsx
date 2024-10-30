import TaskItem from "./TaskItem"

function TaskList({tasks , onEditTask ,onDeleteTask}) {
  return (
    <>
        <ul>
            {tasks.map(task => <TaskItem onEditTask={onEditTask} onDeleteTask={onDeleteTask} key={task.id}  task={task}/>)}
            
        </ul>   
    </>
  )
}

export default TaskList