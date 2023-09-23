"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
 e.preventDefault()
  setmainTask([...mainTask , {title , desc}]);

 settitle("")
 setdesc("")
  }
const deleteHandler = (index) =>{
 let copytask = [...mainTask]
 copytask.splice(index,1)
 setmainTask(copytask)
}
 let renderTask = <h2>No Task Available</h2>

 if(mainTask.length>0){
  renderTask = mainTask.map((title,index)=>{
    return (
      <li key={index} className='flex items-center justify-between'>
        <div key={index} className='flex justify-between mb-5 w-2/3 items-center' >
        <h5 className='text-xl font-semibold'>{title.title}</h5>
        <h6 className='text-xl font-medium'>{title.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(index)
      }}
      className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    )
   })
 } 
  return (
    <>
    <h1 className='bg-black text-white  p-5 text-5xlxl font-bold text-center'>My to-do-list</h1>
  <form onSubmit={submitHandler}>
<input 
type="text"
 className='text-black text-xl border-zinc-800 border-2 m-5 px-4 py-2  rounded-lg'
  placeholder='Enter Task Here'
  value={title}
  onChange={(e)=>{
    settitle(e.target.value)
  }}
  />

<input 
type="text"
 className='text-black text-xl border-zinc-800 border-2 m-5 px-4 py-2  rounded-lg'
  placeholder='Enter Description Here'
  value={desc}
  onChange={(e)=>{
    setdesc(e.target.value)
  }}
  />

  <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded-lg hover:bg-gray-500'>Add Task</button>

  </form>
  <hr />
 <div className='p-8 bg-slate-300'>

  <ul>
    {renderTask}
  </ul>
 </div>


    </>
  )
}

export default page
