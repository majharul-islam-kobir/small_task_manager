import { useState } from "react"

function AddTask({addTask}) {

  const [text , setText] = useState ('')

  const handleAddtask = () => {
    addTask (text)
    setText(' ')

  }
  return (
    <div className="containerr mx-auto flex justify-center items-center">
        <input className="border-2 mt-10 p-1" value={text} onChange={(e) => setText(e.target.value)} type="text" />
        <button onClick={handleAddtask } className="py-2 px-2 md:px-3 bg-[#0A8F48] mt-10 ms-2 md:ms-4 rounded-md">Add</button>
    </div>
  )
}

export default AddTask