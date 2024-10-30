import { useState } from "react"

function TaskItem({task , onEditTask ,onDeleteTask }) {
    const [isEdit , setIsEdit] = useState (false);
    const [text ,setText] = useState ( task.text)


    let onEditContent 

 
    const handleEditTask = () => {
        onEditTask({
            ...task,
            text: text 
        })
        setIsEdit(false)
    }

    if (isEdit){
        onEditContent  = (
   
         <div className='container mx-auto flex justify-center items-center'>
         <input className="text-sm md:text-2xl border-2 p-1 mt-10" value={text} onChange={ (e) => setText(e.target.value)} type="text" />
        <button onClick={handleEditTask} className='text-sm md:text-2xl py-1 px-2 ms-2  md:px-3 mt-10 md:ms-3 rounded-md bg-[#0A8F48]'>Save</button>

         </div>
       
       )
    }else{
        onEditContent  =(
        <> 
         <p className='text-sm md:text-2xl mt-10 me-1 md:me-3 '>#</p>
        <p className=' text-[.875rem] md:text-2xl mt-10 ms-1 md:ms-3 '>{task.text}</p> 
        <button  onClick={() => setIsEdit(true)} className='text-sm md:text-2xl py-1 px-2 ms-2  md:px-3 mt-10 md:ms-3 rounded-md bg-[#0A8F48]'>Edit</button>
        <button onClick={() => onDeleteTask (task.id)} className='block text-sm md:text-2xl py-1 px-2 ms-2  md:px-3 mt-10 md:ms-3 rounded-md bg-red-500'>Delete</button>
        </>

        )
    }



  return (
   
       <div className="container mx-auto flex justify-center items-center">

           {onEditContent }
       </div>
            
     
    
  )
}

export default TaskItem