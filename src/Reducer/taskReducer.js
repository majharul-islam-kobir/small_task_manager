export default function taskReducer (tasks , action){
    switch (action.type) {
        case 'added_task':{
        
            return [
                ...tasks,
                {
                  id: tasks.length + 1,
                  text:action.text,
                }
              ]
        }
            
            case 'edit_task' :{
                return tasks.map(t => {
                    if (t.id===action.task.id){
                      return action.task;
                    }else{
                      return t;
                    }
                   })
            }

            case 'deleted_task': {
                return tasks.filter(task => task.id !==action.id)
            }
    
        default:
            throw new Error('his action doesn\'t exist')
    }
}